let menuBar=document.getElementById('menu-bar');
let visible=document.getElementsByClassName('menu')[0];
let details=document.querySelectorAll('.details');
let icon=document.querySelectorAll('.icon');
let xmark=document.getElementById('xmark');
let bod=document.getElementsByTagName('body');

menuBar.addEventListener("click",()=>{
    visible.style.visibility = 'visible';
});


// bod.addEventListener("click",()=>{
//     // visible.style.visibility = 'hidden';
    
    
// });

details.forEach(detail=>{
    detail.addEventListener('mouseover',()=>{
        detail.style.backgroundColor='lightblue';
        detail.style.cursor='pointer';
        detail.style.scale=1.2;
    });
    detail.addEventListener('mouseout',()=>{
        detail.style.backgroundColor='';
        detail.style.scale='';
    });

});
icon.forEach(icons=>{
    icons.addEventListener('mouseover',()=>{
        icons.style.color='rgb(5, 59, 109)';
        icons.style.cursor='pointer';
        icons.style.scale=1.2;
    });
    icons.addEventListener('mouseout',()=>{
        icons.style.color='';
        icons.style.scale='';
    });
});
xmark.addEventListener('mouseover',()=>{
    xmark.style.transform='rotate(360deg)';
    xmark.style.cursor='pointer';
});
xmark.addEventListener('click',()=>{
    visible.style.visibility = 'hidden';
});


