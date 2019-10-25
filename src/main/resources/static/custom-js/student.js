$("#studentSubmitButton").click(function (event) {
    event.preventDefault();
    studentForm();
});

function studentForm() {
    if (studentFormValidate() === false) {
        return;
    }
    var formData = $("#studentForm").serializeJSON();
    console.log(formData);
    var jsonData = JSON.stringify(formData);
    console.log(jsonData);
    $.ajax({
        url: "/student/save",
        type: "POST",
        data: jsonData,
        contentType: "application/json",
        dataType: "json",
        processData: false,
        success: function (data) {
            $("#studentModal").modal('toggle');
            var str = "<tr>" +
                "<td>" + data.student.id + "</td>" +
                "<td>" + data.student.name + "</td>" +
                "<td>" + data.student.department + "</td>" +
                "<td>" + "<a class=\"btn btn-warning btn-sm\" onclick=\"editStudent(this)\">Update</a>" + "</td>" +
                "</tr>";
            $("#studentTableBody").append(str);
        },
        error: function (error) {
            alert(error);
        }
    })
}


$("#base-tab2").click(function () {
    $.ajax({
        url: "/student/list",
        type: "GET",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        processData: false,
        success: function (data) {
            $("#studentTableBody").replaceWith("<tbody id=\"studentTableBody\">\n" +
                "</tbody>");
            for (var i = 0; i < data.studentList.length; i++) {
                var str = "<tr>" +
                    "<td>" + data.studentList[i].id + "</td>" +
                    "<td>" + data.studentList[i].name + "</td>" +
                    "<td>" + data.studentList[i].department + "</td>" +
                    "<td>" + "<a class=\"btn btn-warning btn-sm\" onclick=\"editStudent(this)\">Update</a>" + "</td>" +
                    "</tr>";
                $("#studentTableBody").append(str);
            }
        },
        error: function (error) {
            alert(error);
        }
    })
});


function editStudent(node) {
    var row = node.parentNode.parentNode;
    console.log(row);
    console.log(row.cells[1].innerHTML);
    $("#id").val(row.cells[0].innerHTML);
    $("#name").val(row.cells[1].innerHTML);
    $("#department").val(row.cells[2].innerHTML);
    $("#studentModal").modal('toggle');
}


function studentFormValidate() {
    var name = $('#name').val();
    if (name == "") {
        console.log("Name Error")
        alert("Name Must be inserted!");
        $("#name").focus();
        return false;
    }
    if ($("#department").val() == '') {
        alert("Department Must be inserted!");
        $("#department").focus();
        return false;
    }
}

$("#studentModalClose").click(function (){
    $('#studentForm').trigger("reset");
});

$("#studentModalCross").click(function (){
    $('#studentForm').trigger("reset");
});

