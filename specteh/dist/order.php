<?php
$to = 'specteh-zakaz@yandex.ru';
$subject = 'Заказ с сайта specteh.pro';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['name'])).'</p>
                        <p>Телефон: '.strip_tags(htmlspecialchars($_POST['phone'])).'</p>
                        <p>Адрес: '.strip_tags(htmlspecialchars($_POST['address'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>