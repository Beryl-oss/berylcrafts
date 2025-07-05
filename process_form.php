<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'massenajonas256@gmail.com'; 
        $mail->Password = 'ewxarfwspmvjnonk'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->setFrom($email, $nom);
        $mail->addAddress('massenajonas256@gmail.com');

        $mail->Subject = 'Nouveau message du formulaire de contact';
        $mail->Body    = "Nom: $nom\nEmail: $email\n\nMessage:\n$message";

        $mail->send();
        echo json_encode([
            "success" => true,
            "message" => "✅ Merci ! Votre message a bien été envoyé."
        ]);
    } catch (Exception $e) {
        echo json_encode([
            "success" => false,
            "message" => "❌ Le message n’a pas pu être envoyé. Erreur : {$mail->ErrorInfo}"
        ]);
    }
}
?>
