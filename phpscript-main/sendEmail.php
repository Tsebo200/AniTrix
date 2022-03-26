<?php 
if(isset($_POST['submit'])){
    $to = "200200@virtualwindow.co.za"; // this must be the email address from your hosting provider

    $subject = "SEO Project Feedback";
    $message = $_POST['feedback'];

    mail($to,$subject,$message);

    header('Location: ../thankyou.html'); // you can add a thank you page if you like, this redirects to home
    }
?>