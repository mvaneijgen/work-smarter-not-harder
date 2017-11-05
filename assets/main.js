const parallaxDownElements = document.querySelectorAll('.parallaxDown');

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY);
  parallexDownFun(window.scrollY)
})

function parallexDownFun(scrollpos) {
  Array.from(parallaxDownElements.forEach(fun‌​ction(e) {
    var parallaxDownElementTop = parallaxDownElement.getBoundingClientRect().top;
    var calculaedPosTop = parallaxDownElementTop - scrollpos;
    parallaxDownElement.style.transform = 'translateY(-'+calculaedPosTop+'px)';
  });
}

// Replace emoji of form
const alloySignup = document.querySelector('#alloySignup');
alloySignup.addEventListener('focus', function( event ) {
  this.querySelector('.emoji').innerText = '😮';
}, true);
