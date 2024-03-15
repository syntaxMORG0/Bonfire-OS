// Make the window draggable
dragElement1(document.getElementById("floating-window1"));

function dragElement1(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header1")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "-header1").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown1;
    }

    function dragMouseDown1(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement1;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag1;
    }

    function elementDrag1(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement1() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Close the window
// Close the window
function closeWindow1() {
    var floatingWindow = document.getElementById("floating-window1");
    if (floatingWindow) {
        floatingWindow.style.display = "none";
    }
}


function showWindow1() {
    var floatingWindow = document.getElementById("floating-window1");
    if (!floatingWindow) {
        // If the window doesn't exist, do nothing
        return;
    }
    
    // Toggle the display of the window
    if (floatingWindow.style.display === "none") {
        floatingWindow.style.display = "block";
    } else {
        floatingWindow.style.display = "none";
    }
}