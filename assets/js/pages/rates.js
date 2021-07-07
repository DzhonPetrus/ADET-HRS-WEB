$(function () {
	window.fields = ["rate_id", "price_per_qty", "startDate","endDate","creator", "btnAdd", "btnUpdate"];
	window.fieldsHidden = ["rate_id", "creator", "btnUpdate"];
	window.readOnlyFields = ["rate_id", "creator"];

	formReset();
	loadTable();

	// function to save/update record
	$("#rate_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#rate_form").parsley().validate()) {
			var form_data = new FormData(this);
			var rate_id = $("#rate_id").val();
			if (rate_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				$.ajax({
					url: BASE_URL + "rate",
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
							document.getElementById("rate_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
				});
			} else {
				$.ajax({
					url: BASE_URL + `rate/${rate_id}`,
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
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "rate_id",
				name: "rate_id",
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
				data: "startDate",
				name: "startDate",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "endDate",
				name: "endDate",
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
			url: BASE_URL + "rate",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["rate_id"]);
			$("td:eq(2)", nRow).html(aData["price_per_qty"]);
			$("td:eq(3)", nRow).html(aData["date_start"]);
			$("td:eq(4)", nRow).html(aData["date_end"]);
			$("td:eq(5)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (rate_id) => {
	{
		$.ajax({
			url: BASE_URL + "rate/" + rate_id,
			type: "GET",
			data: { rate_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (rate_id) => {
	{
		$.ajax({
			url: BASE_URL + "rate/" + rate_id,
			type: "GET",
			data: { rate_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (rate_id) => {
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
				url: BASE_URL + "rate",
				type: "DELETE",
				data: { rate_id },
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

	$("#rate_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormRates").modal("show");
const setInputValue = (data) =>
	fields.forEach((field) => $(`#${field}`).val(data.data[field]));

const setFieldsReadOnly = (bool) =>
	fields.forEach((field) => $(`#${field}`).prop("readonly", bool));
const setReadOnlyFields = () =>
	readOnlyFields.forEach((field) => $(`#${field}`).prop("readonly", true));

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
		`<button type="button" onClick="return viewData('${aData["rate_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["rate_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["rate_id"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
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
