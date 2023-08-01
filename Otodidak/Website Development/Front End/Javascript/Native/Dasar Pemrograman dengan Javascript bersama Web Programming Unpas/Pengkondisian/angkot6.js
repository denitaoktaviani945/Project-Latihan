var jmlAngkot = 20;
var angkotBeroprasi = 14;

for(var noAngkot =1 ; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= 14 &&  noAngkot !==5){
        console.log('angkot No. '+ noAngkot + 'beroprasi dengan baik');
    }else if (noAngkot === 17 || noAngkot === 19 || noAngkot === 5){
        console.log('angkot No. '+ noAngkot + ' sedang lembur');
    }else {
        console.log('angkot No. '+ noAngkot + 'sedang tidak beroprasi');
    }
}