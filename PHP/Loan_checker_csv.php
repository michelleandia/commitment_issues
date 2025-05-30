<?php

$csvFile = fopen("/Users/michelleandia/Desktop/Code/PHP/borrowers_mock.csv", "r");

// Read headers
$headers = fgetcsv($csvFile, 1000, ",", '"', "\\");


$borrowers = [];

while (($row = fgetcsv($csvFile, 1000, ",", '"', "\\")) !== false) {
    $borrowers[] = array_combine($headers, $row);
}

fclose($csvFile);

$minimum_credit_score = 700;
$minimum_income = 40000;

function qualifiesForLoan($credit_score, $income) {
    global $minimum_credit_score, $minimum_income;
    return $credit_score >= $minimum_credit_score && $income >= $minimum_income;
}
$qualified = [];

foreach ($borrowers as $borrower) {
    if (qualifiesForLoan($borrower["credit_score"], $borrower["income"])) {
        $qualified[] = $borrower;
    }
}
$outputFile = fopen("qualified_borrowers.csv", "w");

// Write the headers
fputcsv($outputFile, $headers, ",", '"', "\\");

// Write each qualified borrower
foreach ($qualified as $person) {
      fputcsv($outputFile, $person, ",", '"', "\\");
}

fclose($outputFile);

echo "Done! Qualified borrowers saved to qualified_borrowers.csv\n";
