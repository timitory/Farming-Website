import Validations from "./Validations";

export default class SignUpValidation{
    constructor(email,password,Firstname,RepeatPassword,Lastname){
    this.email=email;
    this.password=password;
    this.Firstname=Firstname;
    this.RepeatPassword=RepeatPassword;
    this.Lastname=Lastname;
    }

        CheckValidations(){
            let errors=[];

            if(!Validations.checkEmail(this.email)){
                errors['email']='Invalid Email';

            }
            if(!Validations.minLength(this.password,6)){
                errors['password']='Password should have minimum of 6 characters'
            }
            if(!Validations.checkName(this.Firstname)){
                errors['Firstname']='Username must have alphabet characters only'
               
            }
            if(!Validations.checkSecondName(this.Lastname)){
                errors['Lastname']='Lastname must have alphabet characters only'
            }
            if(!Validations.confirmPassword(this.RepeatPassword)){
                errors['RepeatPassword']='Password Must Match The Above'
            }
            return errors;
        }
}