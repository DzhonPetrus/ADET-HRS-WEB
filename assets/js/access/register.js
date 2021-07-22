$(function() {
    $("#formRegister").on("submit", function (e) {
        e.preventDefault();
		trimInputFields();

		if ($("#formRegister").parsley().validate()) {
			var form_data = new FormData(this);

            $.ajax({
                url: BASE_URL + "register",
                type: "POST",
                data: form_data,
                dataType: "JSON",
                contentType: false,
                processData: false,
                cache: false,
                success: (data) => {

                    console.log(data)
                    localStorage.setItem("TOKEN", data.token);
                    let session_data = "";
                    
                    session_data += `token=${data.token}`;
                    session_data += `&email=${data.email}`;
                    session_data += `&user_type=${data.user_type}`;

                    window.location.replace('./oAuth?' + session_data);

                },
                error: ( {responseJSON} ) => {
                    console.log(responseJSON);
                    notification("error", "", responseJSON.message.join());
                }
            });

        }
    });
});


// read pictures
$("#imageUpload").change(function () {
    readURL(this);
});
