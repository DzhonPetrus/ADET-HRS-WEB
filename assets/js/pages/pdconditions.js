$(function () {
	window.fields = ["condition_code", "duration", "min_duration","min_guest","max_guest","limit","creator", "btnAdd", "btnUpdate"];
	window.fieldsHidden = ["condition_code", "creator", "btnUpdate"];
	window.readOnlyFields = ["condition_code", "creator"];

	loadTable();
	formReset();
	

	// function to save/update record
	$("#pd_condition_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#pd_condition_form").parsley().validate()) {
			var form_data = new FormData(this);
			var condition_code = $("#condition_code").val();
			var min = $("#min_guest").val();
			var max = $("#max_guest").val();
			console.log(min);
			console.log(max);
			if (min > max){

				notification("error", "Min > Max");
				formReset();
			}else{ 
			if (condition_code == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "pd_condition",
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
							document.getElementById("pd_condition_form").reset();
						} else {
							notification("error", "Error!", data.message);
							document.getElementById("pd_condition_form").reset();
						}
					},
					error: function ({ responseError }) {
						notification("error", "Error!");
						document.getElementById("pd_condition_form").reset();
					},
				});
			} else {
				$.ajax({
					url: BASE_URL + `pd_condition/${condition_code}`,
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
					error: function ({ responseJSON }) {
						notification("error", "Error!");
					},
				});
			}
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
				data: "condition_code",
				name: "condition_code",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "duration",
				name: "duration",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "min_duration",
				name: "min_duration",
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
				data: "limit",
				name: "limit",
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
			url: BASE_URL + "pd_condition",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["condition_code"]);
			$("td:eq(2)", nRow).html(aData["duration"]);
			$("td:eq(3)", nRow).html(aData["min_duration"]);
			$("td:eq(4)", nRow).html(aData["min_guest"]);
			$("td:eq(2)", nRow).html(aData["max_guest"]);
			$("td:eq(2)", nRow).html(aData["limit"]);
			$("td:eq(2)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (condition_code) => {
	{
		$.ajax({
			url: BASE_URL + "pd_condition/" + condition_code,
			type: "GET",
			data: { condition_code },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
		
	}
};

// Edit DATA
editData = (condition_code) => {
	{
		$.ajax({
			url: BASE_URL + "pd_condition/" + condition_code,
			type: "GET",
			data: { condition_code },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (condition_code) => {
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
				url: BASE_URL + "pd_condition",
				type: "DELETE",
				data: { condition_code },
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

	$("#pd_condition_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormPdConditions").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["condition_code"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["condition_code"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["condition_code"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
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