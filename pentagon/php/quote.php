<?php
$q_name 	    = $_POST['q_name'];
$q_email 	    = $_POST['q_email'];
$q_phone 	    = $_POST['q_phone'];
$q_msg          = $_POST['q_msg'];


$to = 'pentagon2011@ukr.net';
$subject = 'Запрос на Paintball';

$message = 'Запрос получен с сайта Pentagon<br/><br/>';
$message .= '<strong>Имя : </strong>'.$q_name.'<br/><br/>';
$message .= '<strong>Email : </strong>'.$q_email.'<br/><br/>';
$message .= '<strong>Телефон : </strong>'.$q_phone.'<br/><br/>';
$message .= '<strong>Сообщение : </strong>'.$q_msg.'<br/><br/>';

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= 'От: <'.$q_email.'>' . "\r\n";

mail($to,$subject,$message,$headers);
?>