// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const parallaxDownElements = document.querySelector('.parallaxDown');
// const parallaxDownElementTop = parallaxDownElements.getBoundingClientRect().top;

function offset(elt) {
  var rect = elt.getBoundingClientRect();
  var bodyElt = document.body;

  return {
    top: rect.top + bodyElt .scrollTop,
    left: rect.left + bodyElt .scrollLeft
  }
}
var offsetElt = offset(parallaxDownElements);
let parallaxDownElementTop = offsetElt.top;

var myEfficientFn = debounce(function() {
  parallexDownFun(window.scrollY);
}, 10);

window.addEventListener('scroll', myEfficientFn);

function parallexDownFun(scrollpos) {
  var calculaedPosTop = parseInt((parallaxDownElementTop - scrollpos) / 5);
  parallaxDownElements.style.transform = 'translateY(-'+calculaedPosTop+'px)';
  console.log(calculaedPosTop);
}

// Replace emoji of form
const alloySignup = document.querySelector('#alloySignup');
alloySignup.addEventListener('focus', function( event ) {
  this.querySelector('.emoji').innerText = '😮';
}, true);
