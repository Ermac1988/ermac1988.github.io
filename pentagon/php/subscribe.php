<?php
$sub_email 	= $_POST['sub_email'];


$to = 'pentagon2011@ukr.net';
$subject = 'Подписка на новости Pentagon';

$message = 'Запрос на подписку<br/><br/>';
$message .= '<strong>Email : </strong>'.$sub_email.'<br/><br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'От: <'.$sub_email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
?>