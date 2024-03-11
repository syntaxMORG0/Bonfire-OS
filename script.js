// Make the window draggable
dragElement(document.getElementById("floating-window"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "-header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "-header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
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

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

// Close the window
function closeWindow() {
    var floatingWindow = document.getElementById("floating-window");
    floatingWindow.style.display = "none";
}

function openWindow() {
    // URL of the webpage to be displayed in the new window
    var url = "https://github.com";

    // Open a new window with the specified URL
    var newWindow = window.open(url, "github", "width=400,height=300");

    // Check if the new window was successfully opened
    if (newWindow) {
        // Optionally, you can add content to the new window
        newWindow.document.write("<h1>Loading...</h1>");
    } else {
        // If the window was blocked, inform the user
        alert("The popup window was blocked. Please allow popups for this site.");
    }
}