$(function()
{
	loadTable();
	// function to save/update record
    $("#tax_form").on("submit", function (e)
    {
        e.preventDefault();
        trimInputFields();

        if ($("#tax_form").parsley().validate())
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
                        url: BASE_URL + "tax",
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


//TABLEEEEEE
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
		aaColumns: [
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },

		],
		columns: [
			{
				data: "taxCode",
				name: "taxCode",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "percentage",
				name: "percentage",
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
						aData["taxCode"] +
						'\',0)" class="btn btn-light waves-effect"><i class="fa fa-eye font-size-16 align-middle"></i></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["taxCode"] +
						'\',1)" class="btn btn-success waves-effect"><i class="fa fa-pencil-alt font-size-16 align-middle"></i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["taxCode"] +
						'\',2)" class="btn btn-danger waves-effect"><i class="fa fa-trash font-size-16 align-middle"></i></button> ';
					return buttons; // same class in i element removed it from a element
				},
			},
		],
		ajax: 
		{
			url: BASE_URL + "tax",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) 
		{
			let buttons = "";
			// info
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["taxCode"] +
				'\',0)" class="btn btn-light waves-effect"><i class="fa fa-eye font-size-16 align-middle"></i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["taxCode"] +
				'\',1)" class="btn btn-success waves-effect"><i class="fa fa-pencil-alt font-size-16 align-middle"></i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["taxCode"] +
				'\',2)" class="btn btn-danger waves-effect"><i class="fa fa-trash font-size-16 align-middle"></i></button> ';

			$("td:eq(0)", nRow).html(aData["taxCode"]);
			$("td:eq(1)", nRow).html(aData["percentage"]);
			// $("td:eq(2)", nRow).html(aData["date_updated"]);
			$("td:eq(2)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};
// function to delete data
deleteData = (taxCode) => 
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
                url: BASE_URL + "tax/",
                type: "DELETE",
				data: {taxCode},
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
