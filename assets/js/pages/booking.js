$(function () {
	window.fields = ["booking_id", "user_id", "total_no_guest","total_no_night","total_price", "discount", "creator","btnAdd", "btnUpdate"];
	window.fieldsHidden = ["booking_id", "creator", "btnUpdate"];
	window.readOnlyFields = ["booking_id", "creator"];


	loadUser = () => {
		$.ajax({
			url: BASE_URL + "user",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#user_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.id + "'>" + dataOptions.email + "</option>";

						$("#user_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};

	loadUser();
	loadTable();
	formReset();
	

	// function to save/update record
	$("#booking_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#booking_form").parsley().validate()) {
			var form_data = new FormData(this);
			var booking_id = $("#booking_id").val();
			if (booking_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "booking",
					type: "POST",
					data: form_data,
					dataType: "JSON",
					contentType: false,
					processData: false,
					cache: false,
					success: function (data) {
						if (data.error == false) {
							loadTable();
							notification("success", "Success!", data.message);
							document.getElementById("booking_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
				});
			} else {
				$.ajax({
					url: BASE_URL + `booking/${booking_id}`,
					type: "PUT",
					data: form_data,
					dataType: "JSON",
					contentType: false,
					processData: false,
					cache: false,
					success: function (data) {
						if (data.error == false) {
							loadTable();
							notification("success", "Success!", data.message);
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
				});
			}
		}
	});
});

//TABLEEEEEE
loadTable = () => {
	$.ajaxSetup({
		headers: {
			Accept: "application/json",
			Authorization: "Bearer " + token,
			ContentType: "application/x-www-form-urlencoded",
		},
	});
	$("#myTables").dataTable().fnClearTable();
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
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
			{ sClass: "text-left" },
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "booking_id",
				name: "booking_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "client.email",
				name: "client.email",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "total_no_guest",
				name: "total_no_guest",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "total_no_night",
				name: "total_no_night",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "total_price",
				name: "total_price",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "discount",
				name: "discount",
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
		ajax: {
			url: BASE_URL + "booking",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["booking_id"]);
			$("td:eq(2)", nRow).html(aData["client.email"]);
			$("td:eq(3)", nRow).html(aData["total_no_guest"]);
			$("td:eq(4)", nRow).html(aData["total_no_night"]);
			$("td:eq(5)", nRow).html(aData["total_price"]);
			$("td:eq(6)", nRow).html(aData["discount"]);
			$("td:eq(7a)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (booking_id) => {
	{
		$.ajax({
			url: BASE_URL + "booking/" + booking_id,
			type: "GET",
			data: { booking_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (booking_id) => {
	{
		$.ajax({
			url: BASE_URL + "booking/" + booking_id,
			type: "GET",
			data: { booking_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (booking_id) => {
	Swal.fire({
		title: "Are you sure you want to delete this record?",
		text: "You won't be able to revert this!",
		icon: "warning",
		showCancelButton: !0,
		confirmButtonColor: "#34c38f",
		cancelButtonColor: "#f46a6a",
		confirmButtonText: "Yes, delete it!",
	}).then(function (t) {
		// if user clickes yes, it will change the active status to "Not Active".
		if (t.value) {
			$.ajax({
				url: BASE_URL + "booking",
				type: "DELETE",
				data: { booking_id },
				dataType: "json",

				success: function (data) {
					if (data.error == false) {
						notification("success", "Success!", data.message);
						loadTable();
					} else {
						notification("error", "Error!", data.message);
					}
				},
				error: function ({ responseJSON }) {},
			});
		}
	});
};

//EXTRA
formReset = () => {
	$("html", "body").animate({ scrollTop: 0 }, "slow");

	$("#booking_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormBookings").modal("show");
const setInputValue = (data) =>
	fields.forEach((field) => $(`#${field}`).val(data.data[field]));

const setFieldsReadOnly = (bool) =>
	fields.forEach((field) => $(`#${field}`).prop("disabled", bool));
const setReadOnlyFields = () =>
	readOnlyFields.forEach((field) => $(`#${field}`).prop("disabled", true));

const showAllFields = () =>
	fields.forEach((field) => $(`#group-${field}`).show());
const setHiddenFields = () =>
	fieldsHidden.forEach((field) => $(`#group-${field}`).hide());

const newHandler = () => {
	formReset();
	setFieldsReadOnly(false);
	setReadOnlyFields();
};

const renderButtons = (aData, type, row) => {
	let buttons =
		"" +
		`<button type="button" onClick="return viewData('${aData["booking_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["booking_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["booking_id"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
	return buttons;
};

const setState = (state, data) => {
	showAllFields();
	setInputValue(data);
	$("#creator").val(data.data.created.email);
	$("#group-btnAdd").hide();

	if (state === "view") {
		setFieldsReadOnly(true);
		$("#group-btnUpdate").hide();
	}

	if (state === "edit") {
		setFieldsReadOnly(false);
		setReadOnlyFields();

		$("#group-btnUpdate").show();
	}

	showModal();

};