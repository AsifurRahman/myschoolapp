$('#doctorSubmitButton').click(function(event) {
    event.preventDefault();
    addDoctorForm();
});

function addDoctorForm(){

    var formValues =$('#doctorForm').serializeJSON();
    console.log(formValues);
    var doctorFormData = JSON.stringify(formValues);
    console.log(doctorFormData);
    $.ajax({
        url: '/doctorCreate',
        type: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: doctorFormData,
        processData: false,
        success: function (data) {
            alert("Successfully Saved");
        },
        error: function (err) {
            console.log(err);
        }
    });

}
