const passwordBoxEle = document.getElementById('password-box');
const generatedPasswordEle = document.getElementById('generated-password');
const imgIcon = document.getElementById('clipboard-icon');

// Password Text


// Icon Paths
const copiedSuccessIcon = './copied-success.png';
const clipBoardIcon = './copy-icon.png';


function generateRandomString(length=10) {
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
    generatedPasswordEle.innerText = generateRandomString(12);
})
