<?php
// Pripojenie k SQLite databáze (vytvorí súbor databaza.sqlite, ak ešte neexistuje)
try {
    $conn = new PDO("sqlite:databaza.sqlite");
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL na vytvorenie tabuľky Pouzivatelia
    $sql = "CREATE TABLE IF NOT EXISTS Pouzivatelia (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Meno TEXT NOT NULL,
        Email TEXT NOT NULL UNIQUE,
        Heslo TEXT NOT NULL,
        DatumRegistracie TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )";

    // Vytvorenie tabuľky
    $conn->exec($sql);
    echo "Databáza a tabuľka boli úspešne vytvorené!";
} catch (PDOException $e) {
    echo "Chyba pri vytváraní databázy: " . $e->getMessage();
}
?>
