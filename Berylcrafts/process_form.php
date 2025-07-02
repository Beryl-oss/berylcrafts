<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $destinataire = "massenajonas256@gmail.com";
    $sujet = "Nouveau message du formulaire de contact";

    $contenu = "Nom: $name\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Message:\n$message";

    $headers = "From: $name <$email>";

    if (mail($destinataire, $sujet, $contenu, $headers)) {
        echo "Nos Félicitacions!!! Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
}
?>
