<?php

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

	require('config/config.php');
	require('config/db.php');


	// Test if fields are empty
	$aiheErr = $lähettäjäErr = $viestiErr = "";
	$aihe = $lähettäjä = $viesti = "";

	// Check For Submit
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		
		// Onko aihe-kenttä tyhjä
		if (empty($_POST["aihe"])) {
			$aiheErr = "Aihe on pakollinen";
		} else {
			$aihe = test_input($_POST["aihe"]);
		}

		if (empty($_POST["lähettäjä"])) {
			$lähettäjäErr = "Lähettäjä on pakollinen";
		} else {
			$lähettäjä = test_input($_POST["lähettäjä"]);
		}

		if (empty($_POST["viesti"])) {
			$viestiErr = "Viesti on pakollinen";
		} else {
			$viesti = test_input($_POST["viesti"]);
		}


	
		if (strlen($aihe) > 0 && strlen($lähettäjä) > 0 && strlen($viesti) > 0)	{

			// Get form data
			$aihe = mysqli_real_escape_string($conn, $aihe);
			$viesti = mysqli_real_escape_string($conn, $_POST['viesti']);
			$lähettäjä = mysqli_real_escape_string($conn, $_POST['lähettäjä']);
			$query = "INSERT INTO viestit(aihe, lähettäjä, viesti) VALUES('$aihe', '$lähettäjä', '$viesti')";
			if(mysqli_query($conn, $query)){
				header('Location: '.ROOT_URL.'');
			} else {
				echo 'ERROR: '. mysqli_error($conn);
			}

		}

		
	}
?>

<?php include('inc/header.php'); ?>
	<div class="container">
		<h1>Lisää viesti</h1>
		<form method="POST" action="<?php $_SERVER['PHP_SELF']; ?>">
			<div class="form-group">
				<label>Aihe</label>
				<input type="text" name="aihe" class="form-control">
				<span class="error"> <?php echo $aiheErr;?></span>
			</div>
			<div class="form-group">
				<label>Lähettäjä</label>
				<input type="text" name="lähettäjä" class="form-control">
				<span class="error"> <?php echo $lähettäjäErr;?></span>
			</div>
			<div class="form-group">
				<label>Viesti</label>
				<textarea name="viesti" class="form-control"></textarea>
				<span class="error"> <?php echo $viestiErr;?></span>
			</div>
			<input type="submit" name="submit" value="Lähetä" class="btn btn-primary">
		</form>
	</div>
<?php include('inc/footer.php'); ?>