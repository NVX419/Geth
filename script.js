document.querySelectorAll('.skills span').forEach((skill, i) => {
  skill.style.opacity = 0;
  skill.style.transform = 'translateY(20px)';
  
  setTimeout(() => {
    skill.style.transition = '0.6s ease';
    skill.style.opacity = 1;
    skill.style.transform = 'translateY(0)';
  }, i * 100);
});
