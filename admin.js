

function mov(){
  window.location.href = 'index.html';
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


document.addEventListener('DOMContentLoaded', function() {
  new TradingView.widget({
      "container_id": "basic-area-chart-demo",
      "width": "100%",
      "height": "100%",
      "autosize": true,
      "symbol": "AAPL",
      "interval": "D",
      "timezone": "exchange",
      "theme": "light",
      "style": "3",
      "hide_top_toolbar": true,
      "save_image": false,
      "locale": "en"
  });
});






