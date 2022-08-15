
// mengambil nilai input dari user dengan menggunakan function
function dataUser(){
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone = document.getElementById("input-number").value
    let subject = document.getElementById("input-subject").value
    let message = document.getElementById("input-message").value
    
    // jika ada bagian yang belum di isi maka tidak akan berjalan dengan sintak return dan alert akan memunculkan pop up di halaman web
    if (name == ""){
       return alert("Nama harus diisi")
    } else if(email == ""){
       return alert("Email harus diisi")
    } else if (phone == ""){
       return alert("Nomor Hp harus diisi")
    } else if(subject == ""){
      return alert("Subjek harus diisi")
    } else if(message == ""){
      return alert("Pesan Harus diisi")
    }

    // jika ingin memunculkan di log console
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(subject);
    // console.log(message);

    let emailReciever = "khairulumam950@gmail.com" // membuat variabel email untuk nantinya akan di kirim ke emal tersebut
    
    let a = document.createElement('a'); //membuat element html agar bisa berjalan di javaScript
    a.href =`mailto:${emailReciever}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan hubungi saya dengan email ${email} atau telepon di ${phone}`;
    a.click();

    // mengelompokkan element variabel
    let siswa={
        name, email, phone, subject, message
    };
    console.log(siswa);
}
