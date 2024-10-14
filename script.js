document.addEventListener('DOMContentLoaded', function () {
    // Variables
    const centralOrb = document.getElementById('central-orb');
    let mutabytes = 0;
    let hp = 2500;
    const maxHp = 2500;
    const hpRegenRate = 1;

    // Tap orb logic
    function tapOrb() {
        if (hp > 0) {
            mutabytes += 1;
            hp -= 1;
            updateUI();
        }
    }

    // Regenerate HP over time (every 1 second)
    function regenHP() {
        if (hp < maxHp) {
            hp += hpRegenRate;
            updateUI();
        }
    }

    // Update UI
    function updateUI() {
        document.getElementById('hp-text').textContent = `${hp}/${maxHp}`;
        document.getElementById('mutabytes-text').textContent = `${mutabytes}`;
    }

    // Central orb multi-touch tap
    centralOrb.addEventListener('click', function () {
        tapOrb();
    });

    // Set up auto-regeneration of HP every second
    setInterval(regenHP, 1000);

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
