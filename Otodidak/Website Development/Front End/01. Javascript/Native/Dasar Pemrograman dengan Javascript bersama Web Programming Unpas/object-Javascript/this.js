//this
// var a = 10;
// console.log(window.a);

// // cara 1 = function declration
// function hallo (){
//     console.log(this);
//     console.log('hallo');
// }

// this.hallo();

//catatan this mengembalikan object global



// //cara 2- object literal
// var object = { a : 9 , nama : 'denita'};
// object.hallo = function(){
//     console.log(this);
//     console.log('hallo');

// }

// object.hallo();

// //catatan this mengembalikan object yang bersangkutan

// cara 3 - constructor

function hallo (){
    console.log(this);
    console.log('hallo denita');
}

var obj1 = new hallo();
var obj2 =  new hallo();
// menggembalikan objectyang baru di buat
