//cara pertama
/*var items = prompt('masukan nama makanan / minuman : \n (cth : nasi ,daging,susu,junkfood,softdrink)');
switch (items) {
    case 'nasi' :
        alert('makanan / minuman SEHAT!!');
        break;

    case 'daging' :
        alert('makanan / minuman SEHAT!!');
            break;
    
    case 'susu' :
        alert('makanan / minuman SEHAT!!');
        break;

    case 'junkfood' :
        alert('makanan / minuman TIDAKSEHAT!!');
            break;
    
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!!');
        break;

    default:
        alert('nama yang anda masukan SALAH');
        break;
}*/

// cara ke 2
var items = prompt('masukan nama makanan / minuman : \n (cth : nasi ,daging,susu,junkfood,softdrink)');
switch (items) {
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('makanan / minuman SEHAT!!');
        break;

    case 'junkfood' :
    case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT!!');
        break;

    default:
        alert('nama yang anda masukan SALAH');
        break;
}