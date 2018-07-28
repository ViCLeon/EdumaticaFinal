    window.onload = function() {

var dataPoints = [];
    
var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
	theme: "light2",
	title: {
        text: "Daily Sales Data"
},
	axisY: {
        title: "Units",
    titleFontSize: 24
},
	data: [{
        type: "column",
    yValueFormatString: "#,### Units",
    dataPoints: dataPoints
}]
});

//function addData(data) {
	//for (var i = 0; i < data.length; i++) {
      //  dataPoints.push({
        //    x: new Date(data[i].date),
          //  y: data[i].units
       // });
    //}
	//chart.render();

//}

        $.ajax({
            type: 'get',
            dataType: "json",
            url: '/service/getGraphicsData/',
            success: function (response) {

                $.each(response, function (k, v) {
                    //alert(v.units);

                    dataPoints.push({
                        x: new Date(v.date),
                        y: v.units
                    });

                });

                chart.render();

            },
            error: function () {
                alert("error");
            }
        });

        //$.getJSON("/Content/json/data.json", addData);

}