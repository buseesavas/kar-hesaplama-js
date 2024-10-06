let satisBedeli = Number(prompt('Ürününü ne kadara sattın?'));
let maliyet = Number(prompt('Bu ürünün sana maliyeti kaç TL?'));

let kdvliFiyat = satisBedeli + (satisBedeli * 0.2);
let gelirVergisi = kdvliFiyat * 0.25;
let kar =satisBedeli - maliyet - gelirVergisi;

if(kar > 0){
  alert('Bu üründen toplam karın: ' + kar);
}else if(kar === 0){
  alert('Bu üründen karın yok.');
}else {
  alert('Bu üründen ' + Math.abs(kar) + 'TL zarar etmişsin');
}

