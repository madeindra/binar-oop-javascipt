class BidangDuaDimensi {
  constructor(){
    
  }

  luas(){
    console.log('Luas = 0');
  }
}

class PersegiPanjang extends BidangDuaDimensi {
  constructor(panjang, lebar){
    super();
    this.panjang = panjang;
    this.lebar = lebar;
  }

  luas(){
    const luas = this.panjang * this.lebar;
    console.log(`Luas = ${luas}`);
  }
}

class Lingkaran extends BidangDuaDimensi {
  constructor(radius){
    super();
    this.radius = radius;
  }

  luas(phi){
    const luas = phi * this.radius ** 2;
    console.log(`Luas = ${luas}`);
  }
}



const duaDimensi = new BidangDuaDimensi();
const persegiPanjang = new PersegiPanjang(3, 4);
const lingkaran = new Lingkaran(5);

duaDimensi.luas();
persegiPanjang.luas();
lingkaran.luas(3.14);
