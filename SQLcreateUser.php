<?php       
     
        session_start();       
        
        $userEmail = $_POST["email"];
        $userPrefName = $_POST["firstName"];
        $userLastName = $_POST["lastName"];
        $defaultPassword = password_hash("default", PASSWORD_DEFAULT);
        $defaultAccess = 'trial';
        //$timeRightNow = 1;//how to get datetime?
        
        $servername = "localhost";
        $username = "catcalcs_ktmorri";
        $password = "Billionaires2020%";       
     
        try
        {
            $conn = new PDO("mysql:host=$servername; dbname=catcalcs_main", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $stmt = $conn->prepare("INSERT INTO users (email, preferredName, lastName, hash, access)
                                   VALUES (:emailAddress, :firstName, :userLastName, :passwordHash, :accessLevel)");
            $stmt->bindParam(':emailAddress', $userEmail, PDO::PARAM_STR);
            $stmt->bindParam(':firstName', $userPrefName, PDO::PARAM_STR);
            $stmt->bindParam(':userLastName', $userLastName, PDO::PARAM_STR);
            $stmt->bindParam(':passwordHash', $defaultPassword, PDO::PARAM_STR);
            $stmt->bindParam(':accessLevel', $defaultAccess, PDO::PARAM_STR);
            //$stmt->bindParam(':createTime', $timeRightNow, PDO::PARAM_STR);
            //$stmt->bindParam(':loginTime', $timeRightNow, PDO::PARAM_STR);
            $stmt->execute();
                                  
            echo 'User Account Created';
        }
        
        catch(PDOException $e)
        {
                echo "error";
                echo $e->getMessage();    
        }    
        
        // Close connection
        $conn = null;     
        
?>