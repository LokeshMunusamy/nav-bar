let menuBar=document.getElementById('menu-bar');
let visible=document.getElementsByClassName('menu')[0];
let details=document.querySelectorAll('.details');
let icon=document.querySelectorAll('.icon');
let xmark=document.getElementById('xmark');
let bod=document.getElementsByTagName('body');

menuBar.addEventListener("click",()=>{
    visible.style.visibility = 'visible';
});

details.forEach(detail=>{
    detail.addEventListener('mouseover',()=>{
        detail.style.backgroundColor='lightblue';
        detail.style.cursor='pointer';
        detail.style.transform='scale(1.2)';
        detail.style.transformOrigin='left center';
        detail.style.overflow='hidden';
        
        
    });
    detail.addEventListener('mouseout',()=>{
        detail.style.backgroundColor='';
        detail.style.scale='';
        detail.style.transform='';
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


