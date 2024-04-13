

export  interface  ISocialAccount {
    username: string,
    email : string,
    site: string
};

import  yup from 'yup' ;

export const SocialAccountSchema = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  site: yup.string().url().required(),
});



