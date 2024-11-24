import data from './data.js';
const fullInfo=data.crew;
console.log(fullInfo)
const buttonEl=document.querySelectorAll('.btn');
const crewRoal=document.getElementById('crew-roal');
const crewName=document.getElementById('crew-name');
const crewBio=document.getElementById('crew-bio');
const crewImg=document.getElementById('crew-img');
buttonEl.forEach((button,index)=>{
   button.addEventListener('click',()=>{
      removeActiveBtn()
      crewRoal.innerText=fullInfo[index].role;
      crewBio.innerText=fullInfo[index].bio;
      crewName.innerText=fullInfo[index].name;
      crewImg.src=fullInfo[index].images.png;
      button.classList.add('activ-circle')
   })
})

function removeActiveBtn(){
   buttonEl.forEach((button)=>{
      button.classList.remove('activ-circle')
   })
}