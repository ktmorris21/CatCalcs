//////////////////////////////////////////////////////////////////
// JavaScript for AISC import modal in ssPointLoadBeamModule.php
//////////////////////////////////////////////////////////////////

// Drawing canvas for cross section diagrams
var AISCstartingX = 100;
var AISCstartingY = 50;
var paper3 = new Raphael(document.getElementById('AISC_canvas'),500,400);

// W shape
var wShape = paper3.path("M " + AISCstartingX + " " + AISCstartingY + " l 200 0 l 0 15 l -85 0 a 10 10 0 0 0 -10 10 " +
						 "l 0 160 a 10 10 0 0 0 10 10 l 85 0 l 0 15 l -200 0 l 0 -15 l 85 0 a 10 10 0 0 0 10 -10" +
						 "l 0 -160 a 10 10 0 0 0 -10 -10 l -85 0 z");
wShape.attr({stroke: '#0396F8', 'stroke-width': 4, fill: '#00ccff'});

var wShapeXaxis = paper3.path("M " + AISCstartingX + " " + (AISCstartingY+105) + " l 200 0");
wShapeXaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var wXXaxisLabel = paper3.text((AISCstartingX+180), (AISCstartingY+25), "x-x");
wXXaxisLabel.attr({'font-size': 16, fill: 'white'});	

var wShapeYaxis = paper3.path("M " + (AISCstartingX+100) + " " + (AISCstartingY-25) + " l 0 260");
wShapeYaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var wYYaxisLabel = paper3.text((AISCstartingX+118), (AISCstartingY-30), "y-y");
wYYaxisLabel.attr({'font-size': 16, fill: 'white'});

var wShapeSet = paper3.set();
wShapeSet.push(wShape, wShapeXaxis, wShapeYaxis);
var wShapeSetwithLabels = paper3.set();
wShapeSetwithLabels.push(wShapeSet, wXXaxisLabel, wYYaxisLabel);
wShapeSetwithLabels.hide();


// S shape
var sShape = paper3.path("M " + (AISCstartingX+20) + " " + AISCstartingY + " l 150 0 l 0 10 a 10 10 0 0 1 -10 10 l -50 5 a 10 10 0 0 0 -10 10 " +
						 "l 0 150 a 10 10 0 0 0 10 10 l 50 5 a 10 10 0 0 1 10 10 l 0 10 l -150 0 l 0 -10 a 10 10 0 0 1 10 -10 " +
						 "l 50 -5 a 10 10 0 0 0 10 -10 l 0 -150 a 10 10 0 0 0 -10 -10 l -50 -5 a 10 10 0 0 1 -10 -10 z");
sShape.attr({stroke: '#0396F8', 'stroke-width': 4, fill: '#00ccff'});

var sShapeXaxis = paper3.path("M " + (AISCstartingX-5) + " " + (AISCstartingY+110) + " l 200 0");
sShapeXaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var sXXaxisLabel = paper3.text((AISCstartingX+180-5), (AISCstartingY+25), "x-x");
sXXaxisLabel.attr({'font-size': 16, fill: 'white'});	

var sShapeYaxis = paper3.path("M " + (AISCstartingX+100-5) + " " + (AISCstartingY-20) + " l 0 260");
sShapeYaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var sYYaxisLabel = paper3.text((AISCstartingX+118-5), (AISCstartingY-30), "y-y");
sYYaxisLabel.attr({'font-size': 16, fill: 'white'});

var sShapeSet = paper3.set();
sShapeSet.push(sShape, sShapeXaxis, sShapeYaxis);
var sShapeSetwithLabels = paper3.set();
sShapeSetwithLabels.push(sShapeSet, sXXaxisLabel, sYYaxisLabel);
sShapeSetwithLabels.hide();

// HP shape
var hpShape = paper3.path("M " + AISCstartingX + " " + AISCstartingY + " l 200 0 l 0 15 l -83 0 a 10 10 0 0 0 -10 10 " +
						 "l 0 160 a 10 10 0 0 0 10 10 l 83 0 l 0 15 l -200 0 l 0 -15 l 83 0 a 10 10 0 0 0 10 -10" +
						 "l 0 -160 a 10 10 0 0 0 -10 -10 l -83 0 z");
hpShape.attr({stroke: '#0396F8', 'stroke-width': 4, fill: '#00ccff'});

var hpShapeXaxis = paper3.path("M " + AISCstartingX + " " + (AISCstartingY+105) + " l 200 0");
hpShapeXaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var hpXXaxisLabel = paper3.text((AISCstartingX+180), (AISCstartingY+25), "x-x");
hpXXaxisLabel.attr({'font-size': 16, fill: 'white'});	

var hpShapeYaxis = paper3.path("M " + (AISCstartingX+100) + " " + (AISCstartingY-25) + " l 0 260");
hpShapeYaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var hpYYaxisLabel = paper3.text((AISCstartingX+118), (AISCstartingY-30), "y-y");
hpYYaxisLabel.attr({'font-size': 16, fill: 'white'});

var hpShapeSet = paper3.set();
hpShapeSet.push(hpShape, hpShapeXaxis, hpShapeYaxis);
var hpShapeSetwithLabels = paper3.set();
hpShapeSetwithLabels.push(hpShapeSet, hpXXaxisLabel, hpYYaxisLabel);
hpShapeSetwithLabels.hide();

// M shape
var mShape = paper3.path("M " + (AISCstartingX+50) + " " + AISCstartingY + " l 100 0 l 0 15 l -35 0 a 10 10 0 0 0 -10 10 " +
						 "l 0 160 a 10 10 0 0 0 10 10 l 35 0 l 0 15 l -100 0 l 0 -15 l 35 0 a 10 10 0 0 0 10 -10" +
						 "l 0 -160 a 10 10 0 0 0 -10 -10 l -35 0 z");
mShape.attr({stroke: '#0396F8', 'stroke-width': 4, fill: '#00ccff'});

var mShapeXaxis = paper3.path("M " + AISCstartingX + " " + (AISCstartingY+105) + " l 200 0");
mShapeXaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var mXXaxisLabel = paper3.text((AISCstartingX+180), (AISCstartingY+25), "x-x");
mXXaxisLabel.attr({'font-size': 16, fill: 'white'});	

var mShapeYaxis = paper3.path("M " + (AISCstartingX+100) + " " + (AISCstartingY-25) + " l 0 260");
mShapeYaxis.attr({stroke: 'white', 'stroke-width': 2, fill: '#00ccff', 'stroke-dasharray': '-'});

var mYYaxisLabel = paper3.text((AISCstartingX+118), (AISCstartingY-30), "y-y");
mYYaxisLabel.attr({'font-size': 16, fill: 'white'});

var mShapeSet = paper3.set();
mShapeSet.push(mShape, mShapeXaxis, mShapeYaxis);
var mShapeSetwithLabels = paper3.set();
mShapeSetwithLabels.push(mShapeSet, mXXaxisLabel, mYYaxisLabel);
mShapeSetwithLabels.hide();

// Disable designation dropdown if a shape type has not been selected; Show correct diagram based on shape type selection
$("#AISCshapeTypes").change(function(){
	if ($("#AISCshapeTypes").val() !== "default") {
		$("#AISCdesignations").attr("disabled", false);
	}
	else
	{
		$("#AISCdesignations").attr("disabled", true);
		hideAllAISCdiagrams();
	}
	
	if ($("#AISCshapeTypes").val() === "W") {
		hideAllAISCdiagrams();
		wShapeSetwithLabels.show();
	}
	
	if ($("#AISCshapeTypes").val() === "S") {
		hideAllAISCdiagrams();
		sShapeSetwithLabels.show();
	}
	
	if ($("#AISCshapeTypes").val() === "HP") {
		hideAllAISCdiagrams();
		hpShapeSetwithLabels.show();
	}
	
	if ($("#AISCshapeTypes").val() === "M") {
		hideAllAISCdiagrams();
		mShapeSetwithLabels.show();
	}
	
});

function hideAllAISCdiagrams() {
		wShapeSetwithLabels.hide();
		sShapeSetwithLabels.hide();
		hpShapeSetwithLabels.hide();
		mShapeSetwithLabels.hide();
}

// Update diagram rotations based on axis selection
var axisAnimateSpeed = 500;

$("#xxAxisRadio").change(function(){
	// Rotate W diagram
	wShapeSet.animate({transform: "r" - 90}, axisAnimateSpeed);
	wXXaxisLabel.animate({x: [AISCstartingX+180], y: [AISCstartingY+92]}, animateSpeed);
	wYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY-15]}, animateSpeed);
	// Rotate S diagram
	sShapeSet.animate({transform: "r" - 90}, axisAnimateSpeed);
	sXXaxisLabel.animate({x: [AISCstartingX+180], y: [AISCstartingY+92]}, animateSpeed);
	sYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY-15]}, animateSpeed);
	// Rotate HP diagram
	hpShapeSet.animate({transform: "r" - 90}, axisAnimateSpeed);
	hpXXaxisLabel.animate({x: [AISCstartingX+180], y: [AISCstartingY+92]}, animateSpeed);
	hpYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY-15]}, animateSpeed);
	// Rotate M diagram
	mShapeSet.animate({transform: "r" - 90}, axisAnimateSpeed);
	mXXaxisLabel.animate({x: [AISCstartingX+180], y: [AISCstartingY+92]}, animateSpeed);
	mYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY-15]}, animateSpeed);
	
});

$("#yyAxisRadio").change(function(){
	// Rotate W diagram
	wShapeSet.animate({transform: "r" + 90}, axisAnimateSpeed);
	wXXaxisLabel.animate({x: [AISCstartingX+225], y: [AISCstartingY+92]}, animateSpeed);
	wYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY+10]}, animateSpeed);
	// Rotate S diagram
	sShapeSet.animate({transform: "r" + 90}, axisAnimateSpeed);
	sXXaxisLabel.animate({x: [AISCstartingX+225], y: [AISCstartingY+92]}, animateSpeed);
	sYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY+10]}, animateSpeed);
	// Rotate HP diagram
	hpShapeSet.animate({transform: "r" + 90}, axisAnimateSpeed);
	hpXXaxisLabel.animate({x: [AISCstartingX+225], y: [AISCstartingY+92]}, animateSpeed);
	hpYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY+10]}, animateSpeed);
	// Rotate M diagram
	mShapeSet.animate({transform: "r" + 90}, axisAnimateSpeed);
	mXXaxisLabel.animate({x: [AISCstartingX+225], y: [AISCstartingY+92]}, animateSpeed);
	mYYaxisLabel.animate({x: [AISCstartingX+118], y: [AISCstartingY+10]}, animateSpeed);
});

