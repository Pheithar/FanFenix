<?php
if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$email_subject = $_POST['motivo'];

//Validate first
if(empty($name)||empty($visitor_email)||empty($subject))
{
    echo "Nombre, email y motivo obligatorios.";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Email no válido";
    exit;
}

$email_from = 'correo@fenix.com';
$email_body = "Nuevo mensaje de: $name.\n".
    "Mensaje:\n $message".

$to = $visitor_email;
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);



// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}

?>
