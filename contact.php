<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // create object PHPMailer
    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';          // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com';  // SMTP login
        $mail->Password = 'your_password';           // SMTP pass
        $mail->SMTPSecure = 'tls';                   // Security
        $mail->Port = 587;                           // TCP port for TLS

        $mail->setFrom('no-reply@example.com', 'Lead Strategy Contact Form');
        $mail->addAddress('test-email@leadstrategy.com');

        // mail theme
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "<b>Name:</b> $name <br><b>Email:</b> $email <br><b>Message:</b> $message";

        // send mail
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
