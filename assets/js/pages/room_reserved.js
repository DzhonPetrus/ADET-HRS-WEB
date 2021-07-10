$(function () {
	window.fields = ["room_reserved_id", "booking_id", "room_id","room_reserved_status","rate", "no_of_nights","no_of_guest","date_from","date_to","package_id","checkOut","checkIn", "creator","btnAdd", "btnUpdate"];
	window.fieldsHidden = ["room_reserved_id", "creator", "btnUpdate"];
	window.readOnlyFields = ["room_reserved_id", "creator"];


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
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadPackage = () => {
		$.ajax({
			url: BASE_URL + "package",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#package_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.package_id + "'>" + dataOptions.title + "</option>";

						$("#package_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadPackage();
	loadRoom();
	loadBooking();
	loadTable();
	formReset();
	

	// function to save/update record
	$("#room_reserve_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#room_reserve_form").parsley().validate()) {
			var form_data = new FormData(this);
			var room_reserved_id = $("#room_reserved_id").val();
			if (room_reserved_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "rooms_reserved",
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
							document.getElementById("room_reserve_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
				});
			} else {
				$.ajax({
					url: BASE_URL + `rooms_reserved/${room_reserved_id}`,
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
				data: "room_reserved_id",
				name: "room_reserved_id",
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
				data: "room.room_no",
				name: "room.room_no",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "room_reserved_status",
				name: "room_reserved_status",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "package.title",
				name: "package.title",
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
			url: BASE_URL + "rooms_reserved",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["room_reserved_id"]);
			$("td:eq(2)", nRow).html(aData["booking_id"]);
			$("td:eq(3)", nRow).html(aData["room.room_no"]);
			$("td:eq(4)", nRow).html(aData["room_reserved_status"]);
			$("td:eq(5)", nRow).html(aData["package.title"]);
			$("td:eq(6)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (room_reserved_id) => {
	{
		$.ajax({
			url: BASE_URL + "rooms_reserved/" + room_reserved_id,
			type: "GET",
			data: { room_reserved_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (room_reserved_id) => {
	{
		$.ajax({
			url: BASE_URL + "rooms_reserved/" + room_reserved_id,
			type: "GET",
			data: { room_reserved_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (room_reserved_id) => {
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
				url: BASE_URL + "rooms_reserved",
				type: "DELETE",
				data: { room_reserved_id },
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

	$("#room_reserve_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormRoomReserved").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["room_reserved_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["room_reserved_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["room_reserved_id"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
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