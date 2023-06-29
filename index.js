
const sliderToggle = document.getElementById("slider-toggle");
const navSlider = document.getElementById("nav-slider");

sliderToggle.addEventListener("click", function() {
  if (navSlider.style.width === "200px") {
    navSlider.style.width = "0";
  } else {
    navSlider.style.width = "200px";
  }
});
window.addEventListener('DOMContentLoaded', () => {
    const socialLinks = document.querySelectorAll('.social-links i');
    
    socialLinks.forEach((link) => {
      link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 30px white, 0 0 20px gold';
      });
    
      link.addEventListener('mouseout', () => {
        link.style.textShadow = 'none';
      });
    });
  });
  window.addEventListener('DOMContentLoaded', () => {
    const devPicImage = document.querySelector('.devPic img');
    
    devPicImage.addEventListener('mouseover', () => {
      devPicImage.style.boxShadow = '0 0 20px white, 0 0 20px gold';
    });
    
    devPicImage.addEventListener('mouseout', () => {
      devPicImage.style.boxShadow = 'none';
    });
  });
  window.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.buttons button');
    
    buttons.forEach(button => {
      button.addEventListener('mouseover', () => {
        button.style.boxShadow = '0 0 10px white, 0 0 20px gold';
      });
      
      button.addEventListener('mouseout', () => {
        button.style.boxShadow = 'none';
      });
    });
  });
  
  
  
  
  