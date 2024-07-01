
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("userCheck").addEventListener("submit", (event) => {
        var userName = document.getElementById("userName").value;
        var userEmail = document.getElementById("emailIDEnter").value;
        var userPassword = document.getElementById("passCheck").value;
        var userconfirmPS = document.getElementById("passCheckConfirm").value;
        // let isValid = true;
        // if ( (userName.length < 5) ){
        //     // console.log(userName.length,'error');
        //     document.getElementById("userNameError").textContent ="User Name must be five character long and not null !";
        //     isValid = false;
        // }
        // else{
        //     // console.log(userName.length);
        //     document.getElementById("userNameError").textContent=" ";
            
        // }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // if ((!emailRegex.test(userEmail))){
        //     // console.log(userName.length,'error');
        //     document.getElementById("userEmailError").textContent =  'Please Enter valid Email address format ' ;
        //     isValid = false;
        // }
        // else{
        //     // console.log(userName.length);
        //     document.getElementById("userEmailError").textContent=" ";
            
        // }

        // if ((userPassword.length < 8)){
        //     // console.log(userName.length,'error');
        //     document.getElementById("userPasswordError").textContent =  'Please enter password length greater than 8 !';
        //     isValid = false;
        // }
        // else{
        //     // console.log(userName.length);
        //     document.getElementById("userPasswordError").textContent=" ";
        // }    
        // if ((userPassword !== userconfirmPS)){
        //     // console.log(userName.length,'error');
        //     document.getElementById("userPasswordMatchError").textContent =  'Password not matched ! Please enter matched password !' ;
        //     isValid = false;
        // }
        // else{
        //     // console.log(userName.length);
        //     document.getElementById("userPasswordMatchError").textContent=" ";
        // }     
        document.getElementById("userNameError").textContent = (userName.length < 5)
            ? "User Name must be five characters long and not null!"
            : "";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        document.getElementById("userEmailError").textContent = (!emailRegex.test(userEmail)) ? 'Please Enter valid Email address format ' : '';

        document.getElementById("userPasswordError").textContent = (userPassword.length < 8) ? 'Please enter password length greater than 8 !' : '';
        document.getElementById("userPasswordMatchError").textContent = (userPassword !== userconfirmPS) ? 'Password not matched ! Please enter matched password !' : '';

        if (document.querySelector(".error-message") !== null) {
            alert("Please correct the highlighted errors .");
            event.preventDefault();
            return false;
        }
        // if (!isValid) {
        //     alert("Please correct the highlighted errors." + document.querySelectorAll('.error').textContent);
        //     event.preventDefault();
        //     return false;
        // }
        else {
            alert(`Registration successfull ! \n User Name: ${userName} \n Email: ${userEmail}`);
            return true;
        }
    });
});