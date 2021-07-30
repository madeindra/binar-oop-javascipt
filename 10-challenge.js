class KendaraanBermotor {
  constructor(roda){
    this.roda = roda;
    this.kecepatan = 0;
  }

  tunjukkanRoda(){
    console.log(`Kendaraan berroda ${this.roda}`);
  }

  setKecepatan(kecepatan){
    this.kecepatan = kecepatan;
  }

  getKecepatan(){
    console.log(`Kecepatan saat ini ${this.kecepatan}`);
  }
}

class MotorMatic extends KendaraanBermotor {
  constructor(roda){
    super(roda);
  }

  gas(){
    console.log("Vroom");
  }
}

class MotorGear extends KendaraanBermotor {
  constructor(roda, gear){
    super(roda);

    this.gear = gear;
  }

  naikGear(){
    this.gear = this.gear + 1;
    console.log(`Gear saat ini ${this.gear}`)
  }

  turunGear(){
    this.gear = this.gear - 1;
    console.log(`Gear saat ini ${this.gear}`)
  }
}

const matic = new MotorMatic(2);
const gear = new MotorGear(2, 0);

matic.tunjukkanRoda();
gear.tunjukkanRoda();

matic.setKecepatan(50);
matic.getKecepatan()

gear.setKecepatan(100);
gear.getKecepatan();

matic.gas();
gear.naikGear();