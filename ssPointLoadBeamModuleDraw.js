// Draw beam diagrams - Can't pre-load this in main.php. Must wait for ssPointLoadBeamModule.php to be loaded so the Raphael ties
// to the drawing canvas work.

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