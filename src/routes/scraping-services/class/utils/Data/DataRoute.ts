
import { IJson } from "@/../shared/m_object.js";


//Describe the primitive structure/datatype use in the request and result of the routes of each service (cf. ReqTypeRoutes and ResTypeRoutes )

    export class  _passAndEmail {
        username ?:string ; 
        user : string ; //email user 
        password : string; //password 

        static df :IJson = { user : "jhonDoe@gmail.com" , password : "1234" ,username : "Jhon Doe"} ;

            constructor(user : string = _passAndEmail.df.user , password : string =_passAndEmail.df.password , username : string = _passAndEmail.df.username) {
                this.user = user ;
                this.password = password ;
            }
                
            
    } ;

