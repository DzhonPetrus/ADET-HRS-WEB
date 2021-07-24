$(function () {
	window.fields = ["housekeeping_id", "room_id", "room_status","creator", "btnAdd", "btnUpdate"];
	window.fieldsHidden = ["housekeeping_id", "creator", "btnUpdate"];
	window.readOnlyFields = ["housekeeping_id", "creator"];

	loadRoom = () => {
		$.ajax({
			url: BASE_URL + "room",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#room_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.room_id + "'>" + dataOptions.room_no + "</option>";

						$("#room_id").append(options);

						min = dataOptions.room_type_id;
					
					}
					
					);
					console.log(min);
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
    loadRoom();
	formReset();
	loadTable();

	// function to save/update record
	$("#housekeeping_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#housekeeping_form").parsley().validate()) {
			var form_data = new FormData(this);
			var housekeeping_id = $("#housekeeping_id").val();
			if (housekeeping_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				$.ajax({
					url: BASE_URL + "housekeeping",
					type: "POST",
					data: form_data,
					dataType: "JSON",
					contentType: false,
					processData: false,
					cache: false,
					success: function (data) {
						if (data.error == false) {
							document.getElementById("housekeeping_form").reset();
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
			} else {
				$.ajax({
					url: BASE_URL + `housekeeping/${housekeeping_id}`,
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
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "housekeeping_id",
				name: "housekeeping_id",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "room.room_no",
				name: "room.room_no",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "room_status",
				name: "room_status",
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
			url: BASE_URL + "housekeeping",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["housekeeping_id"]);
			$("td:eq(2)", nRow).html(aData["room.room_no"]);
			$("td:eq(3)", nRow).html(aData["room_status"]);
			$("td:eq(4)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (housekeeping_id) => {
	{
		$.ajax({
			url: BASE_URL + "housekeeping/" + housekeeping_id,
			type: "GET",
			data: { housekeeping_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (housekeeping_id) => {
	{
		$.ajax({
			url: BASE_URL + "housekeeping/" + housekeeping_id,
			type: "GET",
			data: { housekeeping_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (housekeeping_id) => {
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
				url: BASE_URL + "housekeeping",
				type: "DELETE",
				data: { housekeeping_id },
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

	$("#housekeeping_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormHousekeeping").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["housekeeping_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["housekeeping_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> `;
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