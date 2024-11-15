<?php
include "./connect.php";
include './includes/header.php';

?>




    <!-- hero container -->

    <section class="hero">
        <div class="hero-text">
            <h5>Season Sales</h5>
            <h1>MEN'S FASHION</h1>
        <p>Min. 35% - 70% Off</p>
        <a href="#products" class="btn btn--1">Shop Now</a>
        <a href="#products" class="btn btn--2">Read More</a>
        </div>
        <div class="hero-image">
            <img src="./images/hero-img.png" alt="">
        </div>
    </section>
    <!-- services sub-section -->
     <div class="services-container">
            <div class="service1">
                <div class="icon"><i class="fa-solid fa-truck"></i></div>
               <div class="text"> <h3>free shipping</h3>
                <p>on all drivers drive $99</p></div>
            </div>
            <div class="service1">
               <div class="icon"> <i class="fa-regular fa-handshake"></i></div>
                <div class="text"><h3>Secure payments</h3>
                    <p>we ensure secure payments</p></div>
            </div>
            <div class="service1">
                <div class="icon"><i class="fa-solid fa-hand-holding-dollar"></i></div>
                <div class="text"><h3>100% money back</h3>
                    <p>10 days return policy</p></div>
            </div>
            <div class="service1">
                <div class="icon"><i class="fa-solid fa-message"></i></div>
                <div class="text"><h3>online support</h3>
                    <p>24/7 dedicated support</p></div>
            </div>
        </div>
        <!-- women fashion -->
<div class="fashion-container">
    <div class="image-container">
        <h4>New Arrivals</h4>
        <h2>Women's Fashion</h2>
        <h3>Up to 70% Off</h3>
        <a href="#products" class="btn btn--2">Read More</a>
    </div>
    <div class="content">
        <div class="top-content">
            <div class="top1">
                <h5>25% Off</h5>
                <h3>Handbag</h3>
                <a href="#products" class="btn btn--1">Shop Now</a>
            </div>
            <div class="top2">
                <h5>25% Off</h5>
                <h3>Watch</h3>
                <a href="#products" class="btn btn--1">Shop Now</a>
            </div>
        </div>
        <div class="bottom-content">
            <h5>Accessories</h5>
            <h3>Handbag</h3>
            <p>Min. 40% - 80% Off</p>
                <a href="#products" class="btn btn--1">Shop Now</a>
            </div>
        </div>
    </div>
</div>
    <!-- products -->

    <section class="products" id="products">
        <h3>Featured Products</h3>
        <nav>
            <ul>
                <li><a href="#">New Arrivals</a></li>
                <li><a href="#">Best Selling</a></li>
                <li><a href="">Top Trending</a></li>
                <li><a href="#">Top Rated</a></li>
            </ul>
        </nav>

   <?php

//  Accessing the products from the database 
$products = getProduct($conn);
// call the array 
 $all_products = $products['details'];

 //    <img src='.$details['image'].'/>
echo '<div class="product-grid">';
   if (count ($all_products) > 0){
       foreach ($all_products as $details) {
           echo '  <div class="product">
            <img src="'.$details['image'].' " alt="trfgtrgyrf">     

       <h4> '.$details['title'].'</h4>
       <p> '.$details['details'].'</p>
       <p> '.$details['price'].'</p>
   </div>   ';
       }
   }
//    printing array structure
//    echo '<pre>';
// print_r($products);
// echo '</pre>';

   ?>
   
                
        </div>
    </section>
    <!-- testimonials -->
    <section class="testimonials-container">
        <h2>What Our Clients Say</h2>
        
        <div class="testimonial-content">


        <div class="testimonial">
            <img src="./images/hero1.png" alt="Emily Johnson" class="client-image">
            <p>"They exceeded our expectations. The quality of their work is unmatched!"</p>
            <cite>- Emily Johnson, Founder of Company C</cite>
        </div>
        <div class="testimonial">
            <img src="./images/hero1.png" alt="Emily Johnson" class="client-image">
            <p>"They exceeded our expectations. The quality of their work is unmatched!"</p>
            <cite>- Emily Johnson, Founder of Company C</cite>
        </div>
        </div>
    </section>

    <!-- footer -->

    <php
include '../includes/footer.php';
    ?>