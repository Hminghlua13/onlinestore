<?php
$result = "";

$dbHost = "localhost";
$dbName = "order";
$dbChar = "utf8mb4";
$dbUser = "root";
$dbPass = "Hminga@123";

try {
    $pdo = new PDO(
        "mysql:host=$dbHost;dbname=$dbName;charset=$dbChar",
        $dbUser,
        $dbPass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
} catch (Exception $ex) {
    $result = $ex->getMessage();
}

if ($result == "") {
    try {
        $stmt = $pdo->prepare("INSERT INTO `orders` (`name`, `address`, `landmark`, `qty`) VALUES (?, ?, ?, ?)");
        $stmt->execute([
            $_POST['name'],
            $_POST['address'],
            $_POST['landmark'],
            $_POST['qty']
        ]);
    } catch (Exception $ex) {
        $result = $ex->getMessage();
    }
}

if ($result == "") {
    $to = "janethauhar@gmail.com";
    $subject = "ORDER RECEIVED";
    $message = "";
    foreach ($_POST as $key => $value) {
        $message .= "$key - $value\r\n";
    }
    if (!@mail($to, $subject, $message)) {
        $result = "Failed to send message";
    }
}
?>
