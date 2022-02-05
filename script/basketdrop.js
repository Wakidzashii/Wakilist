function chg(id,chk){
  
      var el = document.getElementById(id);
  
      var ch = document.getElementById(chk);
  
      if (el.src.indexOf("img/shopping-cart.svg")>0){
  
          el.src="img/shopping-cart (1) 2.svg"
  
          ch.checked="true";
  
      }else{
  
          el.src="img/shopping-cart.svg"
  
          ch.checked="";
  
      }
  
  }
  





var title = document.getElementById('title');

function showHide() {
  if (title.style.display != 'block') { // если блок скрыт
    title.style.display = 'block'; // открываем его
  } else { // если открыт
    title.style.display = 'none'; // скрываем
  }
}