<?php
$to = 'ermac1988@mail.ru';
$subject = 'Заявка с baristacoffeepoison.com.ua';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['name'])).'</p>
                        <p>Номер телефона: '.strip_tags(htmlspecialchars($_POST['phone'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
?>