<?php

	session_start();
		
	$servername = "localhost";
        $username = "catcalcs_ktmorri";
        $password = "Billionaires2020%";
        
        $user= $_POST["login"];
        $userpwd = $_POST["password"];

	try
        {
            $conn = new PDO("mysql:host=$servername; dbname=catcalcs_main", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);                
            $sql = "SELECT * from users"; 
            $stmt = $conn->prepare("SELECT hash from users where email='$user'");
            $stmt->execute();
            $value = $stmt->fetchColumn();
            if (password_verify($userpwd, $value))
            {
                //echo 'password verified';
                $stmt = $conn->prepare("SELECT access from users where email='$user'");
                $stmt->execute();
                $value = $stmt->fetchColumn();
                $_SESSION["userID"]=$user;
                $_SESSION["auth"]=$value;
		$stmt = $conn->prepare("SELECT preferredName from users where email='$user'");
                $stmt->execute();
                $value = $stmt->fetchColumn();
		$_SESSION["firstName"]=$value;
            }
            else	
            {
                $_SESSION["auth"]="fail";
                //echo 'fail access';
            }
            
            
        }
        
        catch(PDOException $e)
        {
            echo $sql . "<br>" . $e->getMessage();    
        }    
        
        // Close connection
        $conn = null;
        
?>