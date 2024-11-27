import data from'./data.js';
const fullinfo=data.destinations;
console.log(fullinfo);
const descriptionText=document.getElementById('js-discription');
const  planetName=document.getElementById('js-planet-name');
const planetImg=document.getElementById('planet-img');
const travel=document.getElementById('js-time');
const distance=document.getElementById('js-distance');
const links=document.querySelectorAll('.planet-name');

links.forEach((link,index)=>{
   const linkData=fullinfo[index];
   link.addEventListener('click',()=>{
      removeActiveClass();
      descriptionText.innerText=linkData.description;
      planetName.innerText=linkData.name;
      planetImg.src=linkData.images.png;
      travel.innerText=linkData.travel;
      distance.innerText=linkData.distance;
      link.classList.add('active-link')

   })
})

function removeActiveClass(){
   links.forEach((link)=>{
      link.classList.remove('active-link')
   })
}