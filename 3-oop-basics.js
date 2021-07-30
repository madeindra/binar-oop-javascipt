// Buat sebuah kelas
class Kendaraan{
  constructor(nama){
    this.nama = nama;
  }

  klakson(){
    console.log(`Beep! ${this.nama} mau lewat`);
  }
}

// Buat sebuah object dengan kelas Kendaraan
let bmw = new Kendaraan("BMW");

// Jalankan method yang ada dalam kelas
bmw.klakson();