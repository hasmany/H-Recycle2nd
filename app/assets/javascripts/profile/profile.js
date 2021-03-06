$(document).ready(function(){

  // Get recycle button
  var recycleButton = $('.saveRecycle');
  // Event Handler for chart animation and recycle creation
  recycleButton.on('click', function() {
    // Input validation
    if (!parseInt($('#ionrange_1').attr('value') ) || $('.chosen-select option:selected').text() === "Select") {
     alert('Please select an amount and/or what you recycled.');
     return false;
    }
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
          $('.paperText.desktop span').fadeOut(1000, function() {
            $('.paperText.desktop span').html(parseInt($('.paperText.desktop span').html()) + data.amount);
            $('.paperText.desktop  span').fadeIn(1000);
          })
          $('.paperText.mobile span').fadeOut(1000, function() {
            $('.paperText.mobile span').html(parseInt($('.paperText.mobile span').html()) + data.amount);
            $('.paperText.mobile  span').fadeIn(1000);
          })
        } else if (data.recycle_type === "Plastic") {
          myDoughnutChart.segments[1].value += data.amount;
          $('.plasticText.desktop span').fadeOut(1000, function() {
            $('.plasticText.desktop span').html(parseInt($('.plasticText.desktop  span').html()) + data.amount);
            $('.plasticText.desktop span').fadeIn(1000);
          });
           $('.plasticText.mobile span').fadeOut(1000, function() {
            $('.plasticText.mobile span').html(parseInt($('.plasticText.mobile  span').html()) + data.amount);
            $('.plasticText.mobile span').fadeIn(1000);
          });
        } else {
          $('.glassText.desktop span').fadeOut(1000, function() {
            $('.glassText.desktop span').html(parseInt($('.glassText.desktop span').html()) + data.amount);
            $('.glassText.desktop span').fadeIn(1000);
          });
          $('.glassText.mobile span').fadeOut(1000, function() {
            $('.glassText.mobile span').html(parseInt($('.glassText.mobile span').html()) + data.amount);
            $('.glassText.mobile span').fadeIn(1000);
          });
          myDoughnutChart.segments[2].value +=data.amount;
        }

        // Animate doughnutChart
        myDoughnutChart.update();
      }
    });


  });
  $('.showTable').on('click', function(){
    console.log('show table');
    var table = document.querySelector('.table tbody');
    $('.table tbody').empty();
    $.ajax('/recyclables',{
      type: "GET",
      success: function(data) {
        for (var i = 0, iLen = data.length; i < iLen; i++) {
          var tableRow = document.createElement('tr');

          var dateData = document.createElement('td');
          dateData.appendChild(document.createTextNode(data[i].recycle_date));

          var typeData = document.createElement('td');
          typeData.appendChild(document.createTextNode(data[i].recycle_type));

          var amountData = document.createElement('td');
          amountData.appendChild(document.createTextNode(data[i].amount));

          tableRow.appendChild(dateData);
          tableRow.appendChild(typeData);
          tableRow.appendChild(amountData);
          table.appendChild(tableRow);
        }
        $('#myModal').modal();
        console.log('called index');
        console.log(data);
      }
    });
  })
  // $('.showTable').on('click', function(){
  //   $.ajax('/recyclables',{
  //     type: "GET",
  //     data: user_id: document.location.pathname.split('/')[2],
  //     success: function(data) {
  //       console.log('called index');
  //     }
  //   })
  // })
});
