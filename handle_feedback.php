<!DOCTYPE html>
<html lang="en">
<head>
	<meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
	<style type="text/css">body  {
    background-image: url('/Team2/images/team2 scene.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
}
	</style>
	<meta content="IE=edge" http-equiv="X-UA-Compatible" />
<meta content="width=device-width, initial-scale=1" name="viewport" /><!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags --></html>
<title>Team 2</title>
<!-- Bootstrap Core CSS -->
<link href="css/bootstrap.min.css" rel="stylesheet" /><!-- Custom CSS: You can use this stylesheet to override any Bootstrap styles and/or apply your own styles -->
<link href="css/custom.css" rel="stylesheet" /><!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries --><!-- WARNING: Respond.js doesn't work if you view the page via file:// --><!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<!-- Navigation -->
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
<div class="container"><!-- Logo and responsive toggle -->
<div class="navbar-header"><button class="navbar-toggle" data-target="#navbar" data-toggle="collapse" type="button"><span class="sr-only">Toggle navigation</span></button></div>
<!-- Navbar links -->

<div class="collapse navbar-collapse" id="navbar">
<ul class="nav navbar-nav navbar-right">
	<li class="active"><a href="#">Home</a></li>
	<li><a href="#">Products</a></li>
	<li class="dropdown"><a aria-expanded="false" aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#" role="button">Services </a>
	<ul aria-labelledby="about-us" class="dropdown-menu">
		<li><a href="/Team2/Videospage.html">Videos</a></li>
		<li><a href="/feedback.html">Feedback</a></li>
		<li><a href="#">something</a></li>
	</ul>
	</li>
	<li><a href="#">My Account</a></li>
	<li><a href="#">My Cart</a></li>
</ul>
</div>
<!-- /.navbar-collapse --></div>
<!-- /.container --></nav>
<!-- Feature --><!-- Heading -->
<?php // handle_email.php
/* this script handles the email form. 
The following are the fields that come from the form:
name, email, message */

	ini_set ('display_errors', 1);
	error_reporting (E_ALL | E_STRICT);
	
	// Get the data from the form
	$name = $_POST['name'];
	$visitor_email = $_POST['email'];
	$message = $_POST['message'];
	$messagewrap = wordwrap($message, 70, "\r\n");
	
	//Validate the submitted data
	$okay = TRUE;
	
	if (empty($_POST['name'])) {
		print '<p class="error">Please enter your name.</p>';
		$okay = FALSE;
	}
	if (empty($_POST['email'])) {
		print '<p class="error">Please enter your email.</p>';
		$okay = FALSE;
	}
	if (empty($_POST['message'])) {
		print '<p class="error">Please enter text for the message.</p>';
		$okay = FALSE;
	}
	
	// Build variables for the email message
	$email_from = 'sz0b7m@gmail.com';
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user <a href=\"mailto:$visitor_email\">$name</a>.\n".
                  "Here is the message:\n $messagewrap".
	$to = "sz0b7m@gmail.com";
	
	// To send HTML mail, the Content-type header must be set
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

	// Additional headers
	$headers .= "To: $to" . "\r\n";
	$headers .= "From: $name <$email_from>" . "\r\n";
	
	// Send the email
	if ($okay) {
		mail($to, $email_subject, $email_body, $headers);
		print "<p>The feedback has been sent.</p>
				<p><a href=\"feedback.html\">Send another</a></p>
				<p>From: $name <$email_from></p>
				<p>Subject: $email_subject</p>
				<p>Body: $messagewrap</p>";
	}
	
	?>
	</body>
	</html>