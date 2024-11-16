'use strict'
{
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  
  let q1 = ['r','e','d'];
  let q2 = ['p','i','n','k'];
  
  body.addEventListener('click',()=>{
    let question = q1.join(' ');
    h1.textContent = question;
    document.addEventListener('keydown',(e)=>{
      for( let i = 0; i < q1.length; i++){
        while(q1[i]===e.key){
          q1[i]='_';
          question = q1.join(' ');
          h1.textContent = question;
        }
        console.log(q1);
      }
    })
  });
}