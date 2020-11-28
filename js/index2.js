window.onload = function () {

  var audio = document.getElementsByClassName('song')[0];
  audio.play();
    //document.getElementById('card').style.display="none";
    var merrywrap = document.getElementById("merrywrap");
    var box = merrywrap.getElementsByClassName("giftbox")[0];
    var step = 1;
    var stepMinutes = [1000, 1000, 0, 00];
    function init() {
      box.addEventListener("click", openBox, false);
    }
    function stepClass(step) {
      merrywrap.className = 'merrywrap';
      merrywrap.className = 'merrywrap step-' + step;
    }
    function openBox() {
      if (step === 1) {
        box.removeEventListener("click", openBox, false);
      }
      stepClass(step);
      if (step === 3) {
        // var audio = document.getElementsByClassName('song')[0];
        // audio.play();
      }
      if (step === 4) {
        //location.replace("index.html")
        //reveal();
        document.getElementById('card').style.display="block";
        return;
      }
      setTimeout(openBox, stepMinutes[step - 1]);
      step++;
    }
  
    init();
  
  };
  
//   function reveal() {
//     //document.querySelector('.merrywrap').style.backgroundColor = #d44;
  
//     //loop();
  
//     var w, h;
//     if (window.innerWidth >= 1000) {
//       w = 295;h = 185;
//     } else
//     {
//       w = 255;h = 155;
//     }
  
//     var ifrm = document.createElement("iframe");
//     ifrm.setAttribute("src", "https://www.youtube.com/embed/gbICivOO26U?controls=0&loop=1&autoplay=1");
//     //ifrm.style.width = `${w}px`;
//     //ifrm.style.height = `${h}px`;
//     ifrm.style.border = 'none';
//     document.querySelector('#video').appendChild(ifrm);

//     location.replace("index.html")
//   }
  
  