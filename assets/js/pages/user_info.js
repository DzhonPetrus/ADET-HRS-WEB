$(function () {
	window.fields = ["user_info_id", "email", "first_name", "middle_name","last_name","birth_date", "nationality", "contact_no", "street1", "city1", "zip1", "state1", "country1", "street2", "city2", "zip2", "state2", "country2", "btnAdd", "btnUpdate", "imageUpload"];
	window.fieldsHidden = ["user_info_id", "btnUpdate"];
	window.readOnlyFields = ["user_info_id"];

	formReset();
	loadTable();

	// function to save/update record
	$("#user_info_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#user_info_form").parsley().validate()) {
			var form_data = new FormData(this);
			var user_info_id = $("#user_info_id").val();
			if (user_info_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				$.ajax({
					url: BASE_URL + "user_information",
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
							document.getElementById("user_info_form").reset();
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
					url: BASE_URL + `user_information/${user_info_id}`,
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
		aoColumns: [
			{ sClass: "text-center" },
			{ sClass: "text-left" },
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
				data: "first_name",
				name: "first_name",
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
			{
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
				data: "contact_no",
				name: "contact_no",
				searchable: true,
				className: "dtr-control",
			},
		],
		ajax: {
			url: BASE_URL + "user_information",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["user_info_id"]);
			$("td:eq(2)", nRow).html(aData["email"]);
			$("td:eq(3)", nRow).html(aData["first_name"]);
			$("td:eq(4)", nRow).html(aData["middle_name"]);
			$("td:eq(5)", nRow).html(aData["last_name"]);
			$("td:eq(6)", nRow).html(aData["birth_date"]);
			$("td:eq(7)", nRow).html(aData["nationality"]);
			$("td:eq(8)", nRow).html(aData["contact_no"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (user_info_id) => {
	{
		$.ajax({
			url: BASE_URL + "user_information/" + user_info_id,
			type: "GET",
			data: { user_info_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (user_info_id) => {
	{
		$.ajax({
			url: BASE_URL + "user_information/" + user_info_id,
			type: "GET",
			data: { user_info_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (user_info_id) => {
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
				url: BASE_URL + "user_information",
				type: "DELETE",
				data: { user_info_id },
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
$("#imageUpload").change(function () {
    readURL(this);
});

formReset = () => {
	$("html", "body").animate({ scrollTop: 0 }, "slow");

	$("#photo_url_placeholder").attr("src", `https://i.stack.imgur.com/y9DpT.jpg`);
	$("#user_info_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormUserInfo").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["user_info_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["user_info_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["user_info_id"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
	return buttons;
};

const setState = (state, data) => {
	showAllFields();
	setInputValue(data);
	$("#group-btnAdd").hide();
	$("#photo_url_placeholder").attr("src", `http://localhost:4000/public/${data.data.photo_url}`);

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
