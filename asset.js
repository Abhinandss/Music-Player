var i=0
function play(){
    var name=new XMLHttpRequest();
    name.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var k=JSON.parse(this.responseText).musicplayer
            document.getElementById("aud").src=k[i].file
            document.getElementById("im").src=k[i].image
            document.getElementById("ttl").innerHTML='"'+k[i].song+'"'+"-"+k[i].lyrics
            var kfg=document.getElementById("aud")
            kfg.play();
  
        }
    }
    name.open("GET","asset.json",true);
    name.send();
}
function next(){
    i++;
    var name=new XMLHttpRequest();
    name.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var k=JSON.parse(this.responseText).musicplayer
            document.getElementById("aud").src=k[i].file
            document.getElementById("im").src=k[i].image
            document.getElementById("ttl").innerHTML='"'+k[i].song+'"'+"-"+k[i].lyrics
            var kfg=document.getElementById("aud")
            kfg.play();
  
        }
    }
    name.open("GET","asset.json",true);
    name.send();
}
function prev(){
    i--;
    var name=new XMLHttpRequest();
    name.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var k=JSON.parse(this.responseText).musicplayer
            document.getElementById("aud").src=k[i].file
            document.getElementById("im").src=k[i].image
            document.getElementById("ttl").innerHTML='"'+k[i].song+'"'+"-"+k[i].lyrics
            var kfg=document.getElementById("aud")
            kfg.play();
  
        }
    }
    name.open("GET","asset.json",true);
    name.send();
}