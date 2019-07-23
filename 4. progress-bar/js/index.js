// прокрутка страницы / высоту страницы * 100%

const progress = document.querySelector('.progress');

// отслеживание всего окна

window.addEventListener('scroll', progressBar);

function progressBar() {
 let windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
 let windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 let percent = windowScroll / windowHeight * 100;
 
  progress.style.width = percent + '%';
  
}