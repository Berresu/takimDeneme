function merhaba(){
    let ad, soyad, yas, takimlar;
    ad=document.getElementById("txtAd").value;
    console.log(ad);

    soyad=document.getElementById("txtSoyad").value;
    console.log(soyad);

    yas=document.getElementById("numberYas").value;
    console.log(yas);

    takimlar=document.getElementById("listeTakimlar").selectedIndex;
    console.log(takimlar);

    document.getElementById("sonucBaslik").innerHTML="";
    document.getElementById("yazi").innerHTML="";

    if(takimlar==0){
        document.body.style.backgroundColor="#000";
        yazi.innerHTML="Beşiktaş sen bizim her şeyimizsin!"
        document.getElementById("resim").setAttribute("src", "bjk.jpg");
    }
    else if(takimlar==1){
        document.body.style.backgroundColor="yellow";
        yazi.innerHTML="Biz bize yeteriz Çünkü Fenerbahçeliyiz."
        document.getElementById("resim").setAttribute("src", "fb.jpg");
    }
    else if(takimlar==2){
        document.body.style.backgroundColor="red";
        yazi.innerHTML="Gerçekleri tarih yazar tarihi de Galatasaray..."
        document.getElementById("resim").setAttribute("src", "gs.jpg");
    }
    else if(takimlar==3){
        document.body.style.backgroundColor="blue";
        yazi.innerHTML="Alayına isyan, inadına Trabzonspor."
        document.getElementById("resim").setAttribute("src", "ts.jpg");
    }

    if(yas < 18){
        sonucBaslik.innerHTML="Siteye 18 Yaşının Altındakiler Giremez!";
    }
    else{
        sonucBaslik.innerHTML="Siteye Üye Olabilirsiniz";
    }
}
