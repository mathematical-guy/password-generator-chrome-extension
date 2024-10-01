const passwordBoxEle = document.getElementById('password-box');
const generatedPasswordEle = document.getElementById('generated-password');
const imgIcon = document.getElementById('clipboard-icon');

const lengthParamEle = document.getElementById('lengthParam');
const lengthParamDisplayEle = document.getElementById('lengthParamDisplay');


// Icon Paths
const copiedSuccessIcon = './copied-success.png';
const clipBoardIcon = './copy-icon.png';


function changePasswordLength() {
    lengthParamDisplayEle.innerText= lengthParamEle.value;

    updatePasswordToDisplay();
}


function updatePasswordToDisplay() {
    generatedPasswordEle.innerText = generateRandomString();
}


function generateRandomString() {
    let length = lengthParamEle.value;
    const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
    const DIGITS = '0123456789';
    const SPECIAL_CHARACTERS = '!@#$%^&*();[]{}-_`~,.';

    const characters = UPPER_CASE + LOWER_CASE + DIGITS + SPECIAL_CHARACTERS;
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

function changeImgTemporary() {
    imgIcon.src = copiedSuccessIcon;
    setTimeout(() => {
        imgIcon.src = clipBoardIcon;
    }, 3000);
}

function copyPasswordToClipboard() {
    navigator.clipboard.writeText(generatedPasswordEle.innerText);
    changeImgTemporary();
}

passwordBoxEle.addEventListener('click', () => {
    copyPasswordToClipboard();
})

document.addEventListener('DOMContentLoaded', () => {
    updatePasswordToDisplay();
})


// oninput="changePasswordLength()"
lengthParamEle.addEventListener('input', changePasswordLength);