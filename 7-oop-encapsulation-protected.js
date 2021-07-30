class Pengguna{
  level = "user";

  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  _gantiLevel(level){
    this.level = level;
  }

  #cekUser(email){
    return "terdaftar";
  }

  #cekPassword(password){
    return "cocok";
  }

  login(email, password){
    if(this.#cekUser(email) === "terdaftar" && this.#cekPassword(password) === "cocok"){
      console.log("login berhasil");
    } else {
      console.log("login gagal");
    }
  }
}

class Admin extends Pengguna{
  constructor(email, password){
    super(email, password);
  }

  upgradeLevel(){
    super._gantiLevel("admin");
  }

  tunjukanLevel(){
    console.log(`Level anda saat ini adalah ${this.level}`);
  }
}

let admin = new Admin("admin@gmail.com", "kata-rahasia");
admin.tunjukanLevel();

// admin.upgradeLevel();
// admin.tunjukanLevel();
