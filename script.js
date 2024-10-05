const passwordBoxEle = document.getElementById('password-box');
const generatedPasswordEle = document.getElementById('generated-password');
const imgIcon = document.getElementById('clipboard-icon');

const lengthParamEle = document.getElementById('lengthParam');
const lengthParamDisplayEle = document.getElementById('lengthParamDisplay');

const includeUpperCaseEle = document.getElementById('uppercase');
const includeLowerCaseEle = document.getElementById('lowercase');
const includeNumberEle = document.getElementById('numbers');
const includeSpecialCharEle = document.getElementById('special');


// Icon Paths
const copiedSuccessIcon = './copied-success.png';
const clipBoardIcon = './copy-icon.png';

includeLowerCaseEle.addEventListener('change', updatePasswordToDisplay);
includeUpperCaseEle.addEventListener('change', updatePasswordToDisplay);
includeNumberEle.addEventListener('change', updatePasswordToDisplay);
includeSpecialCharEle.addEventListener('change', updatePasswordToDisplay);


function changePasswordLength() {
    lengthParamDisplayEle.innerText = lengthParamEle.value;
    updatePasswordToDisplay();
}


function updatePasswordToDisplay() {
    generatedPasswordEle.innerText = generateRandomString();
}

function generateRandomString() {
    const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
    const DIGITS = '0123456789';
    const SPECIAL_CHARACTERS = '!@#$%^&*();[]{}-_`~,.';

    let length = lengthParamEle.value;

    let characters = '';

    if (includeLowerCaseEle.checked) {
        characters += LOWER_CASE;
    }
    if (includeUpperCaseEle.checked) {
        characters += UPPER_CASE;
    }
    if (includeSpecialCharEle.checked) {
        characters += SPECIAL_CHARACTERS;
    }
    if (includeNumberEle.checked) {
        characters += DIGITS;
    }

    // const characters = UPPER_CASE + LOWER_CASE + DIGITS + SPECIAL_CHARACTERS;
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