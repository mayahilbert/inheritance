const vidContainers = document.querySelectorAll('.vimeo-vid');
console.log("playvideo");
vidContainers.forEach(el => el.addEventListener('click', event => {  
  playVideo(el);
}));

function playVideo(thisVid) {
  var thisVideo = thisVid;

  var playButton = thisVideo.querySelectorAll('.playbutton')[0];
  var player = thisVideo.querySelectorAll('iframe')[0];
  var vimeoplayer = new Vimeo.Player(player);

  $(playButton).addClass('hide');
  $(thisVideo).addClass('show');
  vimeoplayer.play();

}