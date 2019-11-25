<?php

    function simpleFunction(){
        echo "Hello World";
    }

    // simpleFunction();

    function sayHello($name = "World"){
        echo "Hello $name<br>";
    }

    // sayHello("Joe");
    // sayHello("Bob");
    // sayHello("Tim");

    function addNumbers($num1, $num2){
        echo $num1 + $num2; 
    }

    // addNumbers(3,3);

    $myNum = 10;

    function addFive($num){
        $num += 10;
    }

    function addTen(&$num){
        $num += 10;
    }

    addFive($myNum);

    echo "Value: $myNum<br>";

    addTen($myNum);

    echo "Value: $myNum<br>";


?>