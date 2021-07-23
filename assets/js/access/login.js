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
                success: (info) => {
                    let data = info;
                    console.log(data)
                    if(data.data.user_info == null)
                        data.data.user_info = {first_name:null, middle_name:null, last_name:null, user_info_id:null, country1:null, city1:null, photo_url:`http://keyrecruitment.co.za/wp-content/uploads/2013/10/image.jpg`}
                    localStorage.setItem("TOKEN", data.token);
                    let session_data = "";
                    
                    session_data += `token=${data.token}`;
                    session_data += `&email=${data.data.user.email}`;
                    session_data += `&user_type=${data.data.user.user_type}`;
                    session_data += `&user_id=${data.data.user.id}`;
                    session_data += `&user_info=${JSON.stringify(data.data.user_info)}`;

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