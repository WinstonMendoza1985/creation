function checkDevice() {
  let isHandheld = window.matchMedia("only screen and (max-width: 768px)").matches;
  return isHandheld;
};

function renderChart(){
  globalChart.destroy();
  reset();
  showChartSingle(globalData);
}

$(window).resize(function() {
  clearTimeout(window.resizedFinished);
  window.resizedFinished = setTimeout(function(){
    checkDevice();
    renderChart();
  }, 250);
});

checkDevice();






var chartCanvas = document.getElementById("chart").getContext('2d');
var chartLabels = ["Artificial Intelligence", "Bio-Innovation", ["Space & Earth","Innovation"], ["Materials & Energy","Innovation"], "Metaverse", ["Next-Generation","Robotics"], ["Intelligent","Digital Twins"],["Next-Generation","Computing"]];

var chartBackgroundColorDefault = "rgba(204, 0, 255, 0.7)";
var chartPointBackgroundColorDefault = "#7600BB";

var chartBackgroundColorOverlay = "rgb(51 0 255 / 50%)";
var chartPointBackgroundColorOverlay = "#3A20A1";


var globalData = [62, 13, 12, 27, 32, 36, 35, 35];
var adData = [56,10,19,31,17,40,37,44];
var autoData = [47,9,10,21,46,33,52,36];
var bankingData = [65,5,9,6,43,47,26,31];
var biopharmaData = [58,33,3,10,17,27,38,43];
var capitalMarketsData = [56,11,9,14,34,43,23,25];
var chemicalsData = [60,27,13,35,21,32,41,37];
var commsData = [59,8,36,21,36,42,39,44];
var cgsData = [60,15,12,29,28,22,44,38];
var energyData = [63,16,13,47,29,32,45,35];
var healthData = [63,37,10,19,27,30,26,30];
var highTechData = [57,13,16,28,41,47,39,32];
var industrialGoodsEquipmentData = [65,8,8,36,22,31,45,36];
var insuranceData = [63,7,5,17,33,43,24,28];
var mediaEntertainmentData = [60,6,27,12,33,38,30,43];
var medTechData = [48,50,8,38,17,27,28,22];
var naturalResourcesData = [58,4,7,37,8,15,39,36];
var publicServiceData = [64,8,5,14,42,47,24,29];
var retailData = [59,9,12,22,41,31,31,36];
var softwarePlatformsData = [57,12,13,33,30,38,32,39];
var travelData = [74,9,15,24,42,45,43,47];
var utilitiesData = [65,7,9,53,17,23,31,28];


var ticksColor = "#ffffff";
var pointLabelsColor = "#ffffff";


$("input#light-mode").change(function() {
  if(this.checked) {
    // light mode
    $("body").addClass("light-mode");
    $("h3.chart-title").removeClass("text-white");
    ticksColor = "#000000";
    pointLabelsColor = "#000000";
    reset();
    showChartSingle(globalData);
  } else {
    // dark mode
    $("body").removeClass("light-mode");
    $("h3.chart-title").addClass("text-white");
    ticksColor = "#ffffff";
    pointLabelsColor = "#ffffff";
    reset();
    showChartSingle(globalData);
  }
});

var globalChart;

// single chart setup dark mode
function showChartSingle(optionOne){
  if (globalChart != undefined){
    globalChart.destroy();
  }

  globalChart = new Chart(chartCanvas, {
    type: 'radar',
    data: {
      labels: chartLabels,
      datasets: [{
        backgroundColor: chartBackgroundColorDefault,
        pointBackgroundColor : chartPointBackgroundColorDefault,
        data: optionOne,
      }]
    },
    options: {
      scales: {
        r: {
          ticks: {
            z: 1,
            backdropColor: "transparent",
            color: ticksColor,
            padding: 20,
            callback: function(value, index, values) {
              return value + "%";
            },
            min: 0,
            max: 100,
            stepSize: 10
          },
          grid: {
            color: "#565656",
            lineWidth: 1,
          },
          angleLines: {
           color: '#565656'
         },
         pointLabels: {
            display: true,
            color: pointLabelsColor,
            font: {
              size: 11,
            }
          }
        }
      },
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.formattedValue + '%';
           }
          }
        },
      }
    }
  });
}

// run on load
showChartSingle(globalData)



// compate chart setup dark mode
function showCompareChart(optionOne, optionTwo){
  if (globalChart != undefined){
    globalChart.destroy();
  }
  globalChart = new Chart(chartCanvas, {
    type: 'radar',
    data: {
      labels: chartLabels,
      datasets: [{
        backgroundColor: chartBackgroundColorOverlay,
        pointBackgroundColor : chartPointBackgroundColorOverlay,
        data: optionTwo,
      }, {
        backgroundColor: chartBackgroundColorDefault,
        pointBackgroundColor : chartPointBackgroundColorDefault,
        data: optionOne,
      }]
    },
    options: {
      scales: {
        r: {
          ticks: {
            z: 1,
            backdropColor: "transparent",
            color: ticksColor,
            padding: 20,
            callback: function(value, index, values) {
              return value + "%";
            },
            min: 0,
            max: 100,
            stepSize: 10
          },
          grid: {
            color: "#565656",
            lineWidth: 1,
          },
          angleLines: {
           color: '#565656'
         },
         pointLabels: {
            display: true,
            color: pointLabelsColor,
            font: {
              size: 11,
            }
          }
        }
      },

      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              return context.formattedValue + '%';
           }
          }
        },
      }
    }
  });
}




var selectedIndustry = "";

// select industry dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("select-industry-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  overflowContainer = document.createElement("DIV");
  overflowContainer.setAttribute("class", "select-items-scroll-container");

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
              selectedIndustry = s.value;
              showChartData(selectedIndustry, selectedCompareIndustry);
              showChartTitle(selectedIndustry, selectedCompareIndustry)
              // show reset button when dropdown is used
              $(".dropdown-holder-box span.reset-button").css("display", "flex");
              $(".dropdown-holder-box .select-compare-dropdown").parent().removeClass("d-none").addClass("d-flex");
            break;
          }
        }
        h.click();
    });
    b.appendChild(overflowContainer);
    overflowContainer.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    // hide close compare boxes
    $(".close-compare-box").addClass("d-none");
    // hide compare boxes
    $(".compare-box").addClass("d-none");
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}


var selectedCompareIndustry = "";
// select compare dropdown
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("select-compare-dropdown");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  overflowContainer = document.createElement("DIV");
  overflowContainer.setAttribute("class", "select-items-scroll-container");

  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /* When an item is clicked, update the original select box,
        and the selected item: */
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
              selectedCompareIndustry = s.value;
              showChartData(selectedIndustry, selectedCompareIndustry);
              showChartTitle(selectedIndustry, selectedCompareIndustry);
              // show reset button when dropdown is used
            break;
          }
        }
        h.click();
    });
    b.appendChild(overflowContainer);
    overflowContainer.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    // hide close compare boxes
    $(".close-compare-box").addClass("d-none");
    // hide compare boxes
    $(".compare-box").addClass("d-none");
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}



// close custom dropdown
function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);



function fillSelectedTextBox(){
  $(".data-boxes .first-compare-box .compare-text-box p").html('<span>' + selectedIndustry + '</span><span>' + $('.data-boxes .first-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry + '"] span:eq(1)').text().slice(0,-1) + '<span class="fs-light">%</span></span>');
  $(".data-boxes .second-compare-box .compare-text-box p").html('<span>' + selectedIndustry + '</span><span>' + $('.data-boxes .second-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry + '"] span:eq(1)').text().slice(0,-1) + '<span class="fs-light">%</span></span>');
  $(".data-boxes .third-compare-box .compare-text-box p").html('<span>' + selectedIndustry + '</span><span>' + $('.data-boxes .third-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry + '"] span:eq(1)').text().slice(0,-1) + '<span class="fs-light">%</span></span>');

  // fourth text box fill 3 title
  $(".data-boxes .fourth-compare-box .compare-text-box h3").text(selectedIndustry);
  // fourth text box fill top 3 list
  $(".data-boxes .fourth-compare-box .compare-text-box p:eq(0)").text($('.data-boxes .fourth-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry +'"] p:eq(0)').text());
  $(".data-boxes .fourth-compare-box .compare-text-box p:eq(1)").text($('.data-boxes .fourth-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry +'"] p:eq(1)').text());
  $(".data-boxes .fourth-compare-box .compare-text-box p:eq(2)").text($('.data-boxes .fourth-compare-box .compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry +'"] p:eq(2)').text());

}


function showChartTitle(selectedIndustry, selectedCompareIndustry) {
  // show chart text
  if (checkDevice() == false ){ // is not mobile
    if (selectedCompareIndustry.length > 1) {
      // shorten titles when comparing
      if (selectedIndustry == "Aerospace & Defense"){
        selectedIndustry = "A&D"
      }
      if (selectedCompareIndustry == "Aerospace & Defense"){
        selectedCompareIndustry = "A&D"
      }

      if (selectedIndustry == "Consumer Goods & Services"){
        selectedIndustry = "CG&S"
      }
      if (selectedCompareIndustry == "Consumer Goods & Services"){
        selectedCompareIndustry = "CG&S"
      }

      if (selectedIndustry == "Industrial Goods & Equipment"){
        selectedIndustry = "IG&E"
      }
      if (selectedCompareIndustry == "Industrial Goods & Equipment"){
        selectedCompareIndustry = "IG&E"
      }

      if (selectedIndustry == "Media & Entertainment"){
        selectedIndustry = "M&E"
      }
      if (selectedCompareIndustry == "Media & Entertainment"){
        selectedCompareIndustry = "M&E"
      }

      if (selectedIndustry == "Software & Platforms"){
        selectedIndustry = "S&P"
      }
      if (selectedCompareIndustry == "Software & Platforms"){
        selectedCompareIndustry = "S&P"
      }

      $(".chart-holder h3").text(selectedIndustry + " vs " + selectedCompareIndustry);
    } else {
      $(".chart-holder h3").text(selectedIndustry);
    }
  } else {
    if (selectedIndustry == "Global"){
      $(".chart-holder h3").text(selectedIndustry);
    } else {
      $(".chart-holder h3").text("");
    }
  }
}


function showChartData(selectedIndustry,selectedCompareIndustry) {
  // show COMPARE text, show conpare text box
  $(".data-boxes h3, .data-boxes .compare-text-box").removeClass("d-none");
  // remove selectd class from elemnts in compare box
  $(".compare-box .compare-box-scrollbar").find(".selected").removeClass("selected");
  // add selected class to selected industry text in compare box
  $('.compare-box .compare-box-scrollbar [data-attributes="'+ selectedIndustry + '"]').addClass("selected");

  switch (selectedIndustry) {
    case "Global":
      selectedIndustry = globalData;
    break;
    case "Aerospace & Defense":
      selectedIndustry = adData;
    break;
    case "Auto":
      selectedIndustry =  autoData;
    break;
    case "Banking":
      selectedIndustry = bankingData;
    break;
    case "Biopharma":
      selectedIndustry = biopharmaData;
    break;
    case "Capital Markets":
      selectedIndustry = capitalMarketsData;
    break;
    case "Chemicals":
      selectedIndustry = chemicalsData;
    break;
    case "Comms":
      selectedIndustry = commsData;
    break;
    case "Consumer Goods & Services":
      selectedIndustry = cgsData;
    break;
    case "Energy":
      selectedIndustry = energyData;
    break;
    case "Health":
      selectedIndustry = healthData;
    break;
    case "High Tech":
      selectedIndustry = highTechData;
    break;
    case "Industrial Goods & Equipment":
      selectedIndustry = industrialGoodsEquipmentData;
    break;
    case "Insurance":
      selectedIndustry = insuranceData;
    break;
    case "Media & Entertainment":
      selectedIndustry = mediaEntertainmentData;
    break;
    case "MedTech":
      selectedIndustry = medTechData;
    break;
    case "Natural Resources":
      selectedIndustry = naturalResourcesData;
    break;
    case "Public Service":
      selectedIndustry = publicServiceData;
    break;
    case "Retail":
      selectedIndustry = retailData;
    break;
    case "Software & Platforms":
      selectedIndustry = softwarePlatformsData;
    break;
    case "Travel":
      selectedIndustry = travelData;
    break;
    case "Utilities":
      selectedIndustry = utilitiesData;
    break;
  }


  if (selectedCompareIndustry != undefined) {
    switch (selectedCompareIndustry) {
      case "Global":
        selectedCompareIndustry = globalData;
      break;
      case "Aerospace & Defense":
        selectedCompareIndustry = adData;
      break;
      case "Auto":
        selectedCompareIndustry =  autoData;
      break;
      case "Banking":
        selectedCompareIndustry = bankingData;
      break;
      case "Biopharma":
        selectedCompareIndustry = biopharmaData;
      break;
      case "Capital Markets":
        selectedCompareIndustry = capitalMarketsData;
      break;
      case "Chemicals":
        selectedCompareIndustry = chemicalsData;
      break;
      case "Comms":
        selectedCompareIndustry = commsData;
      break;
      case "Consumer Goods & Services":
        selectedCompareIndustry = cgsData;
      break;
      case "Energy":
        selectedCompareIndustry = energyData;
      break;
      case "Health":
        selectedCompareIndustry = healthData;
      break;
      case "High Tech":
        selectedCompareIndustry = highTechData;
      break;
      case "Industrial Goods & Equipment":
        selectedCompareIndustry = industrialGoodsEquipmentData;
      break;
      case "Insurance":
        selectedCompareIndustry = insuranceData;
      break;
      case "Media & Entertainment":
        selectedCompareIndustry = mediaEntertainmentData;
      break;
      case "MedTech":
        selectedCompareIndustry = medTechData;
      break;
      case "Natural Resources":
        selectedCompareIndustry = naturalResourcesData;
      break;
      case "Public Service":
        selectedCompareIndustry = publicServiceData;
      break;
      case "Retail":
        selectedCompareIndustry = retailData;
      break;
      case "Software & Platforms":
        selectedCompareIndustry = softwarePlatformsData;
      break;
      case "Travel":
        selectedCompareIndustry = travelData;
      break;
      case "Utilities":
        selectedCompareIndustry = utilitiesData;
      break;
    }
  }

  if (selectedCompareIndustry != undefined) {
    showCompareChart(selectedIndustry,selectedCompareIndustry);
    fillSelectedTextBox(selectedIndustry);
  } else {
    showChartSingle(selectedIndustry)
    fillSelectedTextBox(selectedIndustry);
  }

  $("h3.dropdown-h3-title").removeClass("d-none");
  $(".data-boxes h3, .data-boxes .compare-text-box").removeClass("d-none");
}


//  reset button
$(".dropdown-holder-box span.reset-button").click(function(){
  reset();
})

function reset(){
  $(this).css("display", "none");
  selectedIndustry = "Global";
  selectedCompareIndustry = "";
  // select industry dropdown
  $(".select-industry-dropdown .select-selected").text("Select your Industry:");
  $(".select-industry-dropdown .select-items div").removeClass("same-as-selected not-selectable");
  // select compare industry dropdown
  $(".select-compare-dropdown .select-selected").text("Please select:");
  $(".select-compare-dropdown .select-items div").removeClass("same-as-selected not-selectable");
  showChartData(selectedIndustry);
  showChartTitle(selectedIndustry, selectedCompareIndustry);
  $(".compare-text-box").addClass("d-none");
  $(".data-boxes .bg-black h3").addClass("d-none");
  $(".compare-box").addClass("d-none");
  $(".close-compare-box").addClass("d-none")
  $("h3.dropdown-h3-title").addClass("d-none");
  $(".dropdown-holder-box .select-compare-dropdown").parent().removeClass("d-flex").addClass("d-none");
}



// open conmpare box
$(".compare-text-box").click(function(){
  $(this).parent().parent().find(".compare-box").removeClass("d-none");
  $(this).parent().parent().find(".close-compare-box").removeClass("d-none")
})

// close compare box
$(".close-compare-box").click(function(){
  $(this).addClass("d-none");
  $(this).next().addClass("d-none");
})

$(".select-items .select-items-scroll-container div").each(function(){ 
  var title = $(this).html();
  var moduleName = 'Interavtive Module';
  //$(this).attr('data-analytics-template-zone', title);
  $(this).attr('title', title);
  $(this).attr('data-analytics-link-name', title);
  $(this).attr('data-analytics-module-name', moduleName);
  $(this).attr('data-analytics-link-type', 'cta');
});