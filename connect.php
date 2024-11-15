<?php

$conn = mysqli_connect('localhost','root','','myshop');

// check if connection is successful

// if(!$conn){
//     die ("connection failed" . mysqli_connect_error($conn));
// }else{
//     echo "connection successful";
// }

// function to insert image to the database

function addProduct($conn) {

    if(isset($_POST['submit'])){
        // $image = $_FILES['image']['name'];
        // $directory = "./images/" .$image;
        // move_uploaded_file($image, $directory);
        $title = $_POST['title'];
        $details = $_POST['details'];
        $price = $_POST['price'];

        $image = $_FILES['image']['name'];
        $img_tmp = $_FILES['image']['tmp_name'];

        $rename = uniqid() . $image;
        $directory = "./products/" . $rename;
        move_uploaded_file($img_tmp, $directory);  
        
        $sql = "INSERT INTO products (image, title, details, price)
                 VALUES ('$rename','$title','$details','$price')";

        $result = mysqli_query($conn, $sql);
        if ($result){
            // echo "Inserted successfully";
            header("location : index.php");
            exit();
        }
    }
}

// Function to fetch information from the database

function getProduct($conn){

    $sql = "SELECT * FROM products ORDER BY id";
    $result = mysqli_query($conn, $sql);

    if(mysqli_num_rows($result) > 0) {
        // initialize  an associative array
        $products = [];
    // iterate through the array
        while ($row = mysqli_fetch_assoc($result)) {
     // create an associative array
            $products[] = [
                'id' => $row['id'],
                'image' => $row['image'],
                'title' => $row['title'],
                'details' => $row['details'],
                'price' => $row['price'],

            ];
        }
        // return the array with the products
        return [
            'details' => $products,

        ];
    }
}

// user registration

function register($conn){

    if(isset($_POST['register'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $password = md5($_POST['password']);

        $sql = "INSERT INTO users ( name, email, password) VALUES ('$name','$email','$password') ";
        $result = mysqli_query($conn, $sql);
        if($result){
              echo "Registered successfully";
            header("Location: login-form.php");
            
        }
    }
}