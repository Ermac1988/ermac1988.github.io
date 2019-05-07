<?php
$to = 'specteh-zakaz@yandex.ru';
$subject = 'Заявка (калькулятор) с сайта specteh.pro';
$message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.strip_tags(htmlspecialchars($_POST['name'])).'</p>
                        <p>Телефон: '.strip_tags(htmlspecialchars($_POST['phone'])).'</p>
                        <p>Адрес забора: '.strip_tags(htmlspecialchars($_POST['address'])).'</p>
                        <p>Дата подачи контейнера: '.strip_tags(htmlspecialchars($_POST['date'])).'</p>
                        <p>Время подачи контейра: '.strip_tags(htmlspecialchars($_POST['time'])).'</p>
                        <p>Район: '.strip_tags(htmlspecialchars($_POST['region'])).'</p>
                        <p>Объем контейнера: '.strip_tags(htmlspecialchars($_POST['capacity'])).'</p>
                        <p>Тип расчета: '.strip_tags(htmlspecialchars($_POST['calculation'])).'</p>
                        <p>Тип мусора: '.strip_tags(htmlspecialchars($_POST['garbage'])).'</p>
                    </body>
                </html>';
$headers  = "Content-type: text/html; charset=utf-8 \r\n";
mail($to, $subject, $message, $headers);
header("Location: https://www.specteh.pro/");
exit();
?>