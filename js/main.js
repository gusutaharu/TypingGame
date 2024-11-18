'use strict';
{
  const target = document.getElementById('target');
  const result = document.getElementById('result');
  const words = [
    'red',
    'blue',
    'pink',
  ];
  let loc = 0;
  let word;
  let startTime;
  let isPlaying = false;

  function setWord(){
    word = words.splice(Math.floor(Math.random() * words.length),1)[0];
    loc = 0;
    target.textContent = word;
  };

  document.addEventListener('click',()=>{
    if (isPlaying === true){
      return;
    }
    isPlaying = true;
    startTime = Date.now();
    setWord();
  });
  
  document.addEventListener('keydown',e=>{
    if(word[loc] !== e.key){
      return;
    }
    loc++;
    target.textContent = '_'.repeat(loc) + word.substring(loc);
    if(loc === word.length){
      if( words.length === 0){
        let endTime = ((Date.now() - startTime) / 1000).toFixed(2);
        result.textContent = `Finished ${endTime}`;
        return;
      }
      setWord();
    }
  });
}