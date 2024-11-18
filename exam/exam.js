'use strict';

{

  function setWord(){
    word = words[Math.floor(Math.random() * words.length)];
    target.textContent = word;
    loc = 0;
  }

  const words = [
    'red',
    'blue',
    'pink',
  ];

  const target = document.getElementById('target');

  let word;
  let loc = 0;

  setWord();

  document.addEventListener('keydown', e => {
    if(e.key !== word[loc]){
      return;
    }
    loc++;
    // 1:_ed
    // 2:__d
    // 3:___
    target.textContent = '_'.repeat(loc) + word.substring(loc);
    if (loc === word.length){
      setWord();
    }
  });
}