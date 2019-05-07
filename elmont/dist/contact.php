<?php
$to = 'info@elmont.com.ua';
$subject = 'Сообщение с сайта elmont.com.ua';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['name'])).'</p>
                        <p>Почта: '.strip_tags(htmlspecialchars($_POST['email'])).'</p>
                        <p>Тема: '.strip_tags(htmlspecialchars($_POST['subject'])).'</p>
                        <p>Сообщение: '.strip_tags(htmlspecialchars($_POST['message'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>