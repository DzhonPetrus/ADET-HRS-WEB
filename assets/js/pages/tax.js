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
			var uuid = $("#uuid").val();
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
								$("#show_hide").hide();
        						$("#show_tax_form").show();

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
            }else{
				$.ajax(
					{
						url: BASE_URL + "tax/" + uuid,
						type: "PUT",
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
										$("#show_hide").hide();
        								$("#show_tax_form").show();
										$("#uuid").val("");
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
			};
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

	$("#myTables").dataTable().fnClearTable();
	$("#myTables").dataTable().fnDraw();
	$("#myTables").dataTable().fnDestroy();
	$("#myTables").dataTable({
		responsive: true,
		serverSide: false,
		order: [[0, "desc"]],
		aLengthMenu: [5, 10, 20, 30, 50, 100],
		aaColumns: [
			{ sClass: "text-center" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
		],
		columns: [
			{
				data: null,
				render: function (aData, type, row) 
				{
					let buttons = "";
					// info
					buttons +=
						'<button type="button" id="tax_form_modal" onClick="return viewData(\'' +
						aData["taxCode"] +
						'\')" class="button_for_icon_view"><img src="../assets/img/icons/view.png" class="icon_view"></button> ';
					// edit
					buttons +=
						'<button type="button" onClick="return editData(\'' +
						aData["taxCode"] +
						'\',)" class="button_for_icon_edit"><i class="bx bx-edit font-size-16 align-middle">Edit</i></button> ';
					// delete
					buttons +=
						'<button type="button" onClick="return deleteData(\'' +
						aData["taxCode"] +
						'\')" class="button_for_icon_delete"><i class="bx bx-trash font-size-16 align-middle">Delete</i></button> ';
					return buttons; // same class in i element removed it from a element
				},
			},
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
				'<button type="button" id="tax_form_modal" onClick="return viewData(\'' +
				aData["taxCode"] +
				'\')" class="button_for_icon_view" ><img src="../assets/img/icons/view.png" class="icon_view"></button> ';
			// edit
			buttons +=
				'<button type="button" onClick="return editData(\'' +
				aData["taxCode"] +
				'\',)" class="button_for_icon_edit"><img src="../assets/img/icons/edit.png" class="icon_view"></button> ';

			//delete
			buttons +=
				'<button type="button" onClick="return deleteData(\'' +
				aData["taxCode"] +
				'\')" class="button_for_icon_delete"><img src="../assets/img/icons/delete.png" class="icon_view"></button> ';
				
			$("td:eq(0)", nRow).html(buttons);
			$("td:eq(1)", nRow).html(aData["taxCode"]);
			$("td:eq(2)", nRow).html(aData["percentage"]);
            $("td:eq(3)", nRow).html(aData["created.email"]);
			

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
                url: BASE_URL + "tax/"  + taxCode,
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

// Edit DATA
editData = (taxCode) => 
{
	$("#tax_form")[0].reset();
    $("#show_hide").show();
    $("#show_tax_form").hide();
	$("#add_tax").hide();
	$("#update_tax").show();
        {

            $.ajax(
                {
                url: BASE_URL + "tax/"  + taxCode,
                type: "GET",
				data: {taxCode},
                dataType: "json",
				
				
                success: function (data) {
					
                    if (data.error == false) 
                    {
						$("#uuid_1").show();
						$("#update_tax_code").show()
						$("#uuid_1").val(data.data.taxCode);
						$('#uuid').val(data.data.taxCode);
            			$('#percentage').val(data.data.percentage);
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
                url: BASE_URL + "tax",
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






//EXTRA 
document.getElementById('close_modal').addEventListener('click',
	function(){
		document.querySelector('.bg-modal').style.display = 'none';
	}
); 
formReset =  (action = "hide") =>{
    $("html","body").animate({scrollTop:0}, "slow");

    if (action == "hide"){
        $("#tax_form")[0].reset();
        $("#show_hide").hide();
        $("#show_tax_form").show();
		$("#add_tax").show();

    } else if (action == "show"){
        $("#show_hide").show();
        $("#show_tax_form").hide();
		$("#update_tax").hide();
		$("#add_tax").show();
		$("#update_tax_code").hide()
		
    }
};