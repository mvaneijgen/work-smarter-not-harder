// import { gsap } from "gsap/dist/gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
// import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";

// gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MorphSVGPlugin);
ScrollTrigger.defaults({
  toggleActions: "restart pause resume reset",
  markers: (location.hostname === "localhost" || location.hostname === "127.0.0.1") ? true : false,
});
//------------------------------------------------------//
// Animation has skew 
//------------------------------------------------------//
document.querySelectorAll(".has-skew").forEach(function (container) {

  const item = container.querySelectorAll(".skewIn");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container, // What element triggers the scroll
      scrub: false, // Add a small delay of scrolling and animation. `true` is direct
      start: "top center", // Can be top, center, bottom 
      end: "100% center", // Can be top, center, bottom 
      // pin: true,
    }
  });

  timeline.to(item, {
    duration: 1,
    skewY: -3,
    ease: "elastic.out(2, 0.3)"
  });

});
// END Animation has skew -------------------------------------//
//------------------------------------------------------//
// Form interactions
//------------------------------------------------------//
// Sign me up text
document.querySelectorAll(".alloy-form-container").forEach(function (container) {

  const item = container.querySelectorAll(".alloy-fancy-header");

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: container, // What element triggers the scroll
      scrub: 1, // Add a small delay of scrolling and animation. `true` is direct
      start: "top-=10% bottom", // Can be top, center, bottom 
      end: "100% center", // Can be top, center, bottom 

    }
  });

  timeline.from(item, {
    y: -200,
    ease: "none",
  });

});
// Replace emoji of form
const alloySignup = document.querySelector('#alloySignup');

alloySignup.addEventListener('focus', function (event) {

  this.querySelector('.emoji').innerText = '😮';
  this.querySelector('[for="alloyEmail"]').classList.add('alloy-focus');

}, true);
//------------------------------------------------------//
// END Form interactions
//------------------------------------------------------//
//------------------------------------------------------//
// Emoji swap
//------------------------------------------------------//
const superpowers = document.querySelectorAll('.item-superpowers');

superpowers.forEach((superpower) => {

  superpower.addEventListener('mouseenter', function (event) {
    const emoji = superpower.querySelector('.emoji');

    let emojiSwap = emoji.dataset.emoji;
    let emojiCurrent = emoji.innerText;

    setTimeout(function () {
      emoji.innerText = emojiSwap;
      emoji.dataset.emoji = emojiCurrent;
    }, 450);

  })

})
//------------------------------------------------------//
// END Emoji swap
//------------------------------------------------------//

//--------------------------------//
// Laptop Animation
//--------------------------------//
document.querySelectorAll("#laptopSVG").forEach(function (container) {
  const q = gsap.utils.selector(container);

  const baseAnimate = 0.3;
  const tlMain = gsap.timeline({
    scrollTrigger: {
      trigger: container, // What element triggers the scroll
      start: "top bottom-=10%", // Can be top, center, bottom 
      // end: "100% center", // Can be top, center, bottom 
      endTrigger: "html",
    }
  });

  const ringing = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 2.5,
  });
  ringing.from('#whatsapp__phone', {
    duration: baseAnimate * 3,
    rotation: -20,
    transformOrigin: "center",
    ease: Elastic.easeOut.config(1, 0.2),
    repeat: 2
  });

  const notificationTop = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 2.5,
  });
  notificationTop.from(q('#notificationTop'), {
    duration: baseAnimate * 2,
    autoAlpha: 0,
    x: 200,
    ease: "back.out(1.1)",
    stagger: 1
  });
  notificationTop.add(() => { }, "+=5")
  notificationTop.to(q('#notificationTop'), {
    duration: baseAnimate * 2,
    x: 200,
    autoAlpha: 0,
    ease: "back.in(1.1)",
  });

  const notificationBottom = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 2.5,
  });
  notificationBottom.from(q('#notificationBottom'), {
    duration: baseAnimate * 2,
    autoAlpha: 0,
    x: 200,
    ease: "back.out(1.1)",
    stagger: 1
  });
  notificationBottom.add(() => { }, "+=5")
  notificationBottom.to(q('#notificationBottom'), {
    duration: baseAnimate * 2,
    x: 200,
    autoAlpha: 0,
    ease: "back.in(1.1)",
  });

  const message = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 5
  });
  message.fromTo(q('#message'), { autoAlpha: 0, rotation: 180, transformOrigin: "bottom left" }, {
    duration: baseAnimate * 2,
    autoAlpha: 1,
    rotation: 0,
    transformOrigin: "bottom left",
    ease: "back.out(1.1)",
  });
  message.add(() => { }, "+=5")
  message.to(q('#message'), {
    duration: baseAnimate * 2,
    rotation: -180,
    autoAlpha: 0,
    ease: "back.in(1.1)",
    transformOrigin: "bottom left",
    repeatRefresh: true,
  });

  const mail = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 5
  });
  mail.fromTo(q('#mail'), { autoAlpha: 0, y: 200 }, {
    duration: baseAnimate * 2,
    autoAlpha: 1,
    y: 0,
    ease: "back.out(1.1)",
  })
  mail.add(() => { }, "+=5")
  mail.to(q('#mail'), {
    duration: baseAnimate * 2,
    y: -200,
    autoAlpha: 0,
    ease: "back.in(1.1)",
    repeatRefresh: true,
  });

  const annoyingClock = gsap.timeline({
    paused: true,
    repeat: -1,
    repeatDelay: 0,
  });
  annoyingClock.to(q('#clock__minute'), {
    duration: 8,
    rotation: 12 * 360,
    transformOrigin: "center 89%",
    ease: Linear.easeNone
  }, "clock")
  annoyingClock.to(q('#clock__hour'), {
    duration: 8,
    rotation: 360,
    transformOrigin: "center 88%",
    ease: Linear.easeNone
  }, "clock")

  const labelPop = gsap.timeline({ paused: true, repeat: -1, repeatDelay: 5, defaults: { transformOrigin: "center" } });
  labelPop.from(q('#label'), { duration: baseAnimate, autoAlpha: 0, scale: 0, ease: "back.out(1.1)" })
  labelPop.add(() => { }, "+=10")
  labelPop.to(q('#label'), { duration: baseAnimate, scale: 0 })

  function rotateIn(elm) {
    const tl = gsap.timeline();

    tl.from(elm, {
      duration: baseAnimate * 2,
      autoAlpha: 0,
      y: 0,
      rotation: 180,
      ease: "back.out(1.1)",
      transformOrigin: "bottom left"
    });
    return tl;
  }

  function fadeInBottom(elm) {
    const tl = gsap.timeline();

    tl.from(elm, { duration: baseAnimate * 2, autoAlpha: 0, y: 200, });
    return tl;
  }
  //------------------------------------------------------//
  // END Nested animations
  //------------------------------------------------------//

  tlMain.from(q('#laptop__screen'), {
    duration: baseAnimate * 2,
    scaleY: 0,
    transformOrigin: "bottom center",
    ease: "back.out(1.1)"
  })
  // Message & Mail loop
  tlMain.add(() => message.play(), "+=1")
  tlMain.add(() => mail.play(), "+=.5")

  // WhatsApp Ringing loop 
  tlMain.add(rotateIn(q('#whatsapp')), "+=.5")
  tlMain.add(() => ringing.play(), "<")
  // Notification loops
  tlMain.add(() => notificationTop.play(), "+=.5")
  tlMain.add(() => notificationBottom.play(), "+=.75")
  tlMain.add(() => labelPop.play(), "+=.2")
  // Clock loop
  tlMain.add(fadeInBottom(q('#clock')), "+=.2")
  tlMain.add(() => annoyingClock.play(), "<")

  // Interactive elments 
  let clicks = 0;
  let disturbClicked = false;
  const disturbLoop = gsap.from(q('#disturb'), {
    duration: baseAnimate * 3,
    transformOrigin: "left bottom",
    rotate: 10,
    repeat: -1,
    delay: 2,
    immediateRender: false,
    repeatDelay: 2,
    ease: "elastic.out(2, 0.3)",
  })
  function disturb() {
    gsap.set(q('#disturb'), { autoAlpha: 1 })
    gsap.from(q('#disturb'), {
      duration: baseAnimate * 3,
      transformOrigin: "left bottom",
      opacity: 0,
      rotate: 30,
      ease: "elastic.out(2, 0.3)",
      onComplete: () => {
        disturbLoop
      }
    })
  }
  container.querySelectorAll("#disturb").forEach((clickable) => {
    clickable.addEventListener('click', () => {
      disturbClicked = !disturbClicked;
      if (disturbClicked) {
        gsap.to(q('.clickable'), {
          autoAlpha: 0
        })
        gsap.set(q('.clickable'), { scale: 0 })
        gsap.to(q('#laptop__screen__screen'), { fill: "#344" })
        gsap.fromTo(q('#text > *'), {
          autoAlpha: 0,
          y: 40,
          stagger: 0.4,
        }, {
          autoAlpha: 1,
          y: 0,
        })

        disturbLoop.kill();
        annoyingClock.kill();
        labelPop.kill();
        notificationTop.kill();
        notificationBottom.kill();
        ringing.kill();
        mail.kill();
        message.kill();
      } else {
        gsap.to(q('#laptop__screen__screen'), { fill: "#fff" })
        gsap.to(q('#text > *'), {
          autoAlpha: 0,
          y: 40,
          // stagger: 0.4,
        })
        gsap.set(q('.clickable'), { scale: 1, autoAlpha: 1 })
        disturbLoop.restart();
        annoyingClock.restart();
        labelPop.restart();
        notificationTop.restart();
        notificationBottom.restart();
        ringing.restart();
        mail.restart();
        message.restart();
      }

    })
  })

  container.querySelectorAll(".clickable").forEach((clickable) => {
    clickable.addEventListener('click', () => {
      // Get clickable item timline and pause it
      const animation = clickable.dataset.animation;
      eval(animation).pause();
      // Animate out the clickable item 
      gsap.to(clickable, {
        scale: 0,
        duration: 0.2,
        transformOrigin: "center center",
        onComplete: () => {
          gsap.set(clickable, {
            scale: 1,
            autoAlpha: 0,
            // transformOrigin: "bottom left"
          })
          gsap.delayedCall(2, () => eval(animation).restart());
        }
      });
      // Track how many times items have been clicked
      clicks++;
      if (clicks === 3) {
        disturb()
      }
    })
  });
});

// END Laptop --------------//

