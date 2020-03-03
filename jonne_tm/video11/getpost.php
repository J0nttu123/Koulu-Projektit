<?php
    if(isset($_POST["name"])){

        $name = htmlentities($_POST["name"]);
        // echo $name;
    }

    // if(isset($_REQUEST["name"])){
    //     $name = htmlentities($_REQUEST["name"]);
    //     echo $name;
    // }

    // if(isset($_REQUEST["email"])){
    //     $name = htmlentities($_REQUEST["email"]);
    //     echo $name;
    // }
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form method="post" action="getpost.php">
        <div>
            <label>Name</label><br>
            <input type="text" name="name">
        </div>
        <div>
            <label>Email</label><br>
            <input type="text" name="email">
        </div>
        <input type="submit" value="submit">
    </form>
    <!-- <ul>
        <li>
            <a href="getpost.php?name=Brad">Brad</a>
        </li>
        <li>
            <a href="getpost.php?name=Steve">Steve</a>
        </li>
    </ul>
    <h1><?php echo "{$name}'s Profile"; ?></h1> -->
</body>
</html>