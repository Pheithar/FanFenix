<?php
$myfile = fopen("testfile.txt", "w")
$txt = "John Doe\n";
fwrite($myfile, $txt);
$txt = "Jane Doe\n";
fwrite($myfile, $txt);
fclose($myfile);
?>
Usar view.js
