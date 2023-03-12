

window.onload=function(){

    let MonFichierhover = document.getElementsByClassName('categories')
    let Icon = document.getElementsByClassName('restrictive-header')
    let Bar = document.getElementsByClassName('bar-logo')
    
    
    
    
    
    MonFichierhover[0].addEventListener('mouseenter' , showMonFichierhover , false ); 

    MonFichierhover[0].addEventListener('mouseleave' , unshowMonFichierhover , false ); 
    
    
    function showMonFichierhover() {

        Icon[0].classList.add('rotate-icon');
        for (let i = 0; i < Bar.length ; i++) {

            Bar[i].classList.add('bar-logo-hover');
        }
    }

    function unshowMonFichierhover() {

        Icon[0].classList.remove('rotate-icon');

        for (let i = 0; i < Bar.length ;i++) {

            Bar[i].classList.remove('bar-logo-hover');
        }
    }
  }
