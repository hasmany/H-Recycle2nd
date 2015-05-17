$(document).ready(function(){

  // Get recycle button
  var recycleButton = $('.saveRecycle');
  // Event Handler
  recycleButton.on('click', function() {
  // Ajax call
    $.ajax('/recyclables',{
      type: "POST",
      data: { recycle_type: $('.chosen-select option:selected').text(),
        amount: $('#ionrange_1').attr('value') ,
        recycle_date: $('.recycle_date').val(),
        user_id: document.location.pathname.split('/')[2]
      },
  // On success
      success: function(data) {
        // Set doughnutChart value by type
        if (data.recycle_type === "Paper") {
          myDoughnutChart.segments[0].value += data.amount;
        } else if (data.recycle_type === "Plastic") {
          myDoughnutChart.segments[1].value += data.amount;
        } else {
          myDoughnutChart.segments[2].value +=data.amount;
        }
        // Animate doughnutChart
        myDoughnutChart.update();
      }
    });

  });
});
