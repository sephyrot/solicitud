<?php

if(isset($_POST)) {
    
    error_log("ENTRA POST");
    
    if(isset($_FILES['files'])){
        foreach ($_FILES['files']['name'] as $i => $nombre) {
            if($_FILES['files']['error'][$i] == 0 && move_uploaded_file($_FILES['files']['tmp_name'][$i], "files/".$_FILES['files']['name'][$i])){
                echo '{"status":"success"}';
                exit;
            }
        }        
    }
    
    exit();
}
?>