const btnRippleEffect = document.querySelector(".button-ripple-effect");


btnRippleEffect.addEventListener('mouseover', (event)=> {
const y  = event.pageY - btnRippleEffect.offsetTop;
const x  = event.pageX - btnRippleEffect.offsetLeft;
btnRippleEffect.style.setProperty('--xPos', x + 'px')
btnRippleEffect.style.setProperty('--yPos', y + 'px')
})