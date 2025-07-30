function validate(event)
{
    //-------------trim all the input to get real 
    // text that entered by user 
    let Name=document.getElementById('name').value.trim();
    let Email=document.getElementById('email').value.trim();
    let Password=document.getElementById('password').value.trim();
    let Confirm_Password=document.getElementById('confirm-password').value.trim();

    //--------get all the required dom element 
    let ErrorName=document.getElementById('error-name');
    let ErrorEmail=document.getElementById('error-email');
    let ErrorPassword=document.getElementById('error-password');
    let ErrorConfirmPassword=document.getElementById('error-confirm-password');


    //------After submission check if any of the input is empty or not 
    // if yes then show error message below each input 
    // which is empty in red dark color which disappears 
    // when a user start to enter value in input box 
    if(Name===""||Email===""||Password===""||Confirm_Password===""){
        if(Name===""){ErrorName.innerHTML="it is compoulsery to be fill before submission";
        document.getElementById('name').style.borderColor="red";
        }
        if(Email===""){ErrorEmail.innerHTML="it is compoulsery to be fill before submission";
        document.getElementById('email').style.borderColor="red";
        }
        if(Password===""){ErrorPassword.innerHTML="it is compoulsery to be fill before submission";
        document.getElementById('password').style.borderColor="red";
        }
        if(Confirm_Password===""){ErrorConfirmPassword.innerHTML="it is compoulsery to be fill before submission";
        document.getElementById('confirm-password').style.borderColor="red";
        }
        return false;
    }
    
    //-------After submission if all the input are filled first 
    // check validation for name if it is not valid then show 
    // error message for invalid name below input box of name  
    else if(Name.length<3){
        ErrorName.innerHTML="Name must contain at least 3 character";
        document.getElementById('name').style.borderColor="red";
        return false;
    }
    
    //-------After submission if all the input are filled , 
    // name is valid then check validation for password 
    // as given below the condition should be valid for password 
           //----------- <<<<<< "Password must be of length 8 to 
           // 12 and contain at leat one Large Alphabet, One 
           // Small Albhabet, One digit,
           // One Special Character" >>>>>>>>----------//

    // if it is not valid then show the error message 
    // which show the reason of invalidation 

    //----- length of password checked
    else if(Password.length<8){
        ErrorPassword.innerHTML="Password must contain at least 8 digit";
        ErrorConfirmPassword.innerHTML="Password must contain at least 8 digit";
        document.getElementById('password').style.borderColor="red";
        document.getElementById('confirm-password').style.borderColor="red";
        return false;
    }
    else if(Password.length>12){
            ErrorPassword.innerHTML="password should be less than 12 digit ";
            ErrorConfirmPassword.innerHTML="password should be less than 12 digit ";
            document.getElementById('password').style.borderColor="red";
            document.getElementById('confirm-password').style.borderColor="red";
        return false;
    }
    //-----check if password and confirm 
    // password content is same or not 
    else if(Password!==Confirm_Password){
        ErrorPassword.innerHTML="Password and Confirm Password does not match";
        ErrorConfirmPassword.innerHTML="Password and Confirm Password does not match";
        document.getElementById('password').style.borderColor="red";
        document.getElementById('confirm-password').style.borderColor="red";
        return false;
    }
    //----check other condition of validation provide above
    else if(!(Validate_password_LargeAlphabet(Password)&&Validate_password_SmallAlphabet(Password)&&
    Validate_password_digit(Password)&&Validate_password_Specialcharacter(Password)))
    {

        ErrorPassword.innerHTML="Password must contain at leat one Capital Alphabet, One Small Albhabet, One digit,One Special Character";
        ErrorConfirmPassword.innerHTML="Password must contain at leat one Capital Alphabet, One Small Albhabet, One digit,One Special Character";
                // document.getElementsByTagName(p).style.position="static";
        document.getElementById('password').style.borderColor="red";
        document.getElementById('confirm-password').style.borderColor="red";
        return false;
    }
                
    return true;
    }

//---- validate password contain at 
// least one Capital letter of Alphabet
function Validate_password_LargeAlphabet(pass)
{
    for(i=0;i<pass.length;i++)
        if(pass[i]>='A'&&pass[i]<='Z')
            return true;
    return false;
}


//---- validate password contain at least
//  one small letter of Alphabet  
function Validate_password_SmallAlphabet(pass)
{
    for(i=0;i<pass.length;i++)
        if(pass[i]>='a'&&pass[i]<='z')
            return true;
    return false;
}

//---- validate password contain at least one digit
function Validate_password_digit(pass)
{
    for(i=0;i<pass.length;i++)
        if(pass[i]>='0'&&pass[i]<='9')
            return true;
    return false;
}

//---- validate password contain at least one 
// Special character likr - "!@#$%&*"
function Validate_password_Specialcharacter(pass)
{
    for(i=0;i<pass.length;i++)
        if(!((pass[i]>='A'&&pass[i]<='Z')||(pass[i]>='a'&&pass[i]<='z')||(pass[i]>='0'&&pass[i]<='9')))
            return true;
    return false;
}

//--- after error , if user start input again 
// then it stop to show any error ------//

    //-----for name
    document.getElementById('name').addEventListener('input',function(){
    document.getElementById('error-name').innerHTML="";
     document.getElementById('name').style.borderColor="black";
    })

    //----for email
    document.getElementById('email').addEventListener('input',function(){
    document.getElementById('error-email').innerHTML="";
    document.getElementById('email').style.borderColor="black";
    })

    //---for password
    document.getElementById('password').addEventListener('input',function(){
    document.getElementById('error-password').innerHTML="";
    document.getElementById('password').style.borderColor="black";
    })

    //---for confirm password
    document.getElementById('confirm-password').addEventListener('input',function(){
    document.getElementById('error-confirm-password').innerHTML="";
    document.getElementById('confirm-password').style.borderColor="black";
    })

//------ clicking on eye icon of password to toggle the 
// password to text and text to password ----//
    document.getElementById('password-display').addEventListener('click', function(){
    let container = document.getElementsByClassName('password-container')[0];
    let input = container.children[0];
    let icon = container.children[1];

    //----- if previous type is password then it
    //  changed to text on clicking on icon and 
    // icon of awesome font also changed
    if(input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } 
    //----- if previous type is text then it
    //  changed to  password on clicking the icon 
    // and icon of awesome font also changed
    else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});

//----- the same property of toggling applied on password
//  just above is applied also on confirm password input 
// to toggle text to password and password to text 

document.getElementById('confirm-password-display').addEventListener('click', function(){
    let container = document.getElementsByClassName('password-container')[1];
    let input = container.children[0];
    let icon = container.children[1];
            
    if(input.type === "password") {
        input.type = "text";
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
});