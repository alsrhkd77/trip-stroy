//아이디 입력창
const signUpIdInput = document.getElementById('new-id');

//비밀번호, 비밀번호 확인 입력창
const passwordInput = document.getElementById('new-password');
const passwordRepeatInput = document.getElementById('password-confirm');

//이름 입력창
const nameInput = document.getElementById('name');
//회원가입 버튼
const signUpBtn = document.getElementById('sign-up');
function checkIdDoubled() {
    id = signUpIdInput.value;
    if (id !== "") {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', '/id-doubled', true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
                signUpBtn.disabled = xhr.responseText === 'True';
                if (signUpBtn.disabled) {
                    alert('중복되는 ID 입니다.');
                } else {
                    alert('사용가능한 ID 입니다.');
                }
            }
        };
        xhr.send(JSON.stringify(id));
    }
    else{
        alert('ID를 입력하세요.');
    }
}

function confirmPassword(){
    let password = passwordInput.value;
    let passwordRepeat = passwordRepeatInput.value;
    if(password !== passwordRepeat){
        signUpBtn.disabled = true;
        passwordRepeatInput.setCustomValidity('password not matched');
    }else{
        signUpBtn.disabled = false;
        passwordRepeatInput.setCustomValidity('');
    }
}
//
// function signUp(){
//     const id = signUpIdInput.value;
//     const name = nameInput.value;
//     const password = passwordInput.value;
//     if(id !== "" && name !== "" )
//     const userData = {
//         id:id,
//         name:name,
//         password:password
//     };
//     const xhr = new XMLHttpRequest();
//     xhr.open('post', '/sign-up', true);
//     xhr.onreadystatechange = function (){
//         if(xhr.readyState === 4 && xhr.status === 200){
//             console.log('가입을 축하합니다.');
//         }
//     };
//     xhr.send(JSON.stringify(userData));
// }