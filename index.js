let imgbox = document.getElementById('img-box');
let qrText = document.getElementById('qrText');
let qrImg = document.getElementById('qrImg');
let btnReset = document.getElementById('btnReset');
let btnQR = document.getElementById('btnQR');

function generateQRCode() {
    if(qrText.value.length > 0) {
    qrImg.src = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + qrText.value;
    imgbox.classList.remove("hide-img");
    imgbox.classList.add("show-img");
    setTimeout(()=>{
        qrText.value = "";
    },3000);
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        },1000);
    }
}

function resetQRCode () {
    imgbox.classList.add("hide-img")
    setTimeout(()=>{
    qrText.value = "";
    qrImg.src = ''  
    imgbox.classList.remove("show-img")
   },2000)
};

btnReset.addEventListener('click', resetQRCode);
btnQR.addEventListener('click', generateQRCode)