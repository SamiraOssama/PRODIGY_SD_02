<?php
if (!isset($_SESSION['random_number'])) {
    $_SESSION['random_number'] = rand(1, 100);
    $_SESSION['attempts'] = 0;
}

if (isset($_POST['guess'])) {
    $guess = intval($_POST['guess']);
    $_SESSION['attempts']++;

    if ($guess === $_SESSION['random_number']) {
        $message = "Congratulations! You guessed the number in " . $_SESSION['attempts'] . " attempts.";
        unset($_SESSION['random_number']);
        unset($_SESSION['attempts']);
    } elseif ($guess < $_SESSION['random_number']) {
        $message = "Too low! Try again.";
    } else {
        $message = "Too high! Try again.";
    }
} else {
    $message = "Guess a number between 1 and 100.";
}
?>
