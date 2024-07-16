export default class Validations{
    static checkEmail(email){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
            {
              return (true)
            }
              alert("You have entered an invalid email address!")
              return (false)
    }
    static minLength(name,minlength){
        if(name.length < minlength){
            return false;
        }
        else{
            return true;
        }
    }
    static confirmPassword(password,RepeatPassword){
        if(password != RepeatPassword){
            return false
        }
        else{
            return false
        }
    }
    static checkName(Firstname){
    // let letters = /^[A-Za-z]+$/;
if(/^[A-Za-z]+$/.test(Firstname))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
return false;
}
}
static checkSecondName(Lastname){
    // let letters = /^[A-Za-z]+$/;
if(/^[A-Za-z]+$/.test(Lastname))
{
return true;
}
else
{
alert('Lastname must have alphabet characters only');
return false;
}
}
}
