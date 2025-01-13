let menuBar=document.getElementById('menu-bar');
let visible=document.getElementsByClassName('menu')[0];
let details=document.querySelectorAll('.details');
let icon=document.querySelectorAll('.icon');
let xmark=document.getElementById('xmark');

menuBar.addEventListener("click",()=>{
    visible.style.visibility = 'visible';
});

details.forEach((detail)=>{
    detail.addEventListener('mouseover',()=>{
        detail.style.backgroundColor='lightblue';
    });
    detail.addEventListener('mouseout',()=>{
        detail.style.backgroundColor='';
    });
});
icon.forEach((icons)=>{
    icons.addEventListener('mouseover',()=>{
        icons.style.color='rgb(5, 59, 109)';
    });
    icons.addEventListener('mouseout',()=>{
        icons.style.color='';
    });
});
xmark.addEventListener('mouseover',()=>{
    xmark.style.transform='rotate(360deg)';
});
xmark.addEventListener('click',()=>{
    visible.style.visibility = 'hidden';
});

