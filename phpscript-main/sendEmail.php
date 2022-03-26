<?php 
if(isset($_POST['submit'])){
    $to = "200200@virtualwindow.co.za"; 
    $subject = "SEO Project Feedback";
    $message = $_POST['feedback'];

    mail($to,$subject,$message);

    header('Location: https://anitrix.co.za/pages/thankyou.html'); 
    }
?>