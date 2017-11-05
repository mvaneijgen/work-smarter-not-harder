const parallaxDownElements = document.querySelector('.parallaxDown');

// console.log(parallaxDownElements.offsetTop);

// window.addEventListener('scroll', function(e) {
//   // console.log(window.scrollY);
//   parallexDownFun(parallaxDownElements, window.scrollY)
// })
// function parallexDownFun(elementToScroll, scrollpos) {
//   elementToScroll.style.transform = 'translateY(-'+scrollpos+'px)';
// }

// Replace emoji of form
const alloySignup = document.querySelector('#alloySignup');
alloySignup.addEventListener('focus', function( event ) {
  this.querySelector('.emoji').innerText = '😮';
}, true);
