<?php  
    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $email = $_POST['user_email'];
    $message = $_POST['user_message'];
    $token = "6260109603:AAEqlwmXPodLFaQtHbu9OElxjVXvI4RJb7s";
    $chat_id = "-880718237";
    $arr = array(
      'Ім*я користувача: ' => $name,
      'Телефон: ' => $phone,
      'Email' => $email,
      'Коментар: ' => $message
    );
    
    foreach($arr as $key => $value) {
      $txt .= "<b>".$key."</b> ".$value."%0A";
    };
    
    fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
?>