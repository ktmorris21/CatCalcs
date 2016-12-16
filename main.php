<?php
            session_start();
            if ($_SESSION["auth"] == "trial" || $_SESSION["auth"] == "full") {
                        
            }
            else {
                        header("Location: mainLogin.php");
                        exit();
            }
?>

<!DOCTYPE html>
<html>
<title>CatCalcs</title>
<meta name="CatCalcs" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="w3.css">
<link rel="stylesheet" href="font-awesome-4.6.3/css/font-awesome.min.css">

<style>
            .module {display:none;}
            .unselectable {
                -webkit-touch-callout: none;
                -webkit-user-select: none;
                -khtml-user-select: none;
                -moz-user-select: none; 
                -ms-user-select: none;
                -user-select: none;}
            .alert {
                        padding: 15px;
                        margin-bottom: 20px;
                        border: 1px solid #eed3d7;
                        border-radius: 4px;
                        /* Each alert has its own width */
                        float: right;
                        clear: right;
                        background-color: white;
            }

            .alert-red {
                          color: white;
              background-color: #DA4453;
            }
            .alert-green {
              color: white;
              background-color: #37BC9B;
            }
            .alert-blue {
              color: white;
              background-color: #4A89DC;
            }
            .alert-yellow {
              color: white;
              background-color: #F6BB42;
            }
            .alert-orange {
              color:white;
              background-color: #E9573F;
            }
</style>

<body class="w3-black" style="background: url(waterdark.jpg);"> <!-- style="background: url(engine.png);" -->
<!-- Top container -->
<div class="w3-container w3-top w3-black w3-large w3-padding w3-card-2" style="z-index:4">
  <img class="w3-left" src="logo.png" style="width: 10%; min-width: 110px; max-width: 110px;">
  <span class="w3-right w3-tiny w3-text-blue" style="text-align: right;">CatCalcs Technical Calculation Engine <br> Version 0.0.1
            <br> &copy 2016 Liberation Technical Software LLC. All Rights Reserved.
  </span>
</div>
            
<!-- Sidenav/menu -->
<nav class="w3-sidenav w3-collapse w3-text-white w3-animate-left" style="z-index:3;width:180px; background: rgba(51,153,255,0.7);" id="sideNav"><br>
 
  <div class="w3-container w3-center">
   <?php
            echo "<small>Welcome, " . $_SESSION["firstName"] . "!</small><br>";
   ?>
            
   <a href="#" class="w3-show-inline-block"><i class="fa fa-cog"></i>&nbsp</a>
   <a href="#" class="w3-show-inline-block"><i class="fa fa-envelope-o"></i>&nbsp</a>
   <a href="endSession.php" class="w3-show-inline-block"><i class="fa fa-sign-out"></i>&nbsp</a>
  </div>
  
  <hr>
  
  <small>
  
  <div class="w3-container">
    <h6 id="solutionsLink" class="unselectable" onclick="toggleGroup('solutionsLink');" style="cursor: pointer;">Solution Sets &nbsp +</h6>
  </div>
    <a href="#" class="w3-padding tablink solutionsLink w3-blue" onclick="openModule(event,'quickStartModuleContent');"><i class="fa fa-tachometer fa-fw"></i>&nbsp; Quick Start</a>
    <a href="#" class="w3-padding tablink solutionsLink" onclick="openModule(event,'solutionSetsModule');"><i class="fa fa-users fa-fw"></i>&nbsp; Solution Sets</a>
  
  <div class="w3-container">
    <h6 id="mechanicsLink" class="unselectable" onclick="toggleGroup('mechanicsLink');" style="cursor: pointer;">Mechanics &nbsp +</h6>
  </div>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'ssPointLoadBeamModuleContent');"><i class="fa fa-minus fa-fw"></i>&nbsp; Beams</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'platesModule');"><i class="fa fa-square fa-fw"></i>&nbsp; Plates</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'trussesModule');"><i class="fa fa-arrows-alt fa-fw"></i>&nbsp; Trusses</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'columnsModule');"><i class="fa fa-university fa-fw"></i>&nbsp; Columns</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'bearingsModule');"><i class="fa fa-cogs fa-fw"></i>&nbsp; Bearings</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'staticsModule');"><i class="fa fa-chain fa-fw"></i>&nbsp; Statics</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'dynamicsModule');"><i class="fa fa-fighter-jet fa-fw"></i>&nbsp; Dynamics</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'fatigueModule');"><i class="fa fa-coffee fa-fw"></i>&nbsp; Fatigue</a>
     <a href="#" class="w3-padding tablink mechanicsLink" onclick="openModule(event,'sifModule');"><i class="fa fa-chain-broken fa-fw"></i>&nbsp; SIF Stress/Strain</a>
   
   <div class="w3-container">
    <h6 id="thermoLink" class="unselectable" onclick="toggleGroup('thermoLink');" style="cursor: pointer;">Thermo & Fluids &nbsp +</h6>
  </div>
    <a href="#" class="w3-padding tablink thermoLink" onclick="openModule(event,'fluidFlowModule');"><i class="fa fa-arrow-circle-right fa-fw"></i>&nbsp; Fluid Flow</a>
    <a href="#" class="w3-padding tablink thermoLink" onclick="openModule(event,'thermoCyclesModule');"><i class="fa fa-line-chart fa-fw"></i>&nbsp; Thermo Cycles</a>
    <a href="#" class="w3-padding tablink thermoLink" onclick="openModule(event,'chemistryModule');"><i class="fa fa-flask fa-fw"></i>&nbsp; Chemical Rxns</a>
  
  <div class="w3-container">
    <h6 id="electricalLink" class="unselectable" onclick="toggleGroup('electricalLink');" style="cursor: pointer;">Electrical &nbsp +</h6>
  </div>
   <a href="#" class="w3-padding tablink electricalLink" onclick="openModule(event,'circuitsModule');"><i class="fa fa-bolt fa-fw"></i>&nbsp; Circuits Modeling</a>
   <a href="#" class="w3-padding tablink electricalLink" onclick="openModule(event,'electicalComponentsModule');"><i class="fa fa-plug fa-fw"></i>&nbsp; Comp. Analysis</a>
    
   <div class="w3-container">
    <h6 id="mathLink" class="unselectable" onclick="toggleGroup('mathLink');" style="cursor: pointer;">Mathematics &nbsp +</h6>
  </div>
   <a href="#" class="w3-padding tablink mathLink" onclick="openModule(event,'mathModule');"><i class="fa fa-superscript fa-fw"></i>&nbsp; Equation Solver</a>
   <a href="#" class="w3-padding tablink mathLink" onclick="openModule(event,'graphModule');"><i class="fa fa-area-chart fa-fw"></i>&nbsp; Graphing</a>
   
    <div class="w3-container">
    <h6 id="econLink" class="unselectable" onclick="toggleGroup('econLink');" style="cursor: pointer;">Econ & Finance &nbsp +</h6>
  </div>
   <a href="#" class="w3-padding tablink econLink" onclick="openModule(event,'pvFvModule');"><i class="fa fa-credit-card fa-fw"></i>&nbsp; PV / FV</a>
   <a href="#" class="w3-padding tablink econLink" onclick="openModule(event,'irrModule');"><i class="fa fa-money fa-fw"></i>&nbsp; IRR</a>
  
  </small>
  
  <br><br><br><br> <!-- Required to fix the scrolling error. May need to add a couple more as the module list grows... -->
  

</nav>


<!-- Overlay effect when opening sidenav on small screens -->
<!--
<div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style="cursor:pointer;" title="close side menu" id="myOverlay"></div>
-->

<!-- Main Content Area -->
<div id="main" class="w3-main" style="margin-left:200px; margin-top:60px;">
<!-- Module button for small screen -->
<button class="w3-btn w3-hide-large w3-padding-0 w3-hover-text-grey w3-blue" onclick="w3_open();"><i class="fa fa-bars"></i> &nbsp;Quick Start Menu</button>
 
 <!-- Module Content Divs -->
<div id="quickStartModuleContent" class="moduleContent" style="display:none">
    <?php include('quickStartModule.php') ?>
</div>
<div id="mechanicsModuleContent" class="moduleContent" style="display:none">
    <?php include('mechanicsModule.php') ?>
</div>
<div id="beamsModuleContent" class="moduleContent" style="display:none">
    <?php include('beamsModule.php') ?>
</div>
<div id="ssPointLoadBeamModuleContent" class="moduleContent" style="display:none">
    <?php include('ssPointLoadBeamModule.php') ?>
</div>

<!-- Div for ohsnap message boxes -->
<div id="ohsnap" style="position: absolute; bottom: 0px; right: 21px;"></div>

</div> 

<script src="jquery-3.1.0.min.js"></script>
<script src="raphael.js"></script>
<script src="ohsnap.js"></script>
<script src="namespaces.js"></script>
<script src="mainAppClient.js"></script>
<script src="ssPointLoadBeamModuleMainJS.js"></script>
<script src="ssPointLoadBeamModuleAISCmodalJS.js"></script>

</body>
</html>