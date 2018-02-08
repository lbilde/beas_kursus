function sayHello() {
  var element = document.getElementsByClassName("title")[0];
  var title = element.innerHTML;
  if(title == 'Cheese'){
    element.innerHTML = "Smurf"
  } else {
    element.innerHTML = "Cheese"
  }
  
}