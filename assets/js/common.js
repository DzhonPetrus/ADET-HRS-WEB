const BASE_URL = 'http://localhost:4000/api/v1/';


const notification = (type, title, message)=> {
    return toastr[type](message,title);
};