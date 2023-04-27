function onScanSuccess(qrCodeMessage) {
    if (qrCodeMessage == 'Shoxa') {
        playOn();
        document.getElementById('result').innerHTML = '<span class="result">' + qrCodeMessage + '</span>';
    } else {
        playOFF();
        document.getElementById('result').innerHTML = '<span class="result">' + qrCodeMessage + '</span>';
    }
}

function onScanError(errorMessage) {
    //handle scan error
}

var html5QrcodeScanner = new Html5QrcodeScanner(
    "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);


let playOn = () => new Audio("audio/on.mp3").play();
let playOFF = () => new Audio("audio/off.mp3").play();