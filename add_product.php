<?php

include "./connect.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .form_container{
            margin: 20px;
        }
        .addBtn{
            background-color: #e91e63;
            color: white;
            font-size: 16px;
            font-weight: bold;
            width: 30%;
            outline: none;
            border: none;
        }
        input{
            width: 60%;
        }
        TextArea {
            width: 60%;
            height: 100px
        }
    </style>
 
</head>
<body>

<?php

echo ' <div class= "form_container">
    <form action=" '.addProduct($conn).' " method="post" enctype = "multipart/form-data"> 
        <div class="form-group">
            <label for="image">Upload image</label><br>
            <input type="file" name="image">
        </div>

        <div class="form-group">
            <label for="title">Title</label><br>
            <input type="text" name="title">
        </div>

        <div class="form-group">
            <label for="details">TextArea</label><br>
            <textarea name="details" id="details"></textarea>
            <!-- <input type="text" name="details"> -->
        </div>

        <div class="form-group">
            <label for="price">Price</label><br>
            <input type="text" name="price">
        </div>
        <div class="form-group">

            <input type="submit" name="submit" class = "addBtn" value = AddProduct>
        </div>
    </form>
</div>
';
?>
    
</body>
</html>