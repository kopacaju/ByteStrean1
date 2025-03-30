<?php
include 'databaz.php'; // Súbor na pripojenie k databáze

$email = $_POST['email'];
$heslo = $_POST['heslo'];

try {
    // Overenie používateľa
    $sql = "SELECT Heslo FROM Pouzivatelia WHERE Email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(1, $email);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($heslo, $user['Heslo'])) {
        // Prihlásenie úspešné, presmerovanie na index.html
        header("Location: index.html");
        exit(); // Uisti sa, že sa skript zastaví
    } else {
        echo "Nesprávny email alebo heslo.";
    }
} catch (PDOException $e) {
    echo "Chyba: " . $e->getMessage();
}
?>
