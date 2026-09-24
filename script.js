// app.js

document.getElementById('collectDataBtn').addEventListener('click', function() {
    // Obtenir l'adresse IP, cela peut varier selon les navigateurs.
    var ip = 'Adresse IP non disponible';
    
    try {
        if (window.XMLHttpRequest) { // code pour IE6,7
            ip = '' + navigator.connection.peerConnection || '';
        } else if (typeof navigator.connection !== 'undefined') {
            // code pour Firefox 7+
            ip = '' + navigator.connection;
        }
        
        // Afficher l'adresse IP dans une alert ou un élément de page spécifique.
        alert('Votre adresse IP est : ' + ip);
    } catch(e) {
        alert('Erreur lors de la collecte des données: ' + e.message);
    }
});
