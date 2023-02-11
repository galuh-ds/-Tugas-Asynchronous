
//----SYNCHRONOUS-------------

 setTimeout(() => {
    console.log( "Berat badan : 47 kg"  );
 }, 2000)
 setTimeout(() => {
    console.log( "Asal sekolah : Pondok It Yogyakarta");
 }, 2000);
 setTimeout(() => {
    console.log(  "Angkatan : 16");
 }, 2000);
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

function data(tinggi, A, angkatan) {
    console.log(A);
    tinggi();
    angkatan();
}
function mytinggi() {
    console.log( "Umur : 18 tahun");
}

function myangkatan() {
    console.log( "Tinggi badan : 165 cm");
} 
  data( mytinggi, "Nama lengkap : Galuh dawlius suhendra", myangkatan);


