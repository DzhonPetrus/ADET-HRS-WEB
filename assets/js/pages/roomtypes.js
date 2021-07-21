$(function()
{
	loadTable();

	loadPricing = () => {
		$.ajax({
			url: BASE_URL + "pricing",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#pricing_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.pricing_id + "'>" + dataOptions.price_per_qty + "</option>";

						$("#pricing_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};

	loadPricing();






	// function to save/update record
   $("#roomtypes_form").on("submit", function (e)
    {
        e.preventDefault();
        trimInputFields();

        if ($("#roomtypes_form").parsley().validate())
        {
            var form_data = new FormData(this);


            if ($("#uuid").val() == "")
            {
                form_data.append("password", "P@ssw0rd");
                form_data.append("c_password", "P@ssw0rd");

                // add record
                $.ajax(
                    {
                        url: BASE_URL + "room_type",
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
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-center" },
		],
		columns: [
			{
				data: "room_type_id",
				name: "room_type_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "type",
				name: "type",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "description",
				name: "description",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "min_guest",
				name: "min_guest",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "max_guest",
				name: "max_guest",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "pricing_id",
				name: "pricing_id",
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
						aData["room_type_id"] +
						'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["room_type_id"] +
						'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["room_type_id"] +
						'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';
					return buttons; // same class in i element removed it from a element
				},
			},
		],
		ajax: 
		{
			url: BASE_URL + "room_type",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) 
		{
			let buttons = "";
			// info
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["room_type_id"] +
				'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["room_type_id"] +
				'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["room_type_id"] +
				'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';

			$("td:eq(0)", nRow).html(aData["room_type_id"]);
			$("td:eq(1)", nRow).html(aData["type"]);
			$("td:eq(2)", nRow).html(aData["description"]);
			$("td:eq(3)", nRow).html(aData["min_guest"]);
			$("td:eq(4)", nRow).html(aData["max_guest"]);
			$("td:eq(5)", nRow).html(aData["pricing_id"]);
			$("td:eq(6)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};