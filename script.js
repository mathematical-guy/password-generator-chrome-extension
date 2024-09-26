const passwordBoxEle = document.getElementById('password-box');
const generatedPasswordEle = document.getElementById('generated-password');
const imgIcon = document.getElementById('clipboard-icon');

// Password Text
const password = generatedPasswordEle.innerText;

// Icon Paths
const copiedSuccessIcon = './copied-success.png';
const clipBoardIcon = './copy-icon.png';

function changeImgTemporary() {
    imgIcon.src = copiedSuccessIcon;
    setTimeout(() => {
        imgIcon.src = clipBoardIcon;
    }, 3000);
}


function copyPasswordToClipboard() {
    navigator.clipboard.writeText(password);
    changeImgTemporary();
}

passwordBoxEle.addEventListener('click', () => {
    copyPasswordToClipboard();
})