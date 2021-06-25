$(function()
{
	loadTable();
	// function to save/update record
    $("#pricing_form").on("submit", function (e)
    {
        e.preventDefault();
        trimInputFields();

        if ($("#pricing_form").parsley().validate())
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
                        url: BASE_URL + "pricing",
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
			{ sClass: "text-center" },
		],
		columns: [
			{
				data: "pricing_id",
				name: "pricing_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "price_per_qty",
				name: "price_per_qty",
				searchable: true,
				className: "dtr-control",
			},
            {
				data: "date_start",
				name: "date_start",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "date_end",
				name: "date_end",
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
						aData["pricing_id"] +
						'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["pricing_id"] +
						'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["pricing_id"] +
						'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';
					return buttons; // same class in i element removed it from a element
				},
			},
		],
		ajax: 
		{
			url: BASE_URL + "pricing",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) 
		{
			let buttons = "";
			// info
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["pricing_id"] +
				'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["pricing_id"] +
				'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["pricing_id"] +
				'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';

			$("td:eq(0)", nRow).html(aData["pricing_id"]);
			$("td:eq(1)", nRow).html(aData["price_per_qty"]);
            $("td:eq(2)", nRow).html(aData["date_start"]);
			$("td:eq(3)", nRow).html(aData["date_end"]);
			$("td:eq(5)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// function to delete data
deleteData = (pricing_id) => 
{
	
    Swal.fire(
    {
        title: "Are you sure you want to delete this record?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: !0,
        confirmButtonColor: "#34c38f",
        cancelButtonColor: "#f46a6a",
        confirmButtonText: "Yes, delete it!",
    })
    .then(function (t) 
    {
        // if user clickes yes, it will change the active status to "Not Active".
        if (t.value) 
        {
            $.ajax(
                {
                url: BASE_URL + "pricing",
                type: "DELETE",
				data: {pricing_id},
                dataType: "json",
				
				
                success: function (data) {
					

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
                error: function ({ responseJSON }) {},
            });
        }
    });
};