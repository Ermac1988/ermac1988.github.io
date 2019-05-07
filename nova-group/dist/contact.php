<?php
$to = 'novagroupevent@gmail.com';
$subject = 'Сообщение с сайта nova-group.com.ua';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['name'])).'</p>
                        <p>Почта: '.strip_tags(htmlspecialchars($_POST['email'])).'</p>
                        <p>Сообщение: '.strip_tags(htmlspecialchars($_POST['message'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>