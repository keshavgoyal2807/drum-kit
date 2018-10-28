window.addEventListener('keydown',function(e){
  var a= document.querySelector(`audio[data-first="${e.keyCode}"]`);
  var key=document.querySelector(`.first[data-first="${e.keyCode}"]`);
  if(!a)
  {
    return;//stop if another key is clicked
  }
  a.currentTime=0;    //rewind to start
  a.play();
  key.classList.add('playing');
  var key1=document.querySelectorAll('.first');
  key1.forEach(key => key.addEventListener('transitionend',function(e){
    if(e.propertyName!=='transform')
    {
      return;
    }
    key.classList.remove('playing');
  }));
});
