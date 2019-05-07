<?php
$to = 'videoatelie.com.ua@gmail.com';
$subject = 'Сообщение с videoatelie.com.ua';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['feedback-name'])).'</p>
                        <p>Номер телефона: '.strip_tags(htmlspecialchars($_POST['feedback-phone'])).'</p>
                        <p>Дата: '.strip_tags(htmlspecialchars($_POST['feedback-date'])).'</p>
                        <p>Комментарий: '.strip_tags(htmlspecialchars($_POST['feedback-message'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>