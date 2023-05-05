// heart
let heart = document.querySelectorAll(".heart-button");


heart.forEach(heart=> {

heart.addEventListener("click", function () {
   
    if(!heart.classList.contains("heart-filled"))
    {
        heart.classList.add("heart-filled");
    }else
    {
        heart.classList.remove("heart-filled");

    }
} )
} );

// three dot
const clickMeElements = document.querySelectorAll('.three-dot');

clickMeElements.forEach(function(clickMeElement) {
  clickMeElement.addEventListener('click', function() {
    const parentElement = this.parentElement;
    const childElement = parentElement.querySelector('.target-element');
    childElement.classList.toggle('show');
  });
});



// music
const music = document.querySelectorAll(".music-starter");
const audio = document.querySelectorAll("audio");

music.forEach( function(m)
{
  m.addEventListener("click",function(){
    console.log(this);
    const parent = this.parentElement;
    console.log(parent);
    parent.querySelector("audio").play();
    const tar = parent.querySelector(".audio-class");
    console.log(tar)
    tar.classList.add("show");
  })
})


// close button
const close = document.querySelectorAll(".close-button");
// const starter = document.querySelectorAll(".music-starter");

close.forEach(function(c){
  
c.addEventListener("click",function (){
  const parent = this.parentElement;
  console.log(parent);
  parent.querySelector("audio").pause();
  parent.classList.remove("show");
})
})

// music.forEach(function(m) {
//   m.addEventListener('click', function() {
//     const parentElement = this.parentElement;
//     // console.log("parentElement:", parentElement);
// //     const childElement = parentElement.querySelector('.audio-class');
// //     console.log("childElement:", childElement);
//         m.classList.add('show');
//   });
// });




