$(function () {
	window.fields = ["payment_id", "booking_id", "mode","ref_no","payment_type", "payment_status", "amount", "tax_code", "pd_code", "is_cancelled", "is_refund", "cancelled_refund_by", "date_cancelled_refund", "reason_cancelled_refund", "cancelled_refund_amt", "process_by", "btnAdd", "btnUpdate"];
	window.fieldsHidden = ["payment_id", "btnUpdate", "ref_no"];
	window.readOnlyFields = ["payment_id", "ref_no", "process_by", "date_cancelled_refund", "cancelled_refund_by"];


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

						options = `<option value='${dataOptions.booking_id}'>${dataOptions.created.email} | ${dataOptions.booking_id}</option>`;

						$("#booking_id").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadTax = () => {
		$.ajax({
			url: BASE_URL + "tax",
			type: "GET",
			dataType: "JSON",
			success: function (data){
				if (data.error == false){
					$("#tax_code").empty();
					$.each(data.data, function (i, dataOptions)
					{
						var options = "";

						options = `<option value='${dataOptions.tax_code}'>${dataOptions.percentage}</option>`;

						$("#tax_code").append(options);
					});
				} else {
					notification("error", "Eror!", data.message);
				}
			},
			error: function({responseJSON}){},
		});
	};
	loadTable();
	loadBooking();
	loadTax();
	formReset();
	

	// function to save/update record
	$("#payment_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();

		if ($("#payment_form").parsley().validate()) {
			var form_data = new FormData(this);
			var payment_id = $("#payment_id").val();
			if (payment_id == "") {
				// form_data.append("password", "P@ssw0rd");
				// form_data.append("c_password", "P@ssw0rd");

				// add record
				console.table([...form_data]);
				$.ajax({
					url: BASE_URL + "payment",
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
							document.getElementById("payment_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
				});
			} else {
				$.ajax({
					url: BASE_URL + `payment/${payment_id}`,
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
		],
		columns: [
			{
				data: null,
				render: (aData, type, row) => renderButtons(aData),
			},
			{
				data: "payment_id",
				name: "payment_id",
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
				data: "mode",
				name: "mode",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "ref_no",
				name: "ref_no",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "payment_type",
				name: "payment_type",
				searchable: true,
				className: "dtr-control",
			},
			{
				data: "payment_status",
				name: "payment_status",
				searchable: true,
				className: "dtr-control",
			},
		],
		ajax: {
			url: BASE_URL + "payment",
			type: "GET",
			ContentType: "application/x-www-form-urlencoded",
		},
		fnRowCallback: function (nRow, aData, iDisplayIndex, iDisplayIndexFull) {
			$("td:eq(0)", nRow).html(renderButtons(aData));
			$("td:eq(1)", nRow).html(aData["payment_id"]);
			$("td:eq(2)", nRow).html(aData["booking_id"]);
			$("td:eq(3)", nRow).html(aData["mode"]);
			$("td:eq(4)", nRow).html(aData["ref_no"]);
			$("td:eq(5)", nRow).html(aData["payment_type"]);
			$("td:eq(6)", nRow).html(aData["payment_status"]);

		},
		drawCallback: function (settings) {
			// $("#data-table").removeClass("dataTable");
		},
	});
};

// VIEW DATA
viewData = (payment_id) => {
	{
		$.ajax({
			url: BASE_URL + "payment/" + payment_id,
			type: "GET",
			data: { payment_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// Edit DATA
editData = (payment_id) => {
	{
		$.ajax({
			url: BASE_URL + "payment/" + payment_id,
			type: "GET",
			data: { payment_id },
			dataType: "json",

			success: data => (data.error == false) ? setState("edit", data) : notification("error", "Error!", data.message),
			error: function ({ responseJSON }) {},
		});
	}
};

// function to delete data
deleteData = (payment_id) => {
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
				url: BASE_URL + "payment",
				type: "DELETE",
				data: { payment_id },
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

	$("#payment_form")[0].reset();
	showAllFields();
	setHiddenFields();
};

const showModal = () => $("#FormPayments").modal("show");
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
		`<button type="button" onClick="return viewData('${aData["payment_id"]}')" class="btn btn-info"><i class="fa fa-eye"></i></button> `;
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


$("#payment_form input:radio").change(function() {
	$('#group-cancelled_refund_info').hide();
	let selectedRadio = $(this)[0].value;
	console.log(selectedRadio)
	if (selectedRadio != 'is_neither')
		$('#group-cancelled_refund_info').show();
});

$('#group-cancelled_refund_info').hide();


const modeOptions = ["Over-the-counter", "Online"];
const paymentTypeOptions = ["Half Payment", "Full Payment"];
const paymentStatusOptions = ["Pending", "Failed", "Success", "Cancelled", "Refunded"];

const optionGenerator = options => options.reduce((allOptions, currentOption) => allOptions + `<option value='${currentOption}'>${currentOption}</option>`, '');

$('#payment_status').append(optionGenerator(paymentStatusOptions));
$('#payment_type').append(optionGenerator(paymentTypeOptions));
$('#mode').append(optionGenerator(modeOptions));
