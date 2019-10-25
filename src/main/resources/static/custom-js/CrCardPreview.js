$(document).ready(function () {
    $('#tab-crdCardDetails').click(function () {
        ////alert("cr card clicked...");
        var dt={
            name : "name",
            cid : $("#personalCustomerId").val()
        };
        ////alert($("#personalCustomerId").val());
        var id = $("#personalCustomerId").val();

        $.ajax({
            url: '/card/cr-card/homepreview',
            type: "GET",
            data: dt,
            dataType: 'json',
            success: function (data) {
                ////alert("Success");
                $('#crCardHome').hide();
                $('#crCardHomeDivView').show();
                $('#crCardHomeId').val(data.crCardHomeInfo.crCardHomeId);
                $('#vsmsAlert').text(data.crCardHomeInfo.smsAlert);
                $('#vmailingAddress').text(data.crCardHomeInfo.mailingAddress);
            },
            error: function () {
                ////alert("Error");
            }
        });

        $.ajax({
            url: "/card/customer-info/cr-card-details/list?id="+id,
            type: "GET",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) {
                //alert("Success");
                $('#crdAutoInfo_tBody').replaceWith("<tbody id=\"crdAutoInfo_tBody\" >\n" +
                    "\t\t\t\t\t\t\t</tbody>");
                for(var i=0;i<data.crCardDetailsInfoList.length;i++) {
                    if (data.crCardDetailsInfoList[i] != null) {
                        var str = "<tr>" +
                            "<td style=\"display:none;\">" + data.crCardDetailsInfoList[i].crdCardDetId + "</td>" +
                            "<td>" + data.crCardDetailsInfoList[i].monthlyPayment + "</td>" +
                            "<td>" + data.crCardDetailsInfoList[i].accountName + "</td>" +
                            "<td>" + data.crCardDetailsInfoList[i].accountNo + "</td>" +
                            "<td>" + data.crCardDetailsInfoList[i].currencyType + "</td>" +
                            "<td>" + data.crCardDetailsInfoList[i].accountType + "</td>" +
                            "<td><a class=\"btn btn-xs\" onclick=\"editCrRow(this)\"><i class=\"fa fa-view\"></i>View</a>\n" +
                            "</tr>";
                        $('#crdAutoInfo_tBody').append(str);
                    }
                }
            },
            error: function () {
                //alert("Error");
            }
        });

    });

})


function editCrRow(node){
    //alert("Edit Button Clicked!");
    var row=node.parentNode.parentNode;
    globalRow=row;
    $("#crdCardDetId").val(row.cells[0].innerHTML);
    $("#monthlyPayment").val(row.cells[1].innerHTML);
    $("#accountName").val(row.cells[2].innerHTML);
    $("#accountNo").val(row.cells[3].innerHTML);
    $("#currencyType").val(row.cells[4].innerHTML);
    $("#accountType").val(row.cells[5].innerHTML);

    $('#crdAutoInfoForm').find(':input').attr('disabled', 'disabled');
    $('#creditCardDetailsSave').hide();
    $('#crdAuto-Info-Modal').modal({show:true, backdrop:false, keyboard:false});
    $('#crdAuto-Info-Modal').appendTo("body");
}