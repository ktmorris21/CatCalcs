
// Collapse the module families
window.onload = function() {     
    var x;
    x = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }

    toggleGroup('solutionsLink');
    $(".moduleContent").hide();
    $("#quickStartModuleContent").show();
       
};

// Toggle between showing and hiding the sidenav, and add overlay effect
function w3_open() {
    toggleGroup('solutionsLink');
    $(".moduleContent").hide();
    $("#quickStartModuleContent").show();
}
    
// Tab/Module Control
function openModule(evt, module) {
    var i, tablinks;
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" w3-blue", "");
    }
    $(".moduleContent").hide();
    $("#"+module).show();
    evt.currentTarget.className += " w3-blue";
}

// Expand/Collapse Side Nav Family Sections
function toggleGroup(groupName) {
    // Get array of 
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
