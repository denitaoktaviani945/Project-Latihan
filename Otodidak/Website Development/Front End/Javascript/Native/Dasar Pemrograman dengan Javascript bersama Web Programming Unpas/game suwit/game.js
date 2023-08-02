 var tanya = true;
 while ( tanya ){
    // menangkap pilihan player
    var p = prompt(' pilih nama hewan : gajah , semut ,orang');

    //menangkap pilihan komputer
    //menangkap pilihan random

    var comp = Math.random();

    if( comp < 0.34){
        comp =' gajah ';
    } else if (comp >= 0.34 && comp < 0.67){
        comp = 'orang';
    } else {
        comp ='semut'; 
    }


    //menentukan rules

    var hasil ='';
    if ( p == comp ){
        hasil = 'SERI!!';
    } else if ( p =='gajah'){
    //     // if( comp == 'orang'){
    //         hasil = 'MENANG';
    //     }else {
    //         hasil = 'KALAH';
    //     }

    hasil = (comp == 'orang')? 'MENANG!':'KALAH';

    } else if ( p == 'orang'){
    hasil = (comp == ' gajah')? 'KALAH !' : 'MENANG';
    } else if (p = 'semut'){
        hasil = ( comp == 'orang') ? 'KALAH!!' : 'MENANG';
    }else{
        hasil = ' memasukan pilihan yan salah ';
    }
    //tampilkan hasilnya
    
    alert( 'kamu memilih :' + p +' dan komputer memilih : ' + comp + '\n makan hasilnya : kamu' + hasil);
    tanya = confirm('Lagi?');
}

alert ('Terimakasih sudah bermain!');
