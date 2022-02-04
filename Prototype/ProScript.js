var toggle = false;

function lightMode() {
    var element = document.body;
    element.classList.toggle("lightmode");

    var img = document.getElementById('git').src;
        if (img.indexOf('git.png')!=-1) {
            document.getElementById('git').src  = '/Prototype/sitePics/git2.png';
        }
         else {
           document.getElementById('git').src = '/Prototype/sitePics/git.png';
       }

       var img = document.getElementById('link').src;
       if (img.indexOf('in.png')!=-1) {
           document.getElementById('link').src  = '/Prototype/sitePics/in2.png';
       }
        else {
          document.getElementById('link').src = '/Prototype/sitePics/in.png';
      }

      var img = document.getElementById('img').src;
       if (img.indexOf('insta.png')!=-1) {
           document.getElementById('img').src  = '/Prototype/sitePics/insta2.png';
       }
        else {
          document.getElementById('img').src = '/Prototype/sitePics/insta.png';
      }

      var img = document.getElementById('home').src;
       if (img.indexOf('Symbol2.png')!=-1) {
           document.getElementById('home').src  = '/Prototype/sitePics/Symbol1.png';
       }
        else {
          document.getElementById('home').src = '/Prototype/sitePics/Symbol2.png';
      }

       var img = document.getElementById('light').src;
       if (img.indexOf('bulb1.png')!=-1) {
           document.getElementById('light').src  = '/Prototype/sitePics/bulb2.png';
       }
        else {
          document.getElementById('light').src = '/Prototype/sitePics/bulb1.png';
      }
 }

 function defade(element) {
    $("#bio").fadeToggle();
    $("#bio2").fadeToggle();
}