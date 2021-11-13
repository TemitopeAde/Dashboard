var openToggle = document.querySelector('.bars');
var sidebar = document.querySelector('.sidebar');
var closebtn = document.querySelector('.closebtn')
var closebtn2 = document.querySelector('.closebtn2')
var newSidebar = document.querySelector('.new-sidebar')


openToggle.addEventListener('click', function () {
  sidebar.style.transform = "translateX(0)";
  newSidebar.style.transform = "translateX(0%)"
});



closebtn2.addEventListener('click', function() {
  newSidebar.style.transform = "translateX(-1000%)";
  sidebar.style.transform = "translateX(-100%)";
});















