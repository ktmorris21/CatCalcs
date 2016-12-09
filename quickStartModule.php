<br>	
<h3>CatCalcs Quick Start Menu</h3>
<br>
<div class="w3-container">
	<br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadSolutionSetsModule();"><br>Solution Sets<br><br><i class="fa fa-calendar-check-o fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadMechanicsModule();"><br>Mechanics<br><br><i class="fa fa-wrench fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadThermoFluidsModule();"><br>Thermodynamics & Fluids<br><br><i class="fa fa-line-chart fa-3x"></i><br><br></button>&nbsp &nbsp<br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadElectricalModule();"><br>Electrical<br><br><i class="fa fa-bolt fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadMathModule();"><br>Pure Mathematics<br><br><i class="fa fa-superscript fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadFinanceModule();"><br>Financial & Economic<br><br><i class="fa fa-money fa-3x"></i><br><br></button>&nbsp &nbsp
</div>

<script>

function loadSolutionSetsModule() {
	
	$("#moduleViewer").empty();
	$("#moduleViewer").load("solutionSetsModule.php");
}

function loadMechanicsModule() {
	$("#moduleViewer").fadeOut("fast", function(){
		$("#moduleViewer").empty();
		$("#moduleViewer").hide();
		$("#moduleViewer").load("mechanicsModule.php");
		$("#moduleViewer").fadeIn("fast", function(){
			
		});	
	});
}
	
function loadThermoFluidsModule() {
	$("#moduleViewer").empty();
	$("#moduleViewer").load("thermoFluidsModule.php");
}

function loadElectricalModule() {
	$("#moduleViewer").empty();
	$("#moduleViewer").load("electricalModule.php");
}

function loadMathModule() {
	$("#moduleViewer").empty();
	$("#moduleViewer").load("mathModule.php");
}

function loadFinanceModule() {
	$("#moduleViewer").empty();
	$("#moduleViewer").load("financeModule.php");
}

</script>