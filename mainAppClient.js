
// Collapse the module families
window.onload = function() {
       
       var x;
       x = document.getElementsByClassName("tablink");
       for (i = 0; i < x.length; i++) {
           x[i].style.display = "none";
       }
       
       toggleGroup('solutionsLink');
       $("#moduleViewer").empty();
	$("#moduleViewer").load('quickStartModule.php');
       
};

var sideNav = document.getElementById("sideNav");
var overlayBg = document.getElementById("myOverlay");

// Toggle between showing and hiding the sidenav, and add overlay effect
function w3_open() {
       $("#moduleViewer").empty();
       $("#moduleViewer").load('quickStartModule.php');
}

// Close the sidenav with the close button
function w3_close() {
    sideNav.style.display = "none";
    overlayBg.style.display = "none";
}
    
// Tab/Module Control
function openModule(evt, module) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-blue", "");
    }
    $("#moduleViewer").empty();
    $("#moduleViewer").load(module);
    evt.currentTarget.className += " w3-blue";
}

// Expand/Collapse Family Sections
function toggleGroup(groupName) {
    x = document.getElementsByClassName(groupName);
    if (x[0].style.display == "none") {
        $("#"+groupName).text(function () {
         return $(this).text().replace("+", "-"); 
        });
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "block";
        }
    }
    else {
        $("#"+groupName).text(function () {
         return $(this).text().replace("-", "+"); 
        });
       for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
      }
    }
}
