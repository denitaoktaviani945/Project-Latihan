var penumpang = [ 'denita ', undefined , 'oktaviani'];
var tambahPenumpang =  function ( namaPenumpang, penumpang){
 // JIKA ANGKOT KOSONG 
 if ( penumpang.length == 0){
    // tambah penumpang di awal arayy
    penumpang.push(namaPenumpang);
    // kembalikan isi array dsn keluar dari function
    return penumpang;

} else{
    // telusuri seluruh kursi dari awal
    for  ( var i = 0 ; i < penumpang.length ; i ++){
        // jiak ada kursi kosong
         if (penumpang [i] == undefined){
            //tambah penumpang di kursi tersebut
            penumpang[i] = namaPenumpang;
            // kembalikan isi array dan keluar dari function
            return penumpang;
         }
   
    // jika ada nama yang sama 
    else if(penumpang[i] == namaPenumpang){    
        // tampilakan pesan kesalahan
        console.log (namaPenumpang + 'sudah ada i dalam angkot');
        //kembalikan isi array dan keluar dari function
        return penumpang ;
    }
    
        // jika seluruh kursi terisi
            else if( i == penumpang.length - 1){
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                // kembalikan nilai array dan keluar DARI FUNCTION
                return penumpang;
            }
        
    
    }

}
}
