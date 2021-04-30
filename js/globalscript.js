'use strict';
//LOGO HOVER EFFECT https://stackoverflow.com/questions/63365188/how-to-show-the-full-name-of-an-acronym-on-hover-in-css-js
const mouseEnterHandle = () => {
    document.addEventListener('mouseover', (event) => {
        if (event.target.closest('h4')) {
            event.target.closest('h4').querySelectorAll('span').forEach(el => {
                el.style.width = el.scrollWidth + 'px';
            })
        }
    });
}

const mouseOutHandle = (event) => {
    document.addEventListener('mouseout', (event) => {
        if (event.target.closest('h4')) {
            event.target.closest('h4').querySelectorAll('span').forEach(el => {
                el.style.width = 0;
            })
        }
    });
}

const navSlide = () => {
    const sandwich = document.querySelector('.sandwich');
    const nav = document.querySelector('.nav-links');
    const navlinks = nav.querySelectorAll('li');
    const main = document.querySelector('main');
    sandwich.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        //Animate Links
        navlinks.forEach((link,index)=>{
            if (link.style.animation) {
                link.style.animation='';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index/5+0.75}s`;
            }
            console.log(index);
        });
    });
};
const highlightAll = () => { 
    document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
      console.log(1);
    });
  });
}
//bundle functions
const app = () => {
    mouseEnterHandle();
    mouseOutHandle();
    navSlide();
    highlightAll();
}

app();