// Récupère l'adresse IP automatiquement au chargement de la page via ipify
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    console.log("IP du visiteur :", data.ip);
    
    // Si tu veux afficher l'IP sur la page ou lors d'un clic :
    const btn = document.getElementById('collectDataBtn');
    if (btn) {
      btn.addEventListener('click', function() {
        alert("IP détectée : " + data.ip);
      });
    }
  })
  .catch(err => console.error("Erreur :", err));
