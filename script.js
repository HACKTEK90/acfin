(function() {
    var parts = ["aHR0cHM6Ly9hYy1maW53aXNlLnZlcmNlbC5hcHAv"]; 
    var iframe = document.createElement("iframe");
    iframe.src = atob(parts[0]); // Decode and set iframe src
    iframe.setAttribute("scrolling", "yes");
    iframe.setAttribute("loading", "lazy");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    document.getElementById("iframeContainer").appendChild(iframe);
})();



const dialog = document.getElementById('copyrightDialog');
const checkbox = document.getElementById('acknowledgeCheckbox');

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    // Fade out smoothly then hide
    dialog.classList.add('fade-out');
    setTimeout(() => {
      dialog.style.display = 'none';
    }, 400);
  }
});

// Show dialog on any tap/click if not acknowledged
document.addEventListener('click', () => {
  if (!checkbox.checked) {
    dialog.style.display = 'flex';
    dialog.classList.remove('fade-out');
  }
});







document.addEventListener("click", function (e) {
  const target = e.target.closest("a");
  if (target && target.href.includes("tax-calculator")) {
    e.preventDefault();
    alert("This link is blocked .");
  }
});


const fabToggle = document.getElementById('fabToggle');
const fabContainer = document.querySelector('.fab-container');

fabToggle.addEventListener('click', () => {
  fabContainer.classList.toggle('open');
});

