//membuat object

// object literal
var mhs ={
    nama : 'denita oktaviani',
    nrp : '123434343',
    email : 'denitaoktaviani45@gmail.com',
    jurusan : 'teknik informatika'
}

// function declaration
function buatObjectMhs (nama,nrp,email,jurusan){
    var mhs= {};
    mhs.nama = nama;
    mhs.nrp = nrp ;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;

}

var mhs2 = buatObjectMhs('reza','47465654','reza@yaho.com','teknik komunikasi')


//constructor 
function Mahasiswa (nama  , nrp , email , jurusan){
    this.nama = nama ;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;

}

var mhs3 = new Mahasiswa('cio', '635365385', 'cio @gmail.com','pertanian' );