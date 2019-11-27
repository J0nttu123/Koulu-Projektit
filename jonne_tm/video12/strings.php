<?php
    // $output = substr("Hello", 1, 3);
    // $output = substr("Hello", 0);
    // echo $output;

    // $output = strrpos("Hello World", "o");
    // echo $output;

    // $text = "Hello World";
    // // var_dump($text);

    // $trimmed = trim($text);
    // var_dump($trimmed);

    // $output = strtoupper("Hello World");
    // echo $output;

    // $val = "22";
    // $output = is_string($val);

    // echo $output;

    $values = array(true, false, null, "abc", 33, "33",
     22.4, "22.4", "", " ", 0, "0");

    foreach($values as $value){
        if(is_string($value)){
            echo "{$value} is a string<br>";
        }
    }

?>