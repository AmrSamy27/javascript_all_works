
    document.addEventListener('mousemove',(ev)=>{
        document.getElementById('image').style.left = ev.clientX +'px';
        document.getElementById('image').style.top =ev.clientY +'px';
    });