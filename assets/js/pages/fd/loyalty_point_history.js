$(function () {
	window.fields = ["lp_history_id","loyalty_point_id","booking_id", "points", "type","creator", "btnAdd", "btnUpdate"];
	window.fieldsHidden = ["lp_history_id", "creator", "owner","btnUpdate"];
	window.readOnlyFields = ["lp_history_id", "creator","owner"];
	
	loadLP = () => {
		$.ajax({
			url: BASE_URL + "loyalty_point",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#loyalty_point_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.loyalty_point_id + "'>" + dataOptions.loyalty_point_id + "</option>";

						$("#loyalty_point_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadBooking = () => {
		$.ajax({
			url: BASE_URL + "booking",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#booking_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.booking_id + "'>" + dataOptions.booking_id + "</option>";

						$("#booking_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};

	loadBooking();
	loadLP();
	formReset();
	loadTable();

	// function to save/update record
	$("#lphistory_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#lphistory_form").parsley().validate()) {
			var form_data = new FormData(this);
			var lp_history_id = $("#lp_history_id").val();
			if (lp_history_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				$.ajax({
					url: BASE_URL + "loyalty_point_history",
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
							document.getElementById("lphistory_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function (data) {
						notification("error", data.responseJSON.message);
				},
				});
			} else {
				$.ajax({
					url: BASE_URL + `loyalty_point_history/${lp_history_id}`,
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
					error: function (data) {
						notification("error", data.responseJSON.message);
				},
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
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "lp_history_id",
				name: "lp_history_id",
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
				data: "booking_id",
				name: "booking_id",
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
				data: "type",
				name: "type",
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
			url: BASE_URL + "loyalty_point_history",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["lp_history_id"]);
			$("td:eq(2)", nRow).html(aData["loyalty_point_id"]);
			$("td:eq(3)", nRow).html(aData["booking_id"]);
			$("td:eq(4)", nRow).html(aData["points"]);
			$("td:eq(5)", nRow).html(aData["type"]);
			$("td:eq(6)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (lp_history_id) => {
	{
		$.ajax({
			url: BASE_URL + "loyalty_point_history/" + lp_history_id,
			type: "GET",
			data: { lp_history_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (lp_history_id) => {
	{
		$.ajax({
			url: BASE_URL + "loyalty_point_history/" + lp_history_id,
			type: "GET",
			data: { lp_history_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (lp_history_id) => {
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
				url: BASE_URL + "loyalty_point_history",
				type: "DELETE",
				data: { lp_history_id },
				dataType: "json",

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
	});
};

//EXTRA
formReset = () => {
	$("html", "body").animate({ scrollTop: 0 }, "slow");

	$("#lphistory_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormLPHistory").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["lp_history_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> `;
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