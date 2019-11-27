<?php
    //Message Vars
    $msg = "";
    $msgClass = "";

    //Check for submit
    if(filter_has_var(INPUT_POST, "submit")){
        //Get Form Data
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        //Check Required Fields
        if(!empty($email) && !empty($name) && !empty($message)){
            //Passsed

        } else {
            //failed
        }
    }


?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/cosmo/bootstrap.min.css" rel="stylesheet" integrity="sha384-uhut8PejFZO8994oEgm/ZfAv0mW1/b83nczZzSwElbeILxwkN491YQXsCFTE6+nx" crossorigin="anonymous">
</head>
<body>
    <nav class="navbar navbar-default">
        <div class="container">
            <div  class="navbar-header">
                <a class="navbar-brand" href="index.php">My Website</a>
            </div>
        </div>
    </nav>
    <div class="container">
        <form method="post" action="<?php echo $_SERVER["PHP_SELF"]; ?>">
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control"
                    value="">
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type="text" name="email" class="form-control"
                    value="">
            <div class="form-group">
                <label>Message</label>
                <textarea name="message" class="form-control"></textarea>
            </div>
            <br>
            <button type="submit" name="submit" class="btn btn-primary">
            Submit</button>
        </form>
    </div>                                       
</body>
</html>