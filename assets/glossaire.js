/* Glossaire — toggle au tap (mobile) + accessibilité clavier.
   Convention : <span class="gloss" tabindex="0" data-def="Définition sans jargon.">terme</span> */
(function(){
  'use strict';
  function init(){
    var terms = document.querySelectorAll('.gloss');
    if (!terms.length) return;
    terms.forEach(function(t){
      if (!t.hasAttribute('tabindex')) t.setAttribute('tabindex','0');
      t.setAttribute('role','button');
      t.setAttribute('aria-label', t.textContent.trim() + ' — définition : ' + (t.getAttribute('data-def')||''));
      t.addEventListener('click', function(e){
        e.stopPropagation();
        var wasOpen = t.classList.contains('gloss-open');
        document.querySelectorAll('.gloss-open').forEach(function(o){ o.classList.remove('gloss-open'); });
        if (!wasOpen) t.classList.add('gloss-open');
      });
      t.addEventListener('keydown', function(e){
        if (e.key === 'Escape') t.classList.remove('gloss-open');
      });
    });
    document.addEventListener('click', function(){
      document.querySelectorAll('.gloss-open').forEach(function(o){ o.classList.remove('gloss-open'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
