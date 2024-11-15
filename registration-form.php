
<?php
include "./connect.php";
// include './includes/header.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <?php
    echo ' <div class="form-container">
        <h2>Register</h2>
        <form action=" '.register($conn).' " method="POST">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required placeholder="Enter your name ...">

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required placeholder="Enter your email ...">

            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required placeholder="Enter password">

            <label for="confirm-password">Confirm Password:</label>
            <input type="password" id="confirm-password" name="confirm-password" required placeholder="Confirm password">

            <button type="submit" name = "register" value ="Register">Register</button>

            <p class="links">Already have an account? <a href="./login-form.php">Login</a></p>
        </form>
    </div>

    ';
    ?>
</body>
</html>