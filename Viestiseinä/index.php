<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Viestiseinä</title>

    <style>
        * {
        box-sizing: border-box;
        font-family: sans-serif;
    }
    .h1{
        text-align:center;
    }
    .my-form {
        width: 500px;
        padding: 20px;
        margin: 50px auto;
        border: 3px solid rgb(0, 0, 0);
        background-color: rgb(25, 207, 231);
        }
    .form-group {
        margin: 15px;
    }
    .form-group label {
        font-weight:100;
        
    }
    .form-group input, .form-group button {
        width: 100%;
        font-size: 1.2em;
        padding: 5px;
    }
    .error {
        color: red;
    }
    
    
    
    </style>

</head>
<body>
    <form class="my-form">
        
        <h1>Viestiseinä</h1>

        <div class="form-group">
            <label for="nimi">Aihe:</label>
            <input type="text" id="aihe">
            <span id="id_error" class="error"></span>
        </div>
        
        <div class="form-group">
            <label for="viesti">Viesti:</label>
            <input type="text" id="viesti">
            <span id="id_error" class="error"></span>
        </div>

        <div class="form-group">
            <label for="lähettäjä">Lähettäjä:</label>
            <input type="text" id="lähettäjä">
            <span id="id_error" class="error"></span>
        </div>

        <div class="form-group">
            <label for="pvm">Päivämäärä:</label>
            <input type="text" id="pvm">
            <span id="id_error" class="error"></span>
        </div>   
        
        <div class="form-group">
            <button>Lähetä</button>
        </div>

    </form>

</body>
</html>