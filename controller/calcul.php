<?php
//variable générique
$pt = 0;
$rank_point = 0;

//value golden gun
$golden_gun = 3000;

//value des points en fonction de win et draw
$win_point = 25;
$draw_point = 5;

//value des point en fonction du rank
$bronze_point = 300;
$silver_point = 450;
$gold_point = 600;
$platinum_point = 800;
$diamond_point = 1000;
$master_point = 1200;
$grand_master_point = 1500;

@$value_point = htmlspecialchars($_POST['gold-point']);
@$radio = $_POST['rank'];

if($value_point == null){
	$value_point = 0;
}

if($radio == 'unselect'){
	$rank_point = 0;
}

if($radio == 'bronze'){
	$rank_point = $bronze_point;
}

if($radio == 'silver'){
	$rank_point =  $silver_point;
}

if($radio == 'gold'){
	$rank_point =  $gold_point;
}

if($radio == 'platinum'){
	$rank_point =  $platinum_point;
}

if($radio == 'diamond'){
	$rank_point =  $diamond_point;
}

if($radio == 'master'){
	$rank_point =  $master_point;
}

if($radio == 'grand-master'){
	$rank_point =  $grand_master_point;
}

for($win = 0; $pt <= 3000; $win++){
	$pt = $value_point + $rank_point + ($win * $win_point);
}

$result = ['win'=>$win,];
echo json_encode($result);
