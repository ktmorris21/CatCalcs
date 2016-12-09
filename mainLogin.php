<?php
session_start();
?>

<!DOCTYPE html>

<html>
    <link rel="stylesheet" href="w3.css">
     <script src="jquery-3.1.0.min.js"></script>
     
<body class="w3-black" style="background: url(engine.png);">
       
        <div class="w3-center">
            <div class="w3-padding-large">
                <div><img src="logowhitecat.png" style="width: 15%"></div>
                <h2 class="w3-text-white"><b>Welcome to CatCalcs</b></h2>
                <h4 class="w3-text-white">Developing the world's premier set of fundamental technical tools for engineers.</h4>
                <br><br>
                <div class=w3-row>
                    <div class="w3-third"><br></div>
                    <div class="w3-third">
                        <div class="w3-container w3-black w3-border-blue w3-leftbar w3-topbar w3-rightbar w3-bottombar">
                            <?php
                                if (isset($_SESSION["auth"]))
                                    {
                                        if ($_SESSION["auth"] === "fail")
                                            {
                                                echo '<p class="w3-text-red">Authentication Failed. Please try again or contact the administrator.</p>';
                                            }
                                    }
                            ?>
                            <br>
                            <label class="w3-text-blue"><b>Email Address</b></label><br>
                            <input id="inputUserName" class="w3-input" type="text" size="30" maxlength="30"><br>
                            <label class="w3-text-blue"><b>Password</b></label><br>
                            <input id="inputPassword" class="w3-input" type="password" size="30" maxlength="30"><br>
                            <a id="buttonLogin" class="w3-btn w3-blue">Login</a>
                            <br><br>
                        </div>
                        <br>
                        <!-- Uncomment bottom line of code once we want new users to be allowed to register -->
                        <!-- <a href="UIcreateUser.php">New User? Click here to register.</a> -->
                    </div>
                </div>
            </div>
        </div>

</body>
  
<script>

$(document).ready(function(){
        
    $("#inputUserName").focus();
    
    $("#buttonLogin").click(function(){
        authenticate();
    });
    
    $("#inputUserName").on('keypress', function (e) {
        if(e.which ==13){
            $("#inputPassword").focus();
        }
    });
    
    $("#inputPassword").on('keypress', function (e) {
        if(e.which ==13){
            authenticate();
        }
    });
    
});

function authenticate() {
    
    $login = $("#inputUserName").val();
    $password = $("#inputPassword").val();
    $.post("SQLauthenticateUser.php", {
        login: $login,
        password: $password},
        function(data){
            window.location.href="main.php";
        });
    
}

</script>
  
</html>
