(function(){
  var about = document.getElementById('about')
  var work = document.getElementById('work')

  var aboutToggle = document.getElementById('about-toggle-overlay')
  var workToggle = document.getElementById('work-toggle-overlay')

  var closeAbout = document.getElementById('close-about-overlay')
  var closeWork = document.getElementById('close-work-overlay')

  aboutToggle.addEventListener("click", function(){
    about.style.display = "block"
  })

  workToggle.addEventListener("click", function(){
    work.style.display = "block"
  })

  closeAbout.addEventListener("click", function(){
    about.style.display = "none"
  })

  closeWork.addEventListener("click", function(){
    work.style.display = "none"
  })

})();