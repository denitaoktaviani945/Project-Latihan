// // manipulasi array

// // menanmbah isi array
// var arr = [];
// arr [0]= "denita";
// arr [1]= "oktaviani";
// arr[2] = "reza";
// arr [3]= "fauzan";
// arr [4]= " adhima";

// console.log (arr);

// // menghapus array
// var arr = ["denita","oktaviani","reza","fauzan","adhima"];
// arr[4] = undefined;
// console.log(arr);

// // menampilkan isi array
// var arr = ["denita","oktaviani","reza","fauzan"];

// for( var i = 0; i < arr.length; i++){
//     console.log ('mahasiswa ke-' + (i+1) + ':' + arr[i]);
// }


//method Pd array
//1. join 
// var arr = ["denita","oktaviani","reza","fauzan"];
// console.log (arr.join ("-"));

// push & pop

// arr.push('dhima');
// arr.pop();
// console.log(arr.join('-'));

//3. unshift & shift
// arr.unshift('adhima');

// arr.shift();
// console.log(arr.join('-'));

var arr = ["denita","oktaviani","reza","fauzan","refan","renita"];

// 4. splice
//splice (indexAwal,mauDihapusBerapa,  elemenBaru1,elemenBaru2,..)

// arr.splice(2,0,'renita','refan');
// console.log(arr.join('-'));


// 5. slice
// slace (awal -akhir);
var arr = ["denita","oktaviani","reza","fauzan","refan","renita"];
var arr2 = arr.slice(1,4);
console.log(arr2.join('-'));
