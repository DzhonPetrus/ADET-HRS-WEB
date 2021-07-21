$(function()
{
	loadTable();
	// function to save/update record
    $("#loyaltypoint_form").on("submit", function (e)
    {
        e.preventDefault();
        trimInputFields();

        if ($("#loyaltypoint_form").parsley().validate())
        {
            var form_data = new FormData(this);

console.table([...form_data]);
            if ($("#uuid").val() == "")
            {
                form_data.append("password", "P@ssw0rd");
                form_data.append("c_password", "P@ssw0rd");

                // add record
                $.ajax(
                    {
                        url: BASE_URL + "loyalty_point",
                        type: "POST",
                        data: form_data,
                        dataType: "JSON",
                        contentType: false,
                        processData: false,
                        cache: false,
                        success: function (data)
                        {
                            if (data.error == false)
                            {
                                notification("success", "Success!", data.message);
								loadTable();
                            }
                            else
                            {
                                notification("error", "Error!", data.message);
                            }
                        },
                        error: function({responseJSON})
                        {

                        }
                    });
            }
        }
    });
});
loadTable = () => 
{
	$.ajaxSetup(
    {
		headers: 
        {
			Accept: "application/json",
			Authorization: "Bearer " + token,
			ContentType: "application/x-www-form-urlencoded",
		},
	});

	$("#myTable").dataTable().fnClearTable();
	$("#myTable").dataTable().fnDraw();
	$("#myTable").dataTable().fnDestroy();
	$("#myTable").dataTable({
		responsive: true,
		serverSide: false,
		order: [[0, "desc"]],
		aLengthMenu: [5, 10, 20, 30, 50, 100],
		aoColumns: [
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-center" },
		],
		columns: [
			{
				data: "loyalty_point_id",
				name: "loyalty_point_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "points",
				name: "points",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: null,
				render: function (aData, type, row) 
				{
					let buttons = "";
					// info
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["user_id"] +
						'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["user_id"] +
						'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["user_id"] +
						'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';
					return buttons; // same class in i element removed it from a element
				},
			},
		],
		ajax: 
		{
			url: BASE_URL + "loyalty_point",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) 
		{
			let buttons = "";
			// info
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["loyalty_point_id"] +
				'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["loyalty_point_id"] +
				'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["loyalty_point_id"] +
				'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';

			$("td:eq(0)", nRow).html(aData["loyalty_point_id"]);
			$("td:eq(1)", nRow).html(aData["points"]);
			$("td:eq(2)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};