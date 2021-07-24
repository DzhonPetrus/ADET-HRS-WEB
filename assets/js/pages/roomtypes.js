$(function () {
	window.fields = ["room_type_id", "type","additional_guest","rate_additional", "description","min_guest","max_guest", "pricing_id", "creator","btnAdd", "btnUpdate", "imageUpload"];
	window.fieldsHidden = ["room_type_id", "creator", "btnUpdate"];
	window.readOnlyFields = ["room_type_id", "creator"];


	loadPricing = () => {
		$.ajax({
			url: BASE_URL + "pricing",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#pricing_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.pricing_id + "'>" + dataOptions.price_per_qty + "</option>";

						$("#pricing_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadTable();
	loadPricing();
	formReset();
	

	// function to save/update record
	$("#room_type_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#room_type_form").parsley().validate()) {
			var form_data = new FormData(this);
			var room_type_id = $("#room_type_id").val();
			if (room_type_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "room_type",
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
							document.getElementById("room_type_form").reset();
							$("#photo_url_placeholder").attr("src", `https://i.stack.imgur.com/y9DpT.jpg`);
						} else {
							console.log(data.message);
							notification("error", data.message);
						}
					},
					error: function (data) {
							notification("error", data.responseJSON.message);
					},
				});
			} else {
				$.ajax({
					url: BASE_URL + `room_type/${room_type_id}`,
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
			{ sClass: "text-left" },
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "room_type_id",
				name: "room_type_id",
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
				data: "description",
				name: "description",
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
				data: "price.price_per_qty",
				name: "price.price_per_qty",
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
			url: BASE_URL + "room_type",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["room_type_id"]);
			$("td:eq(2)", nRow).html(aData["type"]);
			$("td:eq(3)", nRow).html(aData["description"]);
			$("td:eq(4)", nRow).html(aData["min_guest"]);
			$("td:eq(5)", nRow).html(aData["max_guest"]);
			$("td:eq(6)", nRow).html(aData["price.price_per_qty"]);
			$("td:eq(7a)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (room_type_id) => {
	{
		$.ajax({
			url: BASE_URL + "room_type/" + room_type_id,
			type: "GET",
			data: { room_type_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (room_type_id) => {
	{
		$.ajax({
			url: BASE_URL + "room_type/" + room_type_id,
			type: "GET",
			data: { room_type_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (room_type_id) => {
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
				url: BASE_URL + "room_type",
				type: "DELETE",
				data: { room_type_id },
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
// read pictures
$("#imageUpload").change(function () {
    readURL(this);
});

formReset = () => {
	$("html", "body").animate({ scrollTop: 0 }, "slow");

	$("#photo_url_placeholder").attr("src", `https://i.stack.imgur.com/y9DpT.jpg`);
	$("#room_type_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormRoomTypes").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["room_type_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["room_type_id"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["room_type_id"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
	return buttons;
};

const setState = (state, data) => {
	showAllFields();
	setInputValue(data);
	$("#creator").val(data.data.created.email);
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