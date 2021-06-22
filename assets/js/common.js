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