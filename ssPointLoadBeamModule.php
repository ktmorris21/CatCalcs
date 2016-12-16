<br>
<h4>Beam Model - Simply Supported Point Load</h4>

<ul class="w3-navbar w3-blue w3-margin">
  <li><a href="#" onclick="openTab(event, 'Definition')" class="ssPointLoadtablink w3-indigo"><small>Definition & Diagrams</small></a></li>
  <li><a href="#" onclick="openTab(event, 'Results')" class="tablink"><small>Results</small></a></li>
  <li><a href="#" onclick="openTab(event, 'Calculations')" class="tablink"><small>Calculations</small></a></li>
</ul>


<!-- Definitions/Diagrams Tab -->
<div id="Definition" class="beamTabs">
<div class="w3-row">
	<div class="w3-container w3-half" style="min-width: 350px;">
		<h6><u>Beam Definition</u></h6>	
			
			<fieldset style="width: 350px">
			<legend>Lengths & Loading</legend>
			
			<!-- Length Input -->
			<div class="w3-row">
			<div class="w3-col" style="width: 120px; text-align: right;">Length l: &nbsp</div>
			<div class="w3-rest"><input type="number" min="0" id="inputLength" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
			<select id ="inputLengthUnits" style="font-size: 9pt; width: 50px;">
				<option value="1">in</option>
				<option value="12" selected="selected">ft</option>
				<option value="36">yd</option>
				<option value="0.0393731">mm</option>
				<option value="0.393731">cm</option>
				<option value="39.3701">m</option>
			</select></div>
			</div>
			
			<!-- Span a Input -->
			<div class="w3-row">
			<div class="w3-col" style="width: 120px; text-align: right;">Span a: &nbsp</div>
			<div class="w3-rest"><input type="number" min="0" id="inputA" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
			<select id="inputAUnits" style="font-size: 9pt; width: 50px;">
				<option value="1">in</option>
				<option value="12" selected="selected">ft</option>
				<option value="36">yd</option>
				<option value="0.0393731">mm</option>
				<option value="0.393731">cm</option>
				<option value="39.3701">m</option>
			</select></div>
			</div>
			
			<!-- Point Load Input -->
			<div class="w3-row">
			<div class="w3-col" style="width: 120px; text-align: right;">Point Load P: &nbsp</div>
			<div class="w3-rest"><input type="number" min="0" id="inputPointLoad" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
			<select id="inputPointLoadUnits" style="font-size: 9pt; width: 50px;">
				<option value="1">lbf</option>
				<option value="0.224809">kN</option>
				<option value="1000">kip</option>
			</select></div>
			</div>
			</fieldset><br>
			
			<!-- Section Properties Input -->
			<fieldset style="width: 350px;">
				<legend>Section Properties</legend>
				<div style="text-align: center;">
				<button class="w3-btn w3-blue w3-hover-indigo" onclick="$('#AISCmodal').show();">Import AISC Section</button><br><br>
				</div>
				Properties: <br>
				<div class="w3-row">
				<div class="w3-col" style="width: 120px; text-align: right;">MoI I: &nbsp</div>
				<div class="w3-rest"><input type="number" min="0" id="inputMOI" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
				<select id ="inputMOIunits" style="font-size: 9pt; width: 50px;">
				<option value="1" selected="selected">in<sup>4</sup></option>
				<option value="12">ft<sup>4</sup></option>
				<option value="0.0393731">mm</option>
				<option value="0.393731">cm</option>
				<option value="39.3701">m</option>
				</select></div>
				</div>
				<div class="w3-row">
				<div class="w3-col" style="width: 120px; text-align: right;">Height h: &nbsp</div>
				<div class="w3-rest"><input type="number" min="0" id="inputHeight" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
				<select id ="inputHeightUnits" style="font-size: 9pt; width: 50px;">
				<option value="1" selected="selected">in</option>
				<option value="12">ft<sup>4</sup></option>
				<option value="0.0393731">mm</option>
				<option value="0.393731">cm</option>
				</select></div>
				</div>
				<div class="w3-row">
					<div class="w3-col" style="width: 120px; text-align: right;">CS Area: &nbsp</div>
					<div class="w3-rest"><input type="number" min="0" id="inputCSA" style="font-size: 9pt; text-align: right; width: 5em;">&nbsp
				<select id ="inputCSAunits" style="font-size: 9pt; width: 50px;">
				<option value="1" selected="selected">in<sup>2</sup></option>
				<option value="0.0393731">mm<sup>2</sup></option>
				<option value="0.393731">cm<sup>2</sup></option>
				</select></div>
				</div>
			</fieldset><br>
			
			<button class="w3-btn w3-blue w3-hover-indigo" onclick="runCalc();">Solve Beam</button><br><br>
			
	</div>
	<div class="w3-container w3-half" style="min-width: 375px;">
		<h6><u>Beam Diagrams</u></h6>
		<!-- Canvas Div for Raphael Beam Diagrams -->
		<div id="ssPlBeam_diagram_canvas"></div>
		
	</div>
</div>
</div> <!-- End definition/diagrams tab -->

<!-- Begin Results Tab -->
<div id="Results" class="beamTabs w3-container" style="display: none;">
<h6><u>Stress & Deflection</u></h6>
		<!-- Canvas Div for Raphael stress/deflection graphic -->
			<div id="ssPlBeam_stressDeflection_canvas"></div>
		<h6><u>Beam Results</u></h6>
</div>
<!-- End Results Tab -->

<!-- Begin Calculations Tab -->
<div id="Calculations" class="beamTabs w3-container" style="display: none;">
<h6><u>Calculation Details</u></h6>

</div>
<!-- End Calculations Tab -->

<!-- AISC Modal -->
<div id="AISCmodal" class="w3-modal" style="display: none;">
  <div class="w3-modal-content w3-blue-grey">
		<span onclick="$('#AISCmodal').hide();" class="w3-closebtn">&times;</span>
      <div class="w3-container">
			<h4>Import AISC Structural Member</h4><br>
			<div class="w3-row">
				<div class="w3-half w3-container">
			AISC Member: <br>
				<select id="AISCshapeTypes" style="font-size: 9pt;">
					<option value="default">Select Shape Type</option>
					<option>W</option>
					<option>S</option>
					<option>HP</option>
					<option>M</option>
					<option>C</option>
					<option>MC</option>
					<option>L</option>
					<option>2L</option>
					<option>WT</option>
					<option>ST</option>
					<option>MT</option>
					<option>HSS (Round)</option>
					<option>HSS (Rectangular)</option>
					<option>Pipe</option>
				</select> &nbsp
				<select id="AISCdesignations" style="font-size: 9pt;" disabled="disabled">
					<option>Select Designation</option>
				</select> &nbsp <br><br>
				Bend About Axis:<br>
				<input id="xxAxisRadio" type="radio" name="MOIaxis" checked="checked">&nbsp Use x-x Axis &nbsp &nbsp
				<input id="yyAxisRadio" type="radio" name="MOIaxis"> &nbsp Use y-y Axis<br><br>
				Moment of Inertia:<br><br>
				Cross Sectional Area:<br><br>
				Depth:<br><br>
				<button class="w3-btn w3-blue w3-hover-indigo w3-small" onclick="$('#AISCmodal').hide();">Set</button><br><br>
				</div>
				<div class="w3-half w3-container">
					<div id="AISC_canvas"></div>
				</div>
			</div>
			</div>
	</div>
</div>
<!-- End AISC Modal -->




