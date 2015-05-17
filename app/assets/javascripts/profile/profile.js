$(document).ready(function(){

  // Get recycle button
  var recycleButton = $('.saveRecycle');
  // Event Handler for chart animation and recycle creation
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
        // Set doughnutChart and text value by type
        if (data.recycle_type === "Paper") {
          myDoughnutChart.segments[0].value += data.amount;
          $('.paperText span').fadeOut(1000, function() {
            $('.paperText span').html(parseInt($('.paperText span').html()) + data.amount);
            $('.paperText span').fadeIn(1000);
          })
        } else if (data.recycle_type === "Plastic") {
          myDoughnutChart.segments[1].value += data.amount;
          $('.plasticText span').fadeOut(1000, function() {
            $('.plasticText span').html(parseInt($('.plasticText span').html()) + data.amount);
            $('.plasticText span').fadeIn(1000);
          });
        } else {
          $('.glassText span').fadeOut(1000, function() {
            $('.glassText span').html(parseInt($('.glassText span').html()) + data.amount);
            $('.glassText span').fadeIn(1000);
          })
          myDoughnutChart.segments[2].value +=data.amount;
        }

        // Animate doughnutChart
        myDoughnutChart.update();
      }
    });


  });
});
