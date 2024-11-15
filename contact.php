<?php
include "./connect.php";
include './includes/header.php';

?>

    <!-- contact page -->

    <div class="contact-container">
        <div class="contact-info">
            <h2>Contact Information</h2>
            <p>Feel free to reach out to us through any of the channels below:</p>
            <ul>
                <li><strong>Email:</strong> stylehaven@gmail.com</li>
                <li><strong>Phone:</strong> +254 798 654 321</li>
                <li><strong>Address:</strong> 20116 Tech Street, Nakuru City</li>
            </ul>
            <div class="social-media">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">LinkedIn</a>
            </div>
        </div>

        <div class="contact-form">
            <h2>Send Us a Message</h2>
            <form action="#" method="post">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required>

                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Subject" required>

                <label for="message">Message</label>
                <textarea id="message" name="message" rows="6" placeholder="Write your message here..." required></textarea>

                <button type="submit">Send Message</button>
            </form>
        </div>
    </div>
    
</body>
</html>