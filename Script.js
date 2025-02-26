// Intégration de la connexion avec Google
document.getElementById("login-button").addEventListener("click", function() {
    gapi.auth2.getAuthInstance().signIn().then(function(googleUser) {
        let profile = googleUser.getBasicProfile();
        alert('Bienvenue, ' + profile.getName() + '!');
    });
});

function startApp() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID' // Remplace par ton client ID de Google
        });
    });
}
