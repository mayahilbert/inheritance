

function fadeInPage() {
  if (!window.AnimationEvent) { return; }
  var fader = document.getElementById('fader');
  fader.classList.add('fade-out');
}


document.addEventListener('DOMContentLoaded', function() {
  if (!window.AnimationEvent) { return; }
var anchors = document.getElementsByTagName('a');
    
  for (var idx=0; idx<anchors.length; idx+=1) {
    if (anchors[idx].hostname !== window.location.hostname ||
      anchors[idx].pathname === window.location.pathname) {
      continue;
  }
  anchors[idx].addEventListener('click', function(event) {
    var fader = document.getElementById('fader'),
        anchor = event.currentTarget;
    
    var listener = function() {
        window.location = anchor.href;
        fader.removeEventListener('animationend', listener);
    };
    fader.addEventListener('animationend', listener);
    
    event.preventDefault();
    fader.classList.add('fade-in');
  });
}
});



window.addEventListener('pageshow', function (event) {
  if (!event.persisted) {
    return;
  }
  var fader = document.getElementById('fader');
  fader.classList.remove('fade-in');
});





const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll("a, .hoverable");

// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.6, {
    x: e.clientX - 15,
    y: e.clientY - 15,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.clientX - 9,
    y: e.clientY - 10,
  });
}

// // Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 0,
  });
  TweenMax.to($smallBall, 0.3, {
    scale: 1,
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1,
  });
  TweenMax.to($smallBall, 0.3, {
    scale: 1,
  });
}