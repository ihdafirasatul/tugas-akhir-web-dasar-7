function hitungVolumeBalok() {
    var panjang = document.getElementById('panjang').value;
    var lebar = document.getElementById('lebar').value;
    var tinggi = document.getElementById('tinggi').value;
    var volume = panjang * lebar * tinggi;
    document.getElementById('hasilBalok').innerText = panjang + ' x ' + lebar + ' x ' + tinggi + ' = ' + volume + ' kubik';
}

function hitungVolumeKubus() {
    var sisi = document.getElementById('sisi').value;
    
    var volume = sisi * sisi * sisi;
    document.getElementById('hasilKubus').innerText = sisi + ' x ' + sisi + ' x ' + sisi + ' = ' + volume + ' kubik';
}

function hitungVolumePrisma() {
    var alas = document.getElementById('alas').value;
    var tinggiSegitiga = document.getElementById('tinggiSegitiga').value;
    var tinggiPrisma = document.getElementById('tinggiPrisma').value;
    
    var luasAlas = 0.5 * alas * tinggiSegitiga;
    var volume = luasAlas * tinggiPrisma;
    document.getElementById('hasilPrisma').innerText = alas + ' x ' + tinggiSegitiga + ' x ' + tinggiPrisma + ' = ' + volume + ' kubik';
}
