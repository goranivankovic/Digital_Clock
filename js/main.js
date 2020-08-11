

let obj={
    main:document.querySelector('.main'),
    timeCss(){
        this.main.style.display="flex"
        this.main.style.alignItems="center";
        this.main.style. justifyContent="center";
        this.main.style.fontSize="2.1em";
        this.main.style.color="blue";
    }

}


setInterval(() =>{
    let time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    obj.main.innerHTML = "h: "+ h +" m:" + m +" s: "+s;
    obj.timeCss();
  
},1000)

