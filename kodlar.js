function merhaba(){
    let ad, soyad, yas, takimlar;
    ad=document.getElementById("txtAd").value;
    console.log(ad);

    soyad=document.getElementById("txtSoyad").value;
    console.log(soyad);

    yas=document.getElementById("numberYas").value;
    console.log(yas);

    document.getElementById("sonucBaslik").innerHTML="";

    takimlar=document.getElementById("listeTakimlar").selectedIndex;

    if(takimlar==0){
        document.body.style.backgroundColor="#000";
    }
    else if(takimlar==1){
        document.body.style.backgroundColor="yellow";
    }
    else if(takimlar==2){
        document.body.style.backgroundColor="red";
    }
    else if(takimlar==3){
        document.body.style.backgroundColor="blue";
    }

    if(yas < 18){
        sonucBaslik.innerHTML="Siteye 18 Yaşının Altındakiler Giremez!";
    }
    else{
        sonucBaslik.innerHTML="Siteye Üye Olabilirsiniz";
    }
}
