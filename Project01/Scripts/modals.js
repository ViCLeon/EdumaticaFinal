function popup(employyeid) {

    $.ajax({
        type: 'get',
        url: '/employees/Edit/',
        data: {
            'id': employyeid
        },
        success: function (response) {
           // $("#contenedor").html(response);
            $("#show-modal").modal({ show: true,  keyboard: false })
            $("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

   // $("#contenedor").html("<span style='color:green'>Texto de Victor</span>");

};

function displayEmployees(departmentID) {

    $.ajax({
        type: 'get',
        url: '/service/Index/',
        data: {
            'departmentId': departmentID
        },
        success: function (response) {
            var row = "";
            $("#contenedor").html(response);
            //$("#contenedor").html(response);
            //$("#show-modal").modal({ show: true, keyboard: false })
            //$("#inner-show-modal").html(response);

        },
        error: function () {
            alert("error");
        }
    });

    // $("#contenedor").html("<span style='color:green'>Texto de Victor</span>");

};