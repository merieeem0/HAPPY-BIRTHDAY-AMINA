

    function hideAll() {
      document.getElementById('step1').classList.add('hidden');
      document.getElementById('sad1').classList.add('hidden');
      document.getElementById('birthday').classList.add('hidden');
      document.getElementById('step3').classList.add('hidden');
      document.getElementById('sad2').classList.add('hidden');
      document.getElementById('step4').classList.add('hidden');
      document.getElementById('message').classList.add('hidden');
    }

    function step2(answer) {
      hideAll();
      if (answer === 'no') {
        document.body.style.backgroundColor = '#1a0000';
        document.body.style.color = '#ff4d4d';
        document.getElementById('sad1').classList.remove('hidden');
      } else {
        document.body.style.backgroundColor = '#ffe6f0';
        document.body.style.color = 'pink';
        document.getElementById('birthday').classList.remove('hidden');
      }
    }

    function step3() {
      hideAll();
      document.getElementById('step3').classList.remove('hidden');
    }

    function goToConfirmation() {
      hideAll();
      document.getElementById('step4').classList.remove('hidden');
    }

    function openMessage(answer) {
      hideAll();
      if (answer === 'no') {
        document.getElementById('sad2').classList.remove('hidden');
      }
    }

    function showMessage(answer) {
      hideAll();
      if (answer === 'no') {
        document.getElementById('sad2').classList.remove('hidden');
      } else {
        document.getElementById('message').classList.remove('hidden');
      }
    
    }
