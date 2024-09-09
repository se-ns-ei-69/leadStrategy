<?php
// Подключаем PHPMailer
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Создаем новый объект PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Настройки SMTP сервера
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';          // SMTP сервер
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com';  // Ваш SMTP логин
        $mail->Password = 'your_password';           // Ваш SMTP пароль
        $mail->SMTPSecure = 'tls';                   // Шифрование
        $mail->Port = 587;                           // TCP порт для TLS

        // От кого письмо
        $mail->setFrom('no-reply@example.com', 'Website Contact Form');
        // Кому отправить
        $mail->addAddress('your_email@example.com');  // Ваш email для получения сообщения

        // Тема и тело письма
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body    = "<b>Name:</b> $name <br><b>Email:</b> $email <br><b>Message:</b> $message";

        // Отправляем письмо
        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
