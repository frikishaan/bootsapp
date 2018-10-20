

window.sr = ScrollReveal();


// Animation NavLinks
// var d = 0;
// for (let i = 0; i<4 ; i++) {
//     sr.reveal('nav .nav-link',{
//         duration:1500,
//         origin:'bottom',
//         distance:'20px'
//     });       

// }


// Animation Header 
sr.reveal('h2.display-2',{
duration:2000,
origin:'left',
distance:'30px'
});

sr.reveal('.header a.btn',{
duration:2000,
origin:'bottom',
distance:'30px'
});

// Features Animation
var d = 0;
for(i=0;i<3;i++){
    let spec = document.getElementsByClassName('spec')[i];
    sr.reveal(spec,{
        duration:2000,
        origin:'bottom',
        distance:'30px',
        delay:d
        });
    d += 250;
}

// Animation Products Images
sr.reveal('.products img',{
    duration:3000,
    origin:'bottom',
    distance:'30px',
    });

// Animation last-button
sr.reveal('.last-sec a',{
    duration:2000,
    origin:'bottom',
    distance:'30px',
    delay:d
    });