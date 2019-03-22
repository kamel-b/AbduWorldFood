/* fonction pour changer la src de l'image avec un over */



function attachOver(elementId, firstImage, secondImage) {
    const element = document.getElementById(elementId);

    const changeImage = _ => {
        element.src = element.src == firstImage ? secondImage : firstImage;

    }
    
    element.addEventListener('mouseover', changeImage);
}

attachOver(
    'image0',
    'https://upload.wikimedia.org/wikipedia/commons/6/65/Gambas_al_ajillo.jpg', 
    'https://cdn.pixabay.com/photo/2015/10/12/23/57/spain-985372_960_720.jpg'
);

attachOver(
    'image1',
    'https://c1.staticflickr.com/8/7105/7320325482_2bf6631055_b.jpg', 
    'https://cdn.pixabay.com/photo/2016/11/02/10/43/rome-1791048_960_720.jpg'
);

attachOver(
    'image2',
    'https://cdn.pixabay.com/photo/2018/12/04/16/49/tandoori-3856045_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2016/11/05/16/54/lord-shiva-1800672_960_720.jpg'
);

attachOver(
    'image3',
    'https://cdn.pixabay.com/photo/2016/08/23/11/27/food-1614130_960_720.jpg', 
    'https://cdn.pixabay.com/photo/2016/11/07/14/03/japan-1805864_960_720.jpg'
);

attachOver(
    'image4',
    'https://farm9.staticflickr.com/8310/8069135368_cc593c4a19_b.jpg', 
    'https://cdn.pixabay.com/photo/2016/02/19/11/50/statue-of-liberty-1210001_960_720.jpg'
);



/* fonction pour faire apparaitre ou faire disparaitre le menu section select*/


const btn = document.querySelector('.toggle_btn');
const nav = document.querySelector('.nav');

btn.onclick = function(){
    nav.classList.toggle('nav_open');
}



