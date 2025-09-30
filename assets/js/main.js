
// Dark mode toggle (persist in localStorage)
(function(){
  const setTheme = t => document.documentElement.setAttribute('data-theme', t);
  const saved = localStorage.getItem('theme');
  if(saved){ setTheme(saved); }
  document.getElementById('themeToggle').addEventListener('click', function(){
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(current); localStorage.setItem('theme', current);
  });
  // highlight active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const link = document.querySelector('.nav a[href="#'+id+'"]');
      if(link){
        if(entry.isIntersecting){ navLinks.forEach(l=>l.classList.remove('active')); link.classList.add('active'); }
      }
    });
  },{ root:null, rootMargin:"-60% 0px -35% 0px", threshold:0 });
  sections.forEach(s=>observer.observe(s));
})();
