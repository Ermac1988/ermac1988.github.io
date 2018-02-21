<?php
    $to = 'thienkim.le1209@gmail.com';
    $subject = 'Заявка c «Robomen»';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Город: '.$_POST['city'].'</p>
                    </body>
                </html>';
    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    mail($to, $subject, $message, $headers);
    /*header("Location: {$_SERVER['HTTP_REFERER']}");*/
?>