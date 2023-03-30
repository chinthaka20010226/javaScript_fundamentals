// // External

// // varible

// var firstName = 'Chinthaka';
// var lastName = 'Senarathna';
// var age = 22;
// var isOk = true;
// var job,height;

// // print varible
// console.log(firstName);

// // string concatination
// console.log('My name is '+firstNam+' '+lastName);

// //  type casting / coercion
// console.log('My age is '+age);

// // variable type
// console.log(typeof(firstName));
// console.log(typeof(age));

// // define
// job = 'Software Engineer';

// // variable mutation
// firstName = 'Parami';

// // display alert
// alert('My name is '+firstNam+' '+lastName+','+' My age is '+age+' & '+'My job is '+job);

// // get user input
// height = prompt('What is your height ');

// // display
// console.log('My height is '+height+' feets');


// // Arithmetic Operators

// // = , + , - , * , / , % , **
// // variable++(post increment) , ++variable(pre increment)
// // variable--(post decrement) , --variable(pre decrement)

// // operator precedence
// var cal = (20+30)/10+4.5-2*4**2;

// // multiple operator

// var ans1,ans2;
// ans1 = ans2 = (((20+30-49)*10)/2)**2;
// console.log(ans1 + ' | ' + ans2);

// // Assignment óperators
// // = , += , -= , *= , /= , %= , **=







// ------How to break line,
// var age = 22;
// fname = 'Chinthaka';
// lname = 'Senarathna';
// university = 'UOM';

// document.write(age);
// document.write(fname);
// document.write(lname);
// document.write(university);

// document.write("<br>"+age+"<br>");
// document.write(fname+"<br>");
// document.write(lname+"<br>");
// document.write(university+"<br>");
//


// -------------------------------------JavaScript Form Validation                       
// function allnumeric(inputtxt){
//     var number = /^[0-9]+$/;
//     if(inputtxt.value.match(number)){
//         alert("Your Registration number has accepted....");
//         return true;
//     }
//     else{
//         alert("Please input numeric characters only");
//         return false;
//     }
// }


// function userid_validation(){
//     var uid = form1.userid;
//     var uid_len = uid.value.length;

//     if(uid_len == 0 || uid_len < 6 || uid_len > 10){
//         alert("It should not be empty / length be between 6 to 10");
//         return false;
//     }
//     alert("successfully entered user id");
//     return true;
// }



// function phonenumber(inputtxt){
//     var phoneno = /^\d{10}$/;
//     if(inputtxt.value.match(phoneno)){
//         alert("successfuly entered phone number");
//         return true;
//     }
//     else{
//         alert("Not a vvalid Phone Number");
//         return false;
//     }
// }



// validation form


function com_password(inputText01,inputText02){
    if(inputText01 == inputText02){
        return true;
    }
    alert("your password is wrrong");
    return false;
}

function check_email(inputText){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = inputText;
    if(reg.test(email) == false){
        return false;
    }
    return true;
}

function check_sex(sex){
    x = 0;
    if(sex[0].checked){
        x++;
    }
    if(sex[1].checked){
        x++;
    }
    if(x == 0){
        return false;
    }
    else{
        return true;
    }
}

function check_country(inputText){
    if(inputText == "Default"){
        return false;
    }
    return true;
}

function form_validation(form_01){
    var uName = form_01.username.value;
    var uPassword = form_01.password.value;
    var uConPassword = form_01.con_password.value;
    var uAddress = form_01.address.value;
    var uEmail = form_01.email.value;
    var umSex = form_01.sex;
    var ufeSex = form_01.sex;
    var uCountry = form_01.country.value;
    var a = true;
    var b = true;
    var c = true;
    var d = true;
    var e = true;
    var returnValue = false;

    if(uName = "" || uPassword == "" || uConPassword == "" || uAddress == "" || uEmail == ""){
        alert("there are empty fields, please fill them");
        a = false;
    }

    var cPassword = com_password(uPassword,uConPassword);
    if(cPassword == false){
        b = false;
    }

    var email = check_email(uEmail);
    if(email == false){
        c = false;
    }

    var sex = check_sex(umSex);
    if(sex == false){
        alert("Gender should not empty");
        d = false;
    }

    var country = check_country(uCountry);
    if(country == false){
        alert("Country is not selected")
        e = false;
    }

    if(a == true && b == true && c == true && d == true && e == true){
        alert("your form is successfuly");
        returnValue = true;
    }

    return returnValue;

}