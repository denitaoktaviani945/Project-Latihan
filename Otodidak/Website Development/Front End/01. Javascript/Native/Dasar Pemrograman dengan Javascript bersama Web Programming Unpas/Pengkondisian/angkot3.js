var jmlAngkot = 20;
var angkotBeroprasi = 14;

for(var noAngkot =1 ; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroprasi){
        console.log('angkot No. '+ noAngkot + 'beroprasi dengan baik');
    } else {
        console.log('angkot No. '+ noAngkot + 'sedang tidak beroprasi');
    }
}