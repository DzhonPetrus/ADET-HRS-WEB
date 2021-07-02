$(function()
{
	loadTable();
	// function to save/update record
    $("#userin_form").on("submit", function (e)
    {
        e.preventDefault();
        trimInputFields();

        if ($("#userin_form").parsley().validate())
        {
			var loyalty_point_id;
            var form_data = new FormData(this);


            if ($("#uuid").val() == "")
            {
                form_data.append("password", "P@ssw0rd");
                form_data.append("c_password", "P@ssw0rd");

                // add record
                $.ajax(
					{
                        url: BASE_URL + "loyalty_point",
                        type: "POST",
						async: false,
                        data: form_data,
                        dataType: "JSON",
                        contentType: false,
                        processData: false,
                        cache: false,
                        success: function (data)
                        {
                            if (data.error == false)
                            {
								loyalty_point_id = data.data.loyalty_point_id;
                            }
                            else
                            {
                                notification("error", "Error Lp", data.message);
                            }
                        },
                        error: function({responseJSON})
                        {

                        }
                    });
					console.log(loyalty_point_id);
					form_data.append('loyalty_point_id',loyalty_point_id);
				$.ajax(
                    {
                        url: BASE_URL + "user_information",
                        type: "POST",
						async: false,
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
		aaColumns: [
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-center" },
		],
		columns: [
			{
				data: "user_info_id",
				name: "user_info_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "email",
				name: "email",
				searchable: true,
				className: "dtr-control",
			},
            {
				data: "firstname",
				name: "firstname",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "middle_name",
				name: "middle_name",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "last_name",
				name: "last_name",
				searchable: true,
				className: "dtr-control",
			},
			/*{
				data: "birth_date",
				name: "birth_date",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "nationality",
				name: "nationality",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "photo_url",
				name: "photo_url",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "loyalty_point_id",
				name: "loyalty_point_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "contact_no",
				name: "contact_no",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "street1",
				name: "street1",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "city1",
				name: "city1",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "zip1",
				name: "zip1",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "state1",
				name: "state1",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "country1",
				name: "country1",
				searchable: true,
				className: "dtr-control",
			},*/
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
			url: BASE_URL + "user_information",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) 
		{
			let buttons = "";
			// info
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["user_info_id"] +
				'\',0)" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["user_info_id"] +
				'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["user_info_id"] +
				'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';

			$("td:eq(0)", nRow).html(aData["user_info_id"]);
			$("td:eq(1)", nRow).html(aData["email"]);
            $("td:eq(2)", nRow).html(aData["firstname"]);
			$("td:eq(3)", nRow).html(aData["middle_name"]);
			$("td:eq(4)", nRow).html(aData["last_name"]);
			/*$("td:eq(5)", nRow).html(aData["birth_date"]);
			$("td:eq(6)", nRow).html(aData["nationality"]);
			$("td:eq(7)", nRow).html(aData["photo_url"]);
			$("td:eq(8)", nRow).html(aData["loyalty_point_id"]);
			$("td:eq(9)", nRow).html(aData["contact_no"]);
			$("td:eq(10)", nRow).html(aData["street1"]);
			$("td:eq(11)", nRow).html(aData["city1"]);
			$("td:eq(12)", nRow).html(aData["zip1"]);
			$("td:eq(13)", nRow).html(aData["state1"]);
			$("td:eq(14)", nRow).html(aData["country1"]);*/
			$("td:eq(5)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};
// function to delete data
deleteData = (user_info_id) => 
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
                url: BASE_URL + "user_information/",
                type: "DELETE",
				data: {user_info_id},
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
