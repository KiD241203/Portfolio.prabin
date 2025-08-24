        AOS.init({ duration: 900, once: false }); // Scroll animations
    document.getElementById('year').textContent = new Date().getFullYear();
  // Change navbar background on scroll
  window.addEventListener("scroll", function() {
    const nav = document.querySelector(".glass-nav");
    if (window.scrollY > 50) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }

  })
  
    document.querySelectorAll(".skill-bar").forEach(skill => {
    skill.addEventListener("mouseenter", () => {
      let percent = skill.getAttribute("data-percent");
      skill.querySelector(".bar").style.width = percent;
    });
    skill.addEventListener("mouseleave", () => {
      skill.querySelector(".bar").style.width = "0";
    });
  });

// JavaScript to highlight navbar link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if(scrollY >= sectionTop - 60) { // adjust offset
            current = section.getAttribute('id');
           
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

