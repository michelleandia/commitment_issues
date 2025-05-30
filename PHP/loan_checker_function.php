<?php

$borrowers = [
    ["name" => "Alice", "credit_score" => 750, "income" => 70000],
    ["name" => "Bob", "credit_score" => 620, "income" => 50000],
    ["name" => "Charlie", "credit_score" => 680, "income" => 30000]
];

$minimum_credit_score = 700;
$minimum_income = 40000;

// Define the function 
function qualifiesForLoan($credit_score, $income) {
    global $minimum_credit_score, $minimum_income;
    return $credit_score >=$minimum_credit_score && $income
    >= $minimum_credit_score && $income >= $minimum_income;

}
foreach ($borrowers as $borrower) {
    echo "Evaluating " . $borrower["name"] . ".../n";

    if (qualifiesForLoan ($borrower["credit_score"], $borrower["income"])) {
        echo $borrower["name"] . "qaulifies for the loan./n";
    } else { 
      echo $borrower["name"] . " does not qualify for the loan./n";
    }
}