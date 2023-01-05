import * as yup from 'yup';

export const loginValidations = yup.object().shape({
    email: yup.string().email().required("Email should not be empty"),
    password : yup.string().required("Password should not be empty"),
    

        
  });   