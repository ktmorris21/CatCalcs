<br>	
<h3>Select a Mechanics Solution Class:</h3>
<div class="w3-container">
	<br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadBeamsModule();"><br>Beams<br><br><i class="fa fa-minus fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadPlatesModule();"><br>Plates<br><br><i class="fa fa-square fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadTrussModule();"><br>Trusses<br><br><i class="fa fa-arrows-alt fa-3x"></i><br><br></button>&nbsp &nbsp<br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadColumnsModule();"><br>Columns<br><br><i class="fa fa-university fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadBearingsModule();"><br>Bearings<br><br><i class="fa fa-cogs fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadStaticsModule();"><br>Statics<br><br><i class="fa fa-chain fa-3x"></i><br><br></button>&nbsp &nbsp<br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadDyanmicsModule();"><br>Dynamics<br><br><i class="fa fa-fighter-jet fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadFatigueModule();"><br>Fatigue<br><br><i class="fa fa-coffee fa-3x"></i><br><br></button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadSIFModule();"><br>SIF Stress/Strain<br><br><i class="fa fa-chain-broken fa-3x"></i><br><br></button>&nbsp &nbsp<br><br>
</div>

<script>

function loadBeamsModule() {
	$(".moduleContent").fadeOut("slow", function(){
		$(".moduleContent").hide();
	});
	$("#beamsModuleContent").fadeIn("slow", function(){
		$("#beamsModuleContent").show();
	});
}


</script>