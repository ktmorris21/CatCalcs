<?php
	session_start();

		$servername = "localhost";
        $username = "catcalcs_ktmorri";
        $password = "Billionaires2020%";
            
        try
        {
            $conn = new PDO("mysql:host=$servername; dbname=catcalcs_main", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			// This needs to be changed to create table if does not exist.
			$stmt = $conn->prepare("DROP TABLE IF EXISTS users");
            $stmt->execute();
            $stmt = $conn->prepare("CREATE TABLE users (
                email VARCHAR (50) PRIMARY KEY,
                hash VARCHAR (255) NOT NULL,
				preferredName VARCHAR (50) NOT NULL,
				lastName VARCHAR (50) NOT NULL,
                access VARCHAR (10) NOT NULL
                )");
            $stmt->execute();
		}
        
        catch(PDOException $e)
        {
                echo $e->getMessage();
                exit();
        }    
        
        // Close connection
        $conn = null;
?>