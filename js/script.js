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
