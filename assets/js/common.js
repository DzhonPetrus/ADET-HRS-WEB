const BASE_URL = 'http://localhost:4000/api/v1/';


const notification = (type, title, message)=> {
    return toastr[type](message,title);
};

const token = localStorage.getItem("TOKEN");
// Append headers to Ajax attributes
$.ajaxSetup(
    {
        headers:
        {
            Accept: "application/json",
            Authorization: "Bearer " + token,
        },
    });

// trim input fields except file, select, textarea
trimInputFields = () => 
{
    var allInputs = $("input:not(:file())");
    allInputs.each(function () 
    {
        $(this).val($.trim($(this).val()));
    });
};

readURL = (input) => {
	var url = input.value;
	var ext = url.substring(url.lastIndexOf(".") + 1).toLowerCase();
	if (
		input.files &&
		input.files[0] &&
		(ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")
	) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$("#photo_url_placeholder").attr("src", e.target.result);
		};

		reader.readAsDataURL(input.files[0]);
	} else {
		//$("#img").attr("src", "/assets/no_preview.png");
	}
};
