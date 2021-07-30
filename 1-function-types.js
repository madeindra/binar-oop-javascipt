// Pembuatan fungsi dengan Function Declaration
function luasPersegi(s) {
  return s * s;
 }
 
 // Pembuatan fungsi dengan Function Expression
 const luasPersegi = function(s) {
  return s * s;
 }
 
 // Pembuatan fungsi dengan Arrow Function
 const luasPersegi = (s) => {
   return s * s;
 }
 
 
 // Panggil fungsi
 console.log('Luas Persegi:', luasPersegi(5)) // Luas Persegi: 25
 