<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Lomake</title>
</head>

<body>
        <form action="#" method="post" onsubmit="return validation();">

                <div class="otsikko">
                        <h1>Rekisteröitymislomake</h1>
                    </div>
                    
                    <div class="input">
                        käyttäjä ID:<br>
                        <input type="text" name="id" id="id"><br>
                        <ul></ul>
                        salasana:<br>
                        <input type="password" name="psw" id="psw"><br>
                        <ul></ul>
                        Nimi:<br>
                        <input type="text" name="nimi" id="nimi">
                        <ul></ul>
                        Osoite:<br>
                        <input type="text" name="osoite">
                        <ul></ul>
                        maa:<br>
                        <input type="checkbox" name="suomi" value="suomi"> suomi<br>
                        <input type="checkbox" name="muu" value="muu"> muu<br>
                
                    </div>
                    <div class="valinta">
                            <ul></ul>
                            sukupuoli:<br>
                            <input type="checkbox" name="mies" value="mies"> mies<br>
                            <input type="checkbox" name="nainen" value="nainen"> nainen<br>
                            <ul></ul>
                            kieli:<br>
                            <input type="checkbox" name="kieli" value="suomi"> suomi<br>
                            <input type="checkbox" name="kieli" value="muu"> muu<br>
                    </div>
                
                    <div>
                        lisätietoa<br>
                        <input type="text" name="lisätietoa" value=""><br>
                        <ul></ul>
                        <input type="submit" value="lähetä">
                    </div>

                </form>
                <div id="eresult" style="color:red;"></div>
                <script type="text/javascript">
                function validation(){
                    var id = document.getElementById('id').value;
                    var psw = document.getElementById('psw').value;
                    var nimi = document.getElementById('nimi').value;
                    if(name=='' || password =='' || email=='') 
                    {
                        document.getElementById("eresult").innerHTML = "all fields required";
                        return false;
                    }
                    else if(id.length<2){
                        document.getElementById("eresult").innerHTML = "name must be atleast 2 characters";
                        return false;
                    }
                    else if(psw.length<4){
                        document.getElementById("eresult").innerHTML = "password must be atleast 4 characters";
                        return false;
                    }
                    else {
                        return true;
                    }
                }
                </script>
</body>
</html>
