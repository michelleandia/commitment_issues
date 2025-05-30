<?php

$borrowers = [
  ["name" => "Alice" , "credit_score" => 750, "income" => 70000],
  ["name" => "Bob" , "credit_score" => 620, "income" => 50000],
  ["name" => "Charlie", "credit_score" => 680, "income" => 30000] 
];

$minimum_credit_score = 700;
$minimum_income = 40000;

foreach ($borrowers as $borrower){
  echo "Evaluating " . $borrower["name"] . ".../n";

  if ($borrower["credit_score"] >=
      $minimum_credit_score && $borrower["income"] >= $minimum_income){
        echo $borrower["name"] . " qualifies for the loan./n";
  } else {
        echo $borrower["name"] . " does not qualify for the loan./n";
  }
}
?>