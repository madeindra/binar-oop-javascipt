// Buat kelas parent
class Kendaraan{
  constructor(nama){
    this.nama = nama;
  }

  klakson(){
    console.log(`Beep! ${this.nama} mau lewat`);
  }
}

// Buat kelas child yang menginduk ke parent
class Bus extends Kendaraan{
  constructor(nama, bahanBakar){
    super(nama);

    this.bahanBakar = bahanBakar;
  }

  isi(){
    console.log(`Mau isi ${this.bahanBakar}, mulai dari nol ya!`);
  }
}



let mobilListrik = new Kendaraan("Selo");
mobilListrik.klakson();



let busSekolah = new Bus("Trans Jakarta", "DexLite");
busSekolah.klakson();
busSekolah.isi();



// Parent tidak punya method isi
mobilListrik.isi();