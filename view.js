const vidContainers = document.querySelectorAll('.vimeo-vid');
vidContainers.forEach(el => el.addEventListener('click', event => {  
  //pauseVideos();
  playVideo(el);
}));

//function pauseVideos() {
//  for (var i = 0; i < vidContainers.length; i++) {
//    var player = vidContainers[i].querySelectorAll('iframe')[0];
//  var vimeoplayer = new Vimeo.Player(player);
//    vimeoplayer.pause();
//  }
//  };

function playVideo(thisVid) {
  var thisVideo = thisVid;

  var playButton = thisVideo.querySelectorAll('.playbutton')[0];
  var player = thisVideo.querySelectorAll('iframe')[0];
  var vimeoplayer = new Vimeo.Player(player);

  $(playButton).addClass('hide');
  $(thisVideo).addClass('show');
  vimeoplayer.play();

}


// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    console.log(e.target.getAttribute("href"))
    modal.style.display = "flex";
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (typeof modals[index].style !== 'undefined') modals[index].style.display = "none";    
     }
    }
}