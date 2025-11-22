// Page d'expérience
if (document.getElementById('horizontal-scroll-bar')) {
  const scrollContainer = document.getElementById('horizontal-scroll-bar');
  scrollContainer.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
  });
}

// Page de contact
if (document.getElementById('send-button') && document.getElementById('message') && document.getElementById('success-message')) {
  const sendButton = document.getElementById('send-button');
  const objectField = document.getElementById('objet');
  const messageField = document.getElementById('message');
  const successMessage = document.getElementById('success-message');
  const recipientEmail = 'andy.dabadie@gmail.com';

  sendButton.addEventListener('click', function(event) {
    event.preventDefault();  // Empêche le comportement par défaut du bouton (soumission du formulaire)

    const objectContent = objectField.value.trim();
    const messageContent = messageField.value.trim();

    if (messageContent === '') {
        alert('Veuillez écrire un message avant de l\'envoyer.');
        return;
    }

    // Crée un lien mailto avec les valeurs du formulaire
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipientEmail}&su=${encodeURIComponent(objectContent)}&body=${encodeURIComponent(messageContent)}`;

    // Ouvre l'URL dans une nouvelle fenêtre
    window.open(mailtoLink, '_blank');

    messageField.value = '';
    objectField.value = '';

    successMessage.style.visibility = 'visible';

    setTimeout(() => {
        successMessage.style.visibility = 'hidden';  // Remplacer 'display' par 'visibility' pour maintenir l'espace occupé
    }, 5000);
  });
} else {
  console.error('Un ou plusieurs éléments n\'ont pas été trouvés');
}