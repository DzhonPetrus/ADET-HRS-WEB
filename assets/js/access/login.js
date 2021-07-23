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
                    console.log(data)
                    localStorage.setItem("TOKEN", data.token);
                    let session_data = "";
                    
                    session_data += `token=${data.token}`;
                    session_data += `&email=${data.data.user.email}`;
                    session_data += `&user_type=${data.data.user.user_type}`;
                    session_data += `&user_info=${JSON.stringify(data.data.user_info)}`;
                    window.USER_INFO = data.data.user_info;

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