
//----SYNCHRONOUS-------------

 setTimeout(() => {
    console.log("Tinggi badan : 165 cm");
 }, 1000)
 setTimeout(() => {
    console.log("Berat badan : 47 kg");
 }, 2000);
 setTimeout(() => {
    console.log("Asal sekolah : Pondok It Yogyakarta");
 }, 3000);
//-------------------------------------------------------

//------ASYNCHRONOUS--------

 setTimeout(() => {
    console.log("Jurusan : Programmer");
 }, 5000);
 setTimeout(() => {
    console.log("Divisi 2 : Backend");
 }, 9000);   
 setTimeout(() => {
    console.log("Divisi 1 : Frontend ");
}, 7000); 
 setTimeout(() => {
    console.log("Status : Mahasiswa santri");
}, 4000);


//-------------------------------------------------------


//------SYNCHRONOUS CALLBACK--------

 function Sandi(sandi) {
     alert(`Selamat! ${sandi} adalah sandi baru anda sekarang`);
 }
 function tampilkanpesan(callback) {
     const sandi = prompt
     ("Masukkan sandi baru anda :  ");
     callback(sandi);
 }
 tampilkanpesan(Sandi);



//-------------------------------------------------------


//------ASYNCHRONOUS CALLBACK--------

function main(nama, usia, alamat, kontak) {
    nama();
    console.log(usia);
    console.log(alamat);
    kontak();
}
function nama() {
    console.log("Nama : Galuh");
}

function kontak() {
    console.log("Kontak : 085246082261");
}
main(nama, "Usia : 18 Tahun", "Alamat : Yogyakarta", kontak);
