//////////////////////////////////////////////////////////////////
// Main JavaScript for the ssPointLoadBeamModule.php
// Provides tab control for the module and all control of the "Definition & Diagrams" tab,
// excluding the AISC import modal
//////////////////////////////////////////////////////////////////

// Tab control
function openTab(evt, tab) {
    var i, x, tablinks;
	x = document.getElementsByClassName("beamTabs");
	for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-indigo", "");
    }
    evt.currentTarget.className += " w3-indigo";
	document.getElementById(tab).style.display = "block";
	updateDiagramGeometry();
}

// Draw beam diagrams
	// Diagram Setup
	var diagramStartingX = 25;
	var diagramStartingY = 100;
	var diagramLength = 350;
	var animateSpeed = 400; //(ms)
	var paper = new Raphael(document.getElementById('ssPlBeam_diagram_canvas'),500,500);
	
	// Beam Line
	var beamLine = paper.path("M " + diagramStartingX + " " + diagramStartingY + " l " + diagramLength + " 0");
	beamLine.attr({stroke: '#0396F8', 'stroke-width': 6});
	
	// Left Reaction Arrow
	var r1Line = paper.path("M " + (diagramStartingX+2) + " " + (diagramStartingY+8) + " l 0 30");
	var r1LeftArrow = paper.path("M " + (diagramStartingX+2) + " " + (diagramStartingY+8) + " l -7 7");
	var r1RightArrow = paper.path("M " + (diagramStartingX+2) + " " + (diagramStartingY+8) + " l 7 7");
	var r1Label = paper.text(diagramStartingX, (diagramStartingY+50), "R1");
	var leftReactionArrow = paper.set();
	leftReactionArrow.push(r1Line, r1LeftArrow, r1RightArrow, r1Label);
	leftReactionArrow.attr({stroke: '#07F2BC', 'stroke-width': 2, 'font-size': 16});
	r1Label.attr({'stroke': 'none', fill: '#07F2BC'});
	
	// Right Reaction Arrow
	var r2Line = paper.path("M " + (diagramStartingX+diagramLength-2) + " " + (diagramStartingY+8) + " l 0 30");
	var r2LeftArrow = paper.path("M " + (diagramStartingX+diagramLength-2) + " " + (diagramStartingY+8) + " l -7 7");
	var r2RightArrow = paper.path("M " + (diagramStartingX+diagramLength-2) + " " + (diagramStartingY+8) + " l 7 7");
	var r2Label = paper.text((diagramStartingX+diagramLength), (diagramStartingY+50), "R2");
	var rightReactionArrow = paper.set();
	rightReactionArrow.push(r2Line, r2LeftArrow, r2RightArrow, r2Label);
	rightReactionArrow.attr({stroke: '#07F2BC', 'stroke-width': 2, 'font-size': 16});
	r2Label.attr({'stroke': 'none', fill: '#07F2BC'});
	
	// Force Arrow
	var forceLine = paper.path("M " + (diagramStartingX+150) + " " + (diagramStartingY-8) + " l 0 -30");
	var forceLeftArrow = paper.path("M " + (diagramStartingX+150) + " " + (diagramStartingY-8) + "l -7 -7");
	var forceRightArrow = paper.path("M " + (diagramStartingX+150) + " " + (diagramStartingY-8) + "l  7 -7");
	var forceLabel = paper.text((diagramStartingX+155), (diagramStartingY-50), "P");
	var forceArrow = paper.set();
	forceArrow.push(forceLine, forceLeftArrow, forceRightArrow, forceLabel);
	forceArrow.attr({stroke: '#07F2BC', 'stroke-width': 2, 'font-size': 16, 'text-anchor': 'start'});
	forceLabel.attr({'stroke': 'none', fill: '#07F2BC'});
	
	// Length Lines
	var leftDatumLine = paper.path("M " + (diagramStartingX+2) + " " + (diagramStartingY-8) + "l 0 -90");
	var rightDatumLine = paper.path("M " + (diagramStartingX+diagramLength-2) + " " + (diagramStartingY-8) + "l 0 -90");
	var lengthLine = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-70) + "l " + (diagramLength-12) + " 0");
	var lengthLeftArrowBottom = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-70) + "l 7 7");
	var lengthLeftArrowTop = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-70) + "l 7 -7");
	var lengthRightArrowBottom = paper.path("M " + (diagramStartingX+diagramLength-6) + " " + (diagramStartingY-70) + " l -7 7");
	var lengthRightArrowTop = paper.path("M " + (diagramStartingX+diagramLength-6) + " " + (diagramStartingY-70) + " l -7 -7");
	var lengthLabel = paper.text((diagramStartingX+(diagramLength/2)), (diagramStartingY-90), "l");
	var lengthDatum = paper.set();
	lengthDatum.push(leftDatumLine, rightDatumLine, lengthLine, lengthLeftArrowBottom, lengthLeftArrowTop, lengthRightArrowBottom,
			   lengthRightArrowTop, lengthLabel);
	lengthDatum.attr({stroke: '#ECF0F1', 'stroke-width': 2, 'font-size': 16});
	lengthLabel.attr({'stroke': 'none', fill: 'white'});
		
	// a dimension Lines
	var aLine = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 138 0");
	var aLeftArrowTop = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 -7");
	var aLeftArrowBottom = paper.path("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 7");
	var aRightArrowTop = paper.path("M " + (diagramStartingX+144) + " " + (diagramStartingY-30) + "l -7 -7");
	var aRightArrowBottom = paper.path("M " + (diagramStartingX+144) + " " + (diagramStartingY-30) + "l -7 7");
	var aRightStemLine = paper.path("M " + (diagramStartingX+154) + " " + (diagramStartingY-30) + "l 30 0");
	var aRightStemArrowTop = paper.path("M " + (diagramStartingX+154) + " " + (diagramStartingY-30) + "l 7 -7");
	var aRightStemArrowBottom = paper.path("M " + (diagramStartingX+154) + " " + (diagramStartingY-30) + "l 7 7");
	aRightStemLine.hide();
	aRightStemArrowTop.hide();
	aRightStemArrowBottom.hide();
	var aLeftStemLine = paper.path("M " + (diagramStartingX-4) + " " + (diagramStartingY-30) + "l -20 0");
	var aLeftStemArrowTop = paper.path("M " + (diagramStartingX-4) + " " + (diagramStartingY-30) + "l -7 -7");
	var aLeftStemArrowBottom = paper.path("M " + (diagramStartingX-4) + " " + (diagramStartingY-30) + "l -7 7");
	aLeftStemLine.hide();
	aLeftStemArrowTop.hide();
	aLeftStemArrowBottom.hide();
	var aLabel = paper.text((diagramStartingX+75), (diagramStartingY-45), "a");
	var aDatum = paper.set();
	aDatum.push(aLine, aLeftArrowTop, aLeftArrowBottom, aRightArrowTop, aRightArrowBottom, aRightStemLine,
				aRightStemArrowTop, aRightStemArrowBottom, aLeftStemLine, aLeftStemArrowTop, aLeftStemArrowBottom, aLabel);
	aDatum.attr({stroke: '#ECF0F1', 'stroke-width': 2, 'font-weight': 'normal', 'font-size': 16});
	aLabel.attr({'stroke': 'none', fill: 'white'});

	// Shear Beam Line
	var shearBeamLine = paper.path("M " + diagramStartingX + " " + (diagramStartingY+150) + " l " + diagramLength + " 0");
	shearBeamLine.attr({stroke: '#0396F8', 'stroke-width': 6});
	
	// Shear Area
	var shearArea = paper.path("M " + (diagramStartingX+2) + " " + (diagramStartingY+148) + " l 0 -50 l 150 0 l 0 100 l " + (diagramLength-152) +
														 " 0 l 0 -45 l -" + (diagramLength-152) + " 0 l 0 -7 l -150 0");
	shearArea.attr({stroke: '#02F6FA', 'stroke-width': 3, 'fill': '#04FBEC', 'fill-opacity':0.5});
	var shearLabelV1 = paper.text((diagramStartingX+160), (diagramStartingY+100), "V1 = R1");
	shearLabelV1.attr({'stroke': 'none', fill: '#07F2BC', 'font-size': 16, 'text-anchor': 'start'});
	var shearLabelV2 = paper.text((diagramStartingX+diagramLength+8), (diagramStartingY+200), "V2 = R2");
	shearLabelV2.attr({'stroke': 'none', fill: '#07F2BC', 'font-size': 16, 'text-anchor': 'start'});
	
	// Moment Beam Line
	var momentBeamLine = paper.path("M " + diagramStartingX + " " + (diagramStartingY+300) + " l " + diagramLength + " 0");
	momentBeamLine.attr({stroke: '#0396F8', 'stroke-width': 6});
	
	// Moment Area
	var momentArea = paper.path("M " + (diagramStartingX) + " " + (diagramStartingY+298) + " l 150 -50 l " + (diagramLength-150) + " 50");
	momentArea.attr({stroke: '#02F6FA', 'stroke-width': 3, 'fill': '#04FBEC', 'fill-opacity':0.5});
	var momentLabel = paper.text((diagramStartingX+160), (diagramStartingY+235), "Mmax");
	momentLabel.attr({'stroke': 'none', fill: '#07F2BC', 'font-size': 16, 'text-anchor': 'start'});
	
// Draw stress/deflection side
	var paper2 = new Raphael(document.getElementById('ssPlBeam_stressDeflection_canvas'), 500, 100);
	var beam = paper2.path("M 25 25 l 0 25 l " + diagramLength + "  0 l 0 -25 z");
	beam.attr({stroke: '#ddd', 'stroke-with': 5, fill: 'blue', 'font-size': 14});

// Master problem variables with normailized units (in and lbf), and ratio of a/l
	var masterLength = 0;
	var masterA = 0;
	var masterPointLoad = 0;
	var alRatio = 0;
	
	function updateMasterVariables() {
		masterLength = $("#inputLength").val() * $("#inputLengthUnits").val();
		masterA = $("#inputA").val() * $("#inputAUnits").val();
		masterPointLoad = $("#inputPointLoad").val() * $("#inputPointLoadUnits").val();
		//ohSnap(("Master Length: " + masterLength + " in <br> Master Span a: " +
		//	masterA + " in <br> Master Point Load: " + masterPointLoad + " lbf"), {'color':'blue'});
	}
	
// Diagram Update Logic
	
	// Make the enter key update
	$(document).on('keypress', function(e){
		if(e.which ==13){
		updateMasterVariables();
		updateDiagramGeometry();
        }
		});
	
	// Lose focus calls - get the proper updates rolling once an item goes out of focus (presumably got updated)
	$("#inputLength").focusout(function() {

		updateMasterVariables();
		updateDiagramGeometry();
		});
	
	$("#inputA").focusout(function() {
		updateMasterVariables();
		updateDiagramGeometry();
		});
	
	$("#inputPointLoad").focusout(function() {
		updateMasterVariables();
		updateDiagramGeometry();
	});
	
	$("#inputLengthUnits").focusout(function(){
		updateMasterVariables();
		updateDiagramGeometry();
	});
	
	$("#inputAUnits").focusout(function() {
		updateMasterVariables();
		updateDiagramGeometry();
	});
	
	$("#inputPointLoadUnits").focusout(function(){
		updateMasterVariables();
		updateDiagramGeometry();
	});
	
	// Update functions
	
	function blankDiagramLabels() {
		lengthLabel.attr("text", "l");
		aLabel.attr("text", "a");
	}
	
	function updateDiagramGeometry() {
		
		// Check for negative values or a 0 entered (still blank is ok), warn and clear if any are found
		if ($("#inputLength").val() !== "" && $("#inputLength").val() <= 0) {
			$("#inputLength").val("");
			ohSnap("Length must be > 0", {'color':'yellow'});
			return;
		}
		if ($("#inputA").val() !== "" && $("#inputA").val() <= 0) {
			$("#inputA").val("");
			ohSnap("Span a must be > 0", {'color':'yellow'});
			return;
		}
		if ($("#inputPointLoad").val() !== "" && $("#inputPointLoad").val() <= 0) {
			$("#inputPointLoad").val("");
			ohSnap("Load force must be > 0", {'color':'yellow'});
			return;
		}
		
		// Update force label with force number
		if ($("#inputPointLoad").val() !== "") {
			forceLabel.attr("text", ("P = " + $("#inputPointLoad").val() + " " + $("#inputPointLoadUnits option:selected").text()));
		}
		else {
			forceLabel.attr("text", "P");
		}
		
		// If both length and a inputs are blank, set labels without numbers on diagram and exit function
		if ($("#inputLength").val() === "" && $("#inputA").val() === "") {
			blankDiagramLabels();
			return;
		}
		
		// If length is defined but a input is blank, update length label with number and set a label with no number
		if ($("#inputLength").val() !== "" && $("#inputA").val() === "") {
			lengthLabel.attr("text", ("l = " + $("#inputLength").val() + " " + $("#inputLengthUnits option:selected").text()));
			aLabel.attr("text", "a");
			return;	
		}
		
		// If a input is defined but length is blank, update a label with number and set length label with no number
		if ($("#inputLength").val() === "" && $("#inputA").val() !== "") {
			lengthLabel.attr("text", "l");
			aLabel.attr("text", ("a = " + $("#inputA").val() + " " + $("#inputAUnits option:selected").text()));
			return;	
		}
		
		// If both length and InputA have values, check that a < l and then make graphics updates
		if ($("#inputLength").val() !== "" && $("#inputA").val() !== "") {
			lengthLabel.attr("text", ("l = " + $("#inputLength").val() + " " + $("#inputLengthUnits option:selected").text()));
			aLabel.attr("text", ("a = " + $("#inputA").val() + " " + $("#inputAUnits option:selected").text()));
			// Blank it out if a > l and give a warning message
			if (masterLength <= masterA) {
				ohSnap("Warning: Beam Length (l) must be greater than span (a)", {'color':'yellow'});
				blankDiagramLabels();
				return;
			}
			// Geometry makes sense, update diagram
			else {
				// Move the force arrow to the correct relative location
				alRatio = masterA / masterLength;
				forceLine.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)) + " " + (diagramStartingY-8) + " l 0 -30"]}, animateSpeed);
				forceLeftArrow.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)) + " " + (diagramStartingY-8) + "l -7 -7"]}, animateSpeed);
				//forceRightArrow.attr("path", ("M " + (diagramStartingX+(alRatio*diagramLength)) + " " + (diagramStartingY-8) + "l  7 -7"));
				forceRightArrow.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)) + " " + (diagramStartingY-8) + "l  7 -7"]}, animateSpeed);
				//forceLabel.attr("x", (diagramStartingX+(alRatio*diagramLength)+5));
				forceLabel.animate({x: [diagramStartingX+(alRatio*diagramLength)+5]}, animateSpeed);
				
				// Update shear area
				shearArea.animate({path: [" M " + (diagramStartingX+2) + " " + (diagramStartingY+148) + " l 0 -50 l " + (alRatio*diagramLength) +
																	 " 0 l 0 100 l " + (diagramLength-(alRatio*diagramLength)-2) +  " 0 l 0 -45 l -" +
																	 (diagramLength-(alRatio*diagramLength)-2) + " 0 l 0 -7 l -" + (alRatio*diagramLength) + " 0"]}, animateSpeed);
				shearLabelV1.animate({x: [diagramStartingX+(alRatio*diagramLength)+10]}, animateSpeed);
				
				// Update moment area
				momentArea.animate({path: ["M " + (diagramStartingX) + " " + (diagramStartingY+298) + " l " + (alRatio*diagramLength) + " -50 l " +
																	 (diagramLength-(alRatio*diagramLength)) + " 50"]}, animateSpeed);
				momentLabel.animate({x: [diagramStartingX+(alRatio*diagramLength)+10]}, animateSpeed);
				
				if (alRatio > 0.25) {
					// Keep normal dimensional shape and update
					//aLine.attr("path", ("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l " + ((alRatio*diagramLength)-12) + " 0"));
					aLeftStemLine.hide();
					aLeftStemArrowTop.hide();
					aLeftStemArrowBottom.hide();
					aRightStemLine.hide();
					aRightStemArrowTop.hide();
					aRightStemArrowBottom.hide();
					aLine.show();
					aLeftArrowBottom.show();
					aLeftArrowTop.show();
					aRightArrowBottom.show();
					aRightArrowTop.show();
					aLine.animate({path: ["M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l " + ((alRatio*diagramLength)-12) + " 0"]}, animateSpeed);
					aLeftArrowTop.attr("path", ("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 -7"));
					//aLeftArrowTop.animate({path: ["M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 -7"]}, animateSpeed);
					aLeftArrowBottom.attr("path", ("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 7"));
					//aLeftArrowBottom.animate({path: []}, animateSpeed);
					//aRightArrowTop.attr("path", ("M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 -7"));
					aRightArrowTop.animate({path: ["M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 -7"]}, animateSpeed);
					//aRightArrowBottom.attr("path", ("M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 7"));
					aRightArrowBottom.animate({path: ["M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 7"]}, animateSpeed);
					//aLabel.attr("x", (diagramStartingX+((alRatio*diagramLength)/2)));
					aLabel.animate({x: [diagramStartingX+((alRatio*diagramLength)/2)], y: [diagramStartingY-45]}, animateSpeed);
				}
				else {
					// a is too short, move arrows to outside
					aLine.hide();
					aLeftArrowBottom.hide();
					aLeftArrowTop.hide();
					aRightArrowBottom.hide();
					aRightArrowTop.hide();
					aLeftStemLine.show();
					aLeftStemArrowTop.show();
					aLeftStemArrowBottom.show();
					aRightStemLine.show();
					aRightStemArrowTop.show();
					aRightStemArrowBottom.show();
					aLabel.animate({x: [diagramStartingX+(alRatio*diagramLength)+50], y: [diagramStartingY-15]}, animateSpeed);
					aRightStemLine.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)+4) + " " + (diagramStartingY-30) + " l 20 0"]}, animateSpeed);
					aRightStemArrowTop.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)+4) + " " + (diagramStartingY-30) + " l 7 -7"]}, animateSpeed);
					aRightStemArrowBottom.animate({path: ["M " + (diagramStartingX+(alRatio*diagramLength)+4) + " " + (diagramStartingY-30) + " l 7 7"]}, animateSpeed);
				}
			
			}
			
			return;	
		}
		
	}
	
	function runCalc() {
		ohSnap('runCalc();', {'color':'blue'});
	}
	
	