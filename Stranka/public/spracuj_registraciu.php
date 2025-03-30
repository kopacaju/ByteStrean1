<?php
include 'databaz.php'; // Súbor na pripojenie k databáze

$meno = $_POST['meno'];
$email = $_POST['email'];
$heslo = $_POST['heslo'];
$hashedHeslo = password_hash($heslo, PASSWORD_BCRYPT); // Hashovanie hesla

try {
    // Overenie, či email už existuje
    $sql = "SELECT Email FROM Pouzivatelia WHERE Email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $email);
    $stmt->execute();
    
    if ($stmt->rowCount() > 0) {
        echo "Tento email je už registrovaný.";
    } else {
        // Vloženie nového používateľa
        $sql = "INSERT INTO Pouzivatelia (Meno, Email, Heslo) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(1, $meno);
        $stmt->bindParam(2, $email);
        $stmt->bindParam(3, $hashedHeslo);
        $stmt->execute();

        // Presmerovanie na index.html
        header("Location: index.html");
        exit(); // Uisti sa, že sa skript zastaví
    }
} catch (PDOException $e) {
    echo "Chyba: " . $e->getMessage();
}
?>
