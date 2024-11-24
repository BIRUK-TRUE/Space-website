// importing the json data conteng the data
import data from './data.js';

console.log(data.technology); // Logs the JSON content

const content=data.technology;


const circleBtn=document.querySelectorAll('.circle-btn');
const name=document.getElementById('js-tech-heading');
const description=document.getElementById('js-tech-text3');
const imgEl=document.getElementById('js-tech-lauch-img');

let imgMode;


let position;
circleBtn.forEach((btn,index)=>{
   position=index;
   
btn.addEventListener('click',()=>{
   removeClass()
   windowWidthCheker()
   name.innerText=content[index].name;
   description.innerText=content[index].description;
   btn.classList.add('activ-btn')
  imgEl.src=`${content[index].images[imgMode]}`
   
// console.log(btn.innerText,content[index])
})
});

window.addEventListener('resize',()=>{
windowWidthCheker();
 
})


function removeClass(){
   circleBtn.forEach((btn)=>{
      btn.classList.remove('activ-btn')
   })
}
function windowWidthCheker(){
   const width= window.innerWidth;
   if(width<=768){
      imgMode='landscape';
   }else{
      imgMode='portrait';
   }
    imgEl.src=`${content[position].images[imgMode]}`
   console.log(imgMode)
}
