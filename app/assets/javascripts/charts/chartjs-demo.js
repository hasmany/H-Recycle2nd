var ready = function() {
    $(function () {
        var lineData = {
          labels: ["January", "February", "March", "April", "May", "June", "July","August","September","October","November","December"],
            datasets: [
                {
                    label: "Paper",
                    fillColor: "rgba(163,225,212,0.5)",
                    strokeColor: "rgba(163,225,212,.7)",
                    pointColor: "rgba(163,225,212,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(163,225,212,1)",
                    data: [65, 59, 80, 81, 56, 55, 40,12,56,92,23,67]
                },
                {
                    label: "Plastic",
                    fillColor: "rgba(35,198,200,0.5)",
                    strokeColor: "rgba(35,198,200,0.7)",
                    pointColor: "rgba(35,198,200,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(35,198,200,1)",
                    data: [28, 48, 40, 19, 86, 27, 90,17,29,43,76,14]
                },
                {
                    label: "Glass/Metal",
                    fillColor: "rgba(28,132,198,0.5)",
                    strokeColor: "rgba(28,132,198,0.7)",
                    pointColor: "rgba(28,132,198,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(28,132,198,1)",
                    data: [18, 28, 72, 34, 56, 94, 7,56,13,89,36,45]
                }
            ]
        };


            var lineOptions = {
                scaleShowGridLines: true,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                bezierCurve: true,
                bezierCurveTension: 0.4,
                pointDot: true,
                pointDotRadius: 4,
                pointDotStrokeWidth: 1,
                pointHitDetectionRadius: 20,
                datasetStroke: true,
                datasetStrokeWidth: 2,
                datasetFill: true,
                responsive: true,
            };

            if (document.getElementById('lineChart')) {
                var ctx = document.getElementById("lineChart").getContext("2d");
                var myNewChart = new Chart(ctx).Line(lineData, lineOptions);
            }

            var doughnutData = [
                {
                    value: parseInt($($('.paperText')[0]).text()) || 1e-1 ,
                    color: "#a3e1d4",
                    highlight: "#1ab394",
                    label: "Paper"
                },
                {
                    value: parseInt($($('.plasticText')[0]).text()) || 1e-1,
                    color: "#23c6c8",
                    highlight: "#1ab394",
                    label: "Plastic"
                },
                {
                    value: parseInt($($('.glassText')[0]).text()) || 1e-1,
                    color: "#1c84c6",
                    highlight: "#1ab394",
                    label: "Glass/Metal"
                }
            ];

            var doughnutOptions = {
                segmentShowStroke: true,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 45, // This is 0 for Pie charts
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
            };

            if (document.getElementById('doughnutChart')) {
                var ctx = document.getElementById("doughnutChart").getContext("2d");
                var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
                window.myDoughnutChart = myNewChart;
            }

        });
};

$(document).ready(ready);
// Added on page load, for Rails turbolinks
$(document).on('page:load', ready);
