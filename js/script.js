document.getElementById('copyBtn').addEventListener('click', function(){
  var btn = this, text = document.getElementById('mail').textContent;
  function done(){ btn.textContent = 'E-mail copiado'; setTimeout(function(){ btn.textContent = 'Copiar e-mail'; }, 1800); }
  function fallback(){
    var r = document.createRange(); r.selectNodeContents(document.getElementById('mail'));
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
    btn.textContent = 'Selecionado, use Ctrl+C';
  }
  try { navigator.clipboard.writeText(text).then(done, fallback); } catch(e){ fallback(); }
});

// Entrada sutil dos blocos ao rolar; itens irmãos entram em cascata
(function(){
  var targets = document.querySelectorAll('.top, .hero > *, .sec-head, .stat, .tl, .case-block, .arch, .caps, .step, .tools span, .contact, .family-photo, .family-text, footer');
  var siblings = new Map();
  targets.forEach(function(el){
    var i = siblings.get(el.parentNode) || 0;
    siblings.set(el.parentNode, i + 1);
    el.style.setProperty('--d', Math.min(i, 6) * 80 + 'ms');
    el.classList.add('reveal');
  });
  if (!('IntersectionObserver' in window)) {
    targets.forEach(function(el){ el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach(function(el){ io.observe(el); });
})();
