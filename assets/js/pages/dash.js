
$.ajax({
    url: BASE_URL + "rooms_reserved",
    type: "GET",
    dataType: "json",

    success: data => {
        //console.log(data);
        if(data.error==false){
            const rooms = data.data;
            const totalRooms = data.data.length;
            $('#all_room_type').html(totalRooms);

            const singleRooms = rooms.filter(i => i.room_reserved_status=='Cancelled')
            const totalSingleRooms = singleRooms.length;
            $('#all_cancel').html(totalSingleRooms);

			const Out = rooms.filter(i => i.room_reserved_status=='Ongoing')
            const totalOut = Out.length;
            $('#total_out').html(totalOut);

			const In = rooms.filter(i => i.room_reserved_status=='Completed')
            const totalIn = In.length;
            $('#total_in').html(totalIn);

            //console.log(rooms)
            //console.log(singleRooms)

        }else{
            notification("error", "Error!", data.message);
        }
    },
    error: function ({ responseJSON }) {},
});

$.ajax({
    url: BASE_URL + "booking",
    type: "GET",
    dataType: "json",

    success: data => {
        //console.log(data);
        if(data.error==false){
            const rooms = data.data;
            const totalRooms = data.data.length;
            $('#total_booking').html(totalRooms);

            // const singleRooms = rooms.filter(i => i.room_reserved_status=='Cancelled')
            // const totalSingleRooms = singleRooms.length;
            // $('#all_cancel').html(totalSingleRooms);

            //console.log(rooms)
            //console.log(singleRooms)

        }else{
            notification("error", "Error!", data.message);
        }
    },
    error: function ({ responseJSON }) {},
});

$.ajax({
    url: BASE_URL + "room",
    type: "GET",
    dataType: "json",

    success: data => {
        //console.log(data);
        if(data.error==false){
            const rooms = data.data;
            // const totalRooms = data.data.length;
            // $('#room_avail').html(totalRooms);

            const singleRooms = rooms.filter(i => i.room_status=='Available')
            const totalSingleRooms = singleRooms.length;
            $('#room_avail').html(totalSingleRooms);

            console.log(data)
            //console.log(singleRooms)

        }else{
            notification("error", "Error!", data.message);
        }
    },
    error: function ({ responseJSON }) {},
});