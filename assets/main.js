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

//------------------------------------------------------//
// Parallex
//------------------------------------------------------//
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
  // console.log(calculaedPosTop);
}
document.addEventListener('DOMContentLoaded', function() {
    parallexDownFun(window.scrollY);
}, false);
//------------------------------------------------------//
// END Parallex
//------------------------------------------------------//

//------------------------------------------------------//
// Form interactions
//------------------------------------------------------//
// Replace emoji of form
const alloySignup = document.querySelector('#alloySignup');

alloySignup.addEventListener('focus', function( event ) {

  this.querySelector('.emoji').innerText = '😮';
  this.querySelector('[for="alloyEmail"]').classList.add('alloy-focus');

}, true);
//------------------------------------------------------//
// END Form interactions
//------------------------------------------------------//
//------------------------------------------------------//
// Emoji swap
//------------------------------------------------------//
const emojis = document.querySelectorAll('.item-superpowers .emoji');

emojis.forEach((emoji) => {

  emoji.addEventListener('mouseover', function( event ) {
    let emojiSwap = this.dataset.emoji;
    let emojiCurrent = this.innerText;
    this.innerText = emojiSwap;
    emojiSwap = this.dataset.emoji = emojiCurrent;
  })

})

//------------------------------------------------------//
// END Emoji swap
//------------------------------------------------------//
//------------------------------------------------------//
// Smooth scrolling
//------------------------------------------------------//
document.addEventListener("DOMContentLoaded", () => {
    scrollTo('.alloy-anchor', 500, 60);
});

function scrollTo (selector, duration, fps) {
    let anchors = [].slice.call(document.querySelectorAll(selector));

    for (let anchor of anchors) {
        anchor.addEventListener('click', scrollAnimation);
    }

    function scrollAnimation(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        let element = target, targetOffset = 0;

        while (element && element != document.body) {
            targetOffset += element.offsetTop;
            element = element.offsetParent;
        }

        let currentOffset = window.pageYOffset || document.body.scrollTop;
        let difference = Math.abs(currentOffset - targetOffset);

        if (!difference) return;

        let frames = parseInt(duration / 1000 * fps);
        let tick = duration / frames;
        let perFrame = difference / frames;
        let direction = (targetOffset > currentOffset) ? 1 : -1;

        let timer = setInterval(() => {
            currentOffset = window.pageYOffset || document.body.scrollTop;
            difference = Math.abs(currentOffset - targetOffset);

            if (difference < perFrame) {
                scrollBy(0, difference * direction);

                clearInterval(timer);
                return;
            }

            scrollBy(0, perFrame * direction);
        }, tick);
    }
}
//------------------------------------------------------//
// END Smooth scrolling
//------------------------------------------------------//
