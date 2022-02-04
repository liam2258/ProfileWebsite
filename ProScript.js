var toggle = false;

function lightMode() {
    var element = document.body;
    element.classList.toggle("lightmode");

    var img = document.getElementById('git').src;
        if (img.indexOf('git.png')!=-1) {
            document.getElementById('git').src  = 'sitePics/git2.png';
        }
         else {
           document.getElementById('git').src = 'sitePics/git.png';
       }

       var img = document.getElementById('link').src;
       if (img.indexOf('in.png')!=-1) {
           document.getElementById('link').src  = 'sitePics/in2.png';
       }
        else {
          document.getElementById('link').src = 'sitePics/in.png';
      }

      var img = document.getElementById('img').src;
       if (img.indexOf('insta.png')!=-1) {
           document.getElementById('img').src  = 'sitePics/insta2.png';
       }
        else {
          document.getElementById('img').src = 'sitePics/insta.png';
      }

      var img = document.getElementById('home').src;
       if (img.indexOf('Symbol2.png')!=-1) {
           document.getElementById('home').src  = 'sitePics/Symbol1.png';
       }
        else {
          document.getElementById('home').src = 'sitePics/Symbol2.png';
      }

       var img = document.getElementById('light').src;
       if (img.indexOf('bulb1.png')!=-1) {
           document.getElementById('light').src  = 'sitePics/bulb2.png';
       }
        else {
          document.getElementById('light').src = 'sitePics/bulb1.png';
      }
 }

 function defade(element) {
    $("#bio").fadeToggle();
    $("#bio2").fadeToggle();
}