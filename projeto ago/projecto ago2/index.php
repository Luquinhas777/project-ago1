<?php

function canTowersAttack($row1, $col1, $row2, $col2) {
    // Checar se estão na mesma linha ou na mesma coluna.
    if ($row1 == $row2 || $col1 == $col2) {
        return true;
    } else {
        return false;
    }
}

// Example usage:
$tower1 = array("row" => 1, "col" => 2);  // Torre 1 está na linha 1, coluna 2
$tower2 = array("row" => 3, "col" => 2);  // Torre 2 está na linha 3, coluna 2

$result = canTowersAttack($tower1["row"], $tower1["col"], $tower2["row"], $tower2["col"]);
echo $result ? "True" : "False";  // O resultado seria true pois elas podem se atacar.

?>