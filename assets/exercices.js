/* Exercices de fin de chapitre — QCM data-driven.
   Usage dans un chapitre :
   <div id="exercices"></div>
   <script type="application/json" id="exos-data">
   { "lesson": "16",
     "questions": [
       { "q": "Question ?",
         "opts": ["Choix A", "Choix B", "Choix C"],
         "answer": 1,
         "expl": "Pourquoi B est la bonne réponse." }
     ] }
   </script>
   La réponse et l'explication ne s'affichent qu'après validation.
   Progression stockée en localStorage (clé bfp_exos_<lesson>). */
(function(){
  'use strict';
  function esc(s){ var d=document.createElement('div'); d.textContent=s; return d.innerHTML; }

  function init(){
    var dataEl = document.getElementById('exos-data');
    var mount = document.getElementById('exercices');
    if (!dataEl || !mount) return;
    var data;
    try { data = JSON.parse(dataEl.textContent); } catch(e){ return; }
    var KEY = 'bfp_exos_' + (data.lesson || 'x');
    var saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch(e){}

    var html = '<section class="exos-wrap">' +
      '<div class="exos-tag">Vérifiez vos acquis</div>' +
      '<div class="exos-title">Exercices</div>' +
      '<div class="exos-score" id="exosScore"></div>';

    data.questions.forEach(function(item, qi){
      html += '<div class="exo" data-qi="' + qi + '">' +
        '<p class="exo-q">' + (qi+1) + '. ' + esc(item.q) + '</p>' +
        '<div class="exo-opts">';
      item.opts.forEach(function(opt, oi){
        html += '<label class="exo-opt" data-oi="' + oi + '">' +
          '<input type="radio" name="exo' + qi + '" value="' + oi + '"> ' +
          '<span>' + esc(opt) + '</span></label>';
      });
      html += '</div>' +
        '<button type="button" class="exo-validate" data-qi="' + qi + '">Valider</button>' +
        '<div class="exo-feedback" hidden></div></div>';
    });
    html += '<button type="button" class="exo-reset" id="exoReset">Réinitialiser les exercices</button></section>';
    mount.innerHTML = html;

    function updateScore(){
      var ok = 0, done = 0;
      Object.keys(saved).forEach(function(k){ done++; if (saved[k].correct) ok++; });
      document.getElementById('exosScore').textContent =
        done ? (ok + ' bonne(s) réponse(s) sur ' + done + ' validée(s) — ' + data.questions.length + ' questions au total')
             : data.questions.length + ' questions — les réponses s\u2019affichent après validation.';
    }

    function renderDone(qi, chosen){
      var item = data.questions[qi];
      var exo = mount.querySelector('.exo[data-qi="' + qi + '"]');
      var correct = (chosen === item.answer);
      exo.classList.add('done');
      exo.querySelectorAll('input').forEach(function(inp){ inp.disabled = true; });
      exo.querySelector('.exo-opt[data-oi="' + item.answer + '"]').classList.add('is-correct');
      if (!correct) exo.querySelector('.exo-opt[data-oi="' + chosen + '"]').classList.add('is-wrong');
      exo.querySelector('input[value="' + chosen + '"]').checked = true;
      var fb = exo.querySelector('.exo-feedback');
      fb.hidden = false;
      fb.className = 'exo-feedback ' + (correct ? 'ok' : 'ko');
      fb.innerHTML = '<b>' + (correct ? 'Bonne réponse.' : 'Pas tout à fait.') + '</b>' + esc(item.expl);
      exo.querySelector('.exo-validate').style.display = 'none';
    }

    // restaurer l'état sauvegardé
    Object.keys(saved).forEach(function(qi){ renderDone(parseInt(qi,10), saved[qi].chosen); });
    updateScore();

    mount.addEventListener('click', function(e){
      var btn = e.target.closest('.exo-validate');
      if (btn){
        var qi = parseInt(btn.getAttribute('data-qi'),10);
        var checked = mount.querySelector('input[name="exo' + qi + '"]:checked');
        if (!checked) return;
        var chosen = parseInt(checked.value,10);
        saved[qi] = { chosen: chosen, correct: chosen === data.questions[qi].answer };
        try { localStorage.setItem(KEY, JSON.stringify(saved)); } catch(err){}
        renderDone(qi, chosen);
        updateScore();
      }
      if (e.target.id === 'exoReset'){
        try { localStorage.removeItem(KEY); } catch(err){}
        location.reload();
      }
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
