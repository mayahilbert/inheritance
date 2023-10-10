var isOpen;
// Get the button that opens the modal
var btn = document.querySelectorAll("button.modal-button");

// All page modals
var modals = document.querySelectorAll('.modal-home');

// Get the <span> element that closes the modal
var spans = document.getElementsByClassName("close");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
 btn[i].onclick = function(e) {
  console.log(e.target.getAttribute("href"))

    e.preventDefault();
    var modal = document.querySelector(e.target.getAttribute("href"));
    isOpen = true;
    modal.classList.add(isOpen ? 'slide-in' : 'slide-out');
    modal.classList.remove(isOpen ? 'slide-out' : 'slide-in');

    $('body'). css("overflow", "hidden");
 }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < spans.length; i++) {
 spans[i].onclick = function() {
    for (var index in modals) {

      if (modals[index].classList != undefined && modals[index].classList.contains('slide-in')) {
      isOpen = false;

      modals[index].classList.add(isOpen ? 'slide-in' : 'slide-out');
      modals[index].classList.remove(isOpen ? 'slide-out' : 'slide-in');

      $('body'). css("overflow", "auto");}
    }
 }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
     for (var index in modals) {
      if (modals[index].classList != undefined && modals[index].classList.contains('slide-in')) {
        isOpen = false;

      modals[index].classList.add(isOpen ? 'slide-in' : 'slide-out');
      modals[index].classList.remove(isOpen ? 'slide-out' : 'slide-in');

      $('body'). css("overflow", "auto");}
     }
    }
}