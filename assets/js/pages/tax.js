$(function()
{
	
	loadTable();
	formReset('hide');
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
								document.getElementById("tax_form").reset();
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
			{ sClass: "text-center" },
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
				data: "created.email",
				name: "created.email",
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
						'<button type="button" id="modal_button" onClick="return viewData(\'' +
						aData["taxCode"] +
						'\')" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["taxCode"] +
						'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["taxCode"] +
						'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';
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
				'<button type="button" id="modal_button" onClick="return viewData(\'' +
				aData["taxCode"] +
				'\')" class="btn btn-light waves-effect"><i class="bx bx-info-circle font-size-16 align-middle">View</i></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["taxCode"] +
				'\',1)" class="btn btn-success waves-effect"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["taxCode"] +
				'\')" class="btn btn-danger waves-effect"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';

			$("td:eq(0)", nRow).html(aData["taxCode"]);
			$("td:eq(1)", nRow).html(aData["percentage"]);
			$("td:eq(2)", nRow).html(aData["created.email"]);
			$("td:eq(3)", nRow).html(buttons);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (taxCode) => 
{
		document.querySelector('.bg-modal').style.display = 'flex';

        {


            $.ajax(
                {
                url: BASE_URL + "tax/" + taxCode,
                type: "GET",
				data: {taxCode},
                dataType: "json",
				
				
                success: function (data) {
					

                    if (data.error == false) 
                    {
                        $('#taxCode').val(data.data.taxCode);
            			$('#modal_percentage').val(data.data.percentage);
						$('#created_email').val(data.data.created.email);
                    }
                    else 
                    {
                        notification("error", "Error!", data.message);

                    }
                },
                error: function ({ responseJSON }) {},
				
            });
			
		};
		
};

document.getElementById('close_modal').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none';
	}
); 
// formReset =  (action = "hide") =>{
//     console.log(action);
//     $("html","body").animate({scrollTop:0}, "slow");

//     if (action == "hide"){
//         $("#tax_form")[0].reset();
//         $("#show_hide").hide();
//         $("#show_tax_form").show();

//     } else if (action == "show"){
//         $("#show_hide").show();
//         $("#show_tax_form").hide();
//     }
// };