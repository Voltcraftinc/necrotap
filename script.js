document.addEventListener('DOMContentLoaded', function () {
    // Central orb multi-touch tap
    const centralOrb = document.getElementById('central-orb');
    let mutabytes = 0;
    let hp = 2500;
  
    centralOrb.addEventListener('touchstart', function () {
      hp -= 1;
      mutabytes += 1;
      updateUI();
    });
  
    function updateUI() {
      document.getElementById('hp-text').textContent = `${hp}/2500`;
      document.getElementById('mutabytes-text').textContent = `Mutabytes: ${mutabytes}`;
    }
  
    // Icons click with popup
    const popupOverlay = document.getElementById('popup-overlay');
    const closePopup = document.getElementById('close-popup');
  
    document.querySelectorAll('.icon').forEach(icon => {
      icon.addEventListener('click', function () {
        popupOverlay.style.display = 'flex';
      });
    });
  
    closePopup.addEventListener('click', function () {
      popupOverlay.style.display = 'none';
    });
  
    // TON Login modal
    const loginModal = document.getElementById('login-modal');
    const loginButton = document.getElementById('login-button');
  
    loginButton.addEventListener('click', function () {
      // TON wallet login process
      loginModal.style.display = 'none'; // Placeholder for now
    });
  });
  