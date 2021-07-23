$(function () {
	window.fields = ["user_info_id", "email", "first_name", "middle_name","last_name","birth_date", "nationality", "contact_no", "street1", "city1", "zip1", "state1", "country1", "street2", "city2", "zip2", "state2", "country2", "btnUpdate", "imageUpload"];
	window.fieldsHidden = ["user_info_id","user__id",  "btnUpdate"];
	window.readOnlyFields = ["user_info_id"];

	formReset();

	// function to save/update record
	$("#profile_form").on("submit", function (e) {
		e.preventDefault();
		trimInputFields();


		if ($("#profile_form").parsley().validate()) {
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
							notification("success", "Success!", data.message);
							document.getElementById("profile_form").reset();
						} else {
							notification("error", "Error!", data.message);
						}
					},
					error: function ({ responseJSON }) {},
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


//EXTRA
$("#imageUpload").change(function () {
    readURL(this);
});

formReset = () => {
	$("html", "body").animate({ scrollTop: 0 }, "slow");

	$("#photo_url_placeholder").attr("src", `https://i.stack.imgur.com/y9DpT.jpg`);
	$("#profile_form")[0].reset();
	$("#btnEdit").hide();
	showAllFields();
	setHiddenFields();
};

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

const setState = (state, data) => {
	window.USER_INFO = data;
	showAllFields();
	setInputValue(data);
	$("#photo_url_placeholder").attr("src", `http://localhost:4000/public/${data.data.photo_url}`);

	if (state === "view") {
		setFieldsReadOnly(true);
		$("#group-btnUpdate").hide();
		$("#btnEdit").show();
	}

	if (state === "edit") {
		setFieldsReadOnly(false);
		setReadOnlyFields();

		$("#group-btnUpdate").show();
		$("#btnEdit").hide();
	}

};




const USER_INFO_ID = $("#user_info_id").val();
$.ajax({
	url: BASE_URL + `user_information/${USER_INFO_ID}`,
	type: "GET",
	dataType: "JSON",
	success: data => (data.error == false) ? setState("view", data) : notification("error", "Error!", data.message),
	error: function ({ responseJSON }) {},
});

$('#btnEdit').click(() => {
	setState("edit", window.USER_INFO);
});