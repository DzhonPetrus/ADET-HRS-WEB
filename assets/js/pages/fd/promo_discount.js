$(function () {
	window.fields = ["pd_code", "type", "description","room_type_id","discount_percentage_amount", "valid_from","valid_until","condition_code", "creator","btnAdd", "btnUpdate", "imageUpload"];
	window.fieldsHidden = ["pd_code", "creator", "btnUpdate"];
	window.readOnlyFields = ["pd_code", "creator"];


	loadRoomtype = () => {
		$.ajax({
			url: BASE_URL + "room_type",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#room_type_id").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.room_type_id + "'>" + dataOptions.type + "</option>";

						$("#room_type_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadCondition = () => {
		$.ajax({
			url: BASE_URL + "pd_condition",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#condition_code").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = "<option value='" + dataOptions.condition_code + "'>" + dataOptions.condition_code + "</option>";

						$("#condition_code").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadCondition();
	loadRoomtype();
	loadTable();
	formReset();
	

	// function to save/update record
	$("#pd_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#pd_form").parsley().validate()) {
			var form_data = new FormData(this);
			var pd_code = $("#pd_code").val();
			if (pd_code == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "promo_and_discount",
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
							document.getElementById("pd_form").reset();
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
					url: BASE_URL + `promo_and_discount/${pd_code}`,
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
				data: "pd_code",
				name: "pd_code",
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
				data: "rooms.type",
				name: "rooms.type",
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
				data: "discount_percentage_amount",
				name: "discount_percentage_amount",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "condition_code",
				name: "condition_code",
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
			url: BASE_URL + "promo_and_discount",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["pd_code"]);
			$("td:eq(2)", nRow).html(aData["type"]);
			$("td:eq(3)", nRow).html(aData["rooms.type"]);
			$("td:eq(4)", nRow).html(aData["description"]);
			$("td:eq(5)", nRow).html(aData["discount_percentage_amount"]);
			$("td:eq(6)", nRow).html(aData["condition_code"]);
			$("td:eq(7)", nRow).html(aData["created.email"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (pd_code) => {
	{
		$.ajax({
			url: BASE_URL + "promo_and_discount/" + pd_code,
			type: "GET",
			data: { pd_code },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (pd_code) => {
	{
		$.ajax({
			url: BASE_URL + "promo_and_discount/" + pd_code,
			type: "GET",
			data: { pd_code },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (pd_code) => {
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
				url: BASE_URL + "promo_and_discount",
				type: "DELETE",
				data: { pd_code },
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
	$("#pd_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormPD").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["pd_code"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> ` +
		`<button type="button" onClick="return editData('${aData["pd_code"]}')" class="btn btn-success"><i class="fa fa-pencil-alt"></i></button> ` +
		`<button type="button" onClick="return deleteData('${aData["pd_code"]}')" class="btn btn-danger"><i class="fa fa-trash"></i></button>`;
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