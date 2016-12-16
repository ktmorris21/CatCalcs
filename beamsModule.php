<br>	
<h3>Select Beam Class:</h3>
<br>
<div class="w3-container">
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;" onclick="loadSimplySupportedPointLoadBeam();">Simply Supported <br>Point Load</button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;">Simply Supported <br>Distributed Load</button>&nbsp &nbsp
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;">Cantilevered <br>Point Load</button><br><br>
	<button class="w3-btn w3-blue w3-hover-indigo" style="width: 30%;">Cantilevered <br>Distributed Load</button>&nbsp &nbsp
</div>

<script>

function loadSimplySupportedPointLoadBeam() {
	
	$(".moduleContent").fadeOut("slow", function(){
		$(".moduleContent").hide();
	});
	
	$("#ssPointLoadBeamModuleContent").fadeIn("slow", function(){
		$("#ssPointLoadBeamModuleContent").show();
	});

}

</script>