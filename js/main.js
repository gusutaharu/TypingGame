'use strict'
{
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');
  
  let q1 = ['r','e','d'];
  let q2 = ['p','i','n','k'];
  let question;

  body.addEventListener('click',()=>{
    question = q1.join(' ');
    h1.textContent = question;
  });

  document.addEventListener('keydown',(e)=>{
    while(q1[0]===e.key){
      q1[0] = '_';
      question = q1.join(' ');
      h1.textContent = question;
      document.addEventListener('keydown',(e)=>{
        while(q1[1]===e.key){
          q1[1] = '_';
          question = q1.join(' ');
          h1.textContent = question;
          document.addEventListener('keydown',(e)=>{
            while(q1[2]===e.key){
              q1[2] = '_';
              question = q1.join(' ');
              h1.textContent = question;
            }
          })
        }
      })
    }
  })
}