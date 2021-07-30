class Mobil {
  constructor(nama, bahanBakar){
    if (this.constructor === Mobil) {
      throw new Error("Tidak bisa membuat object dengan Kelas Abstract");
    }

    this.nama = nama;
    this.bahanBakar = bahanBakar;
  }

  isi() {
    console.log("Mengisi bahan bakar");
  }
}

class Truk extends Mobil {
  constructor(nama, bahanBakar, bunyiKlakson) {
    super(nama, bahanBakar);
    this.bunyiKlakson = bunyiKlakson;
  }

  isi(){
    super.isi();
    console.log("Mengisi sampai penuh");
  }
}

let fuso = new Truk("Fuso", "Dex", "Telolet");
fuso.isi();

let bmw = new Mobil("BMW", "Pertamax");