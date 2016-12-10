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


	
function updateMasterVariables() {
	masterLength = $("#inputLength").val() * $("#inputLengthUnits").val();
	masterA = $("#inputA").val() * $("#inputAUnits").val();
	masterPointLoad = $("#inputPointLoad").val() * $("#inputPointLoadUnits").val();
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
	//	if (masterLength <= masterA) {
		if ($("#inputLength").val() <= $("#inputA").val()) {
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
				aLeftArrowBottom.attr("path", ("M " + (diagramStartingX+6) + " " + (diagramStartingY-30) + " l 7 7"));
				aRightArrowTop.animate({path: ["M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 -7"]}, animateSpeed);
				aRightArrowBottom.animate({path: ["M " + (diagramStartingX+((alRatio*diagramLength)-6)) + " " + (diagramStartingY-30) + "l -7 7"]}, animateSpeed);
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
	
	