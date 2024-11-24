const openMenuBtn=document.getElementById('js-open-menu');
const closeMenuBtn=document.getElementById('js-close-menu');
const navConteainer=document.getElementById('js-nav-container');

openMenuBtn.addEventListener('click',()=>{
   console.log('clicked')
   console.log(navConteainer)
navConteainer.classList.toggle('active-nav');
});
closeMenuBtn.addEventListener('click',()=>{
   navConteainer.classList.toggle('active-nav');
});