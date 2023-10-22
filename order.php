<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="order.css">
	<title>Order Form</title>
</head>
<body>
	<?php
	if (isset($_POST['name'])){
		require "process.php";
		if ($result =="") { echo "<div>ORDER RECIEVE!</div>";
			// code...
		}
		else {echo "<div>$result</div>";}
	}
	?>
	<div class="container">
	<form method="post" target="_self">
		<input type="text" name="name" placeholder="Name" required />
		<input type="text" name="address" placeholder="Address" required />
		<input type="text" name="landmark" placeholder="Landmark" required />
		<input type="number" name="qty" placeholder="Quantity" required />
		<input type="submit" value="Order">
		
	</form>
</div>
</body>
</html>