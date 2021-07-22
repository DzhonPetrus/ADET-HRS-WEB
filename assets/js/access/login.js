$(function() {
    $("#formLogin").on("submit", (e) => {
        e.preventDefault();
        let isValid = $("#formLogin").parsley().validate();

        if(isValid){
            $.ajax({
                url: `${BASE_URL}login`,
                type: "POST",
                data: {
                    email: $('#email').val(),
                    password: $('#password').val()
                },
                dataType: "json",
                success: (data) => {
                    localStorage.setItem("TOKEN", data.token);
                    let session_data = "";
                    
                    session_data += `token=${data.token}`;
                    session_data += `&email=${data.data.email}`;
                    session_data += `&user_type=${data.data.user_type}`;

                    redirect('./oAuth?' + session_data);

                },
                error: ( {responseJSON} ) => {
                    console.log(responseJSON);
                    notification("error", "", responseJSON.message.join());
                }
            });

        }
    });
});