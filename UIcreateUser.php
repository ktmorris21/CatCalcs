<!DOCTYPE html>
<html>
<title>CatCalcs</title>
<meta name="CatCalcs" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="w3.css">
<script src="jquery-3.1.0.min.js"></script>

<style>
            .module {display:none;}
            .unselectable {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none; 
                -ms-user-select: none;
                -user-select: none;}
</style>

<body class="w3-black" style="background: url(engine.png);">
	<div class="w3-center">
		 <div><img src="logowhitecat.png" style="width: 15%"></div>
                <h2 class="w3-text-white"><b>Welcome to CatCalcs</b></h2>
                <br>
        <p class="w3-text-blue"><b>Register for free to get started now with the world's best generalized engineering calculation platform.</b></p><br><br>     
        <label>Email Address: &nbsp &nbsp</label>
        <input type="text" size="40" id="inputEmail"><br><br> 
        <label>First (Preferred) Name: &nbsp &nbsp</label>
        <input type="text" size="40" id="inputFirstName"><br><br>
        <label>Last Name: &nbsp &nbsp</label>
        <input type="text" size="40" id="inputLastName"><br><br>
        <button class="w3-btn w3-blue" id="createUserButton">Register</button>
    </div> 
    <br><br>
						
<script>

$(document).ready(function(){  

    $("#createUserButton").click(function() {
  
        alert("trying...");
        emailAddress = $("#inputEmail").val();
        userFirstName = $("#inputFirstName").val();
        userLastName = $("#inputLastName").val();
   
        $.post("SQLcreateUser.php", {email : emailAddress, firstName: userFirstName, lastName: userLastName}, function(data){
            alert(data);
        });
        
        alert("past post");
    
    });
    
});
    
</script>

</body>
</html>