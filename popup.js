let changeColor = document.getElementById('change-color');

chrome.storage.sync.get("color" , ({color}) => {
  changeColor.style.backgroundColor = color;  
})