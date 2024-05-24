
import getCurrentLine from "get-current-line"
import { nullOrUndefined } from "@shared/m_primitives.js";
import * as Yup from "yup"





export const UserSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password : Yup.string().required("Password is required"),
  });


export interface IUser{
    username: string,
  
    password: string,

    refreshToken: string
};

const df_refreshToken : "0"= "0" as const ; 
type t_df_refreshToken = typeof df_refreshToken
type t_isDfRefreshToken <T extends string > = T extends t_df_refreshToken ? true : false
const isDfRrefreshToken = <T extends string > (refreshToken: T)  =>{ 
    return (refreshToken === df_refreshToken) as t_isDfRefreshToken<T>;
}

export class User implements IUser{
    username: string;

  
    password:  string;

    refreshToken: string;

    static df_refreshToken = df_refreshToken;
    static isDfRrefreshToken =isDfRrefreshToken

    constructor(username: string, password: string, refreshToken : string=User.df_refreshToken){ 
        this.username = username;
        this.password = password;
        this.refreshToken = refreshToken
    }

    static invalid_User(): User| nullOrUndefined {
        return null ;
    }
    static isInvalid_User(user: User| nullOrUndefined): boolean{
        return user == User.invalid_User()  ;
    }

    static fromJson(data: any): [User | nullOrUndefined, string[]|null ] {
        UserSchema.validate(data).catch((e:Yup.ValidationError)=>{ return [User.invalid_User(),e.errors] }); //TODO
        return [ new User(data.username, data.password, data.refreshToken) , null ] ; 
    }

    static toJson(user: User) { 
        return { username: user.username, password: user.password, refreshToken: user.refreshToken } as const ;
    }
}

//# sourceMappingURL=user.js.map