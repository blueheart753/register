function register() {
    const form = document.register_form;
    let name = document.getElementById('name');
    let email = document.getElementById('Email');
    let password = document.getElementById('Password');
    let Confirm_password = document.getElementById('Confirm_password');
    const chkemail = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    const Name = document.getElementById('alert_name');    
    const Email = document.getElementById('alert_Email');
    const pw = document.getElementById('alert_Password');
    const pw2 = document.getElementById('alert_Confirm_password');

    if (name.value !== "") {
        Name.innerText = "";
        form.name.style.border = '2px solid';
        form.name.style.borderColor = '#00F000';
    } else {
        form.name.style.border = '2px solid';
        form.name.style.borderColor = '#FF0000';
        Name.style.color = '#FF0000';
        Name.style.fontSize = '13px';
        Name.innerText = "이름을 입력해주세요.";
    }

    if (email.value != "") {
        Email.innerText = "";
        form.Email.style.border = '2px solid';
        form.Email.style.borderColor = '#00FF00';
    } else {
        form.Email.style.border = '2px solid';
        form.Email.style.borderColor = '#FF0000';
        Email.style.color = '#FF0000';
        Email.style.fontSize = '13px';
        Email.innerText = "Email을 입력해주세요.";
    }

    if (password.value != "") {
        pw.innerText = "";
        form.Password.style.border = '2px solid';
        form.Password.style.borderColor = '#00ff00';
    } else {
        form.Password.style.border = '2px solid';
        form.Password.style.borderColor = '#ff0000';
        pw.style.fontSize = '13px';
        pw.innerText = "비밀번호를 입력해주세요.";
    }

    if (Confirm_password.value != "") {
        pw2.innerText = "";
        form.Confirm_password.style.border = '2px solid';
        form.Confirm_password.style.borderColor = '#00ff00';
    } else {
        form.Confirm_password.style.border = '2px solid';
        form.Confirm_password.style.borderColor = '#ff0000';
        pw2.style.fontSize = '13px';
        pw2.innerText = "비밀번호를 입력해주세요.";
    }

    if(!chkemail.test(email.value) && email.value.length >= 1){
        form.Email.style.border = '2px solid';
        form.Email.style.borderColor ='#FF0000';
        Email.innerText = 'email을 다시 입력해주세요';
        Email.style.fontSize = '13px';
        return false;
    }

    if(password.value.length < 8 || password.value.length > 30){
        alert('비밀번호는 8자리 이상 30자리 이하로 입력해주세요.');
        form.Password.style.border = '2px solid';
        form.Password.style.borderColor = '#FF0000';
        form.Confirm_password.style.border = '2px solid';
        form.Confirm_password.style.borderColor = '#FF0000';
        pw.innerText = '비밀번호는 8자리 이상 30자리 이하로 입력해주세요.';
        pw.style.fontSize = '13px';
        return false;
    }

    if(password.value != Confirm_password.value & password.value.length > 1 && Confirm_password.value.length > 1) {
        form.Password.style.border = '2px solid';
        form.Password.style.borderColor = '#FF0000';
        form.Confirm_password.style.border = '2px solid';
        form.Confirm_password.style.borderColor = '#FF0000';
        pw2.innerText = '비밀번호가 일치하지 않습니다.';
        pw2.style.fontSize = '13px';
        return false;
    }
}


