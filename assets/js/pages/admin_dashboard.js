$.ajax({
    url: BASE_URL + "loyalty_point",
    type: "GET",
    dataType: "json",

    success: data => {
        console.log(data);
        if(data.error==false){
            const rooms = data.data;
            const totalRooms = data.data.length;
            $('#all_room_type').html(totalRooms);

            // const singleRooms = rooms.filter(i => i.room_type.type=='Single')
            // const totalSingleRooms = singleRooms.length;
            // $('#all_room_type').html(totalSingleRooms);

            console.log(rooms)
            console.log(singleRooms)

        }else{
            notification("error", "Error!", data.message);
        }
    },
    error: function ({ responseJSON }) {},
});