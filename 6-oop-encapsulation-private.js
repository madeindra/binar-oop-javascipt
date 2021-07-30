class Pengguna{
  constructor(email, password){
    this.email = email;
    this.password = password;
  }

  #cekUser(email){
    return "terdaftar";
  }

  #cekPassword(password){
    return "cocok";
  }

  login(){
    if(this.#cekUser(this.email) === "terdaftar" && this.#cekPassword(this.password) === "cocok"){
      console.log("login berhasil");
    } else {
      console.log("login gagal");
    }
  }
}

let saya = new Pengguna("test@gmail.com", "kata-rahasia");

saya.#cekUser("test@gmail.com");
saya.login();