<!doctype html>
<html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Hotel</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
		<link rel="shortcut icon" type="image/x-icon" href="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/512x512/hotel.png">

		<!-- CSS here -->
            <link rel="stylesheet" href="<?= base_url('assets') ?>/css/bootstrap.min.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/bootstrap.min.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/owl.carousel.min.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/gijgo.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/slicknav.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/animate.min.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/magnific-popup.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/fontawesome-all.min.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/themify-icons.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/slick.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/nice-select.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/style.css">
            <link rel="stylesheet" href="<?= base_url() ?>marian-master/assets/css/responsive.css">
            <style>
                .buttonWhite
                {
                    color: #212529;
                    border-color: #f7fafc;
                    background-color: #f7fafc;
                    box-shadow: 0 4px 6px rgb(50 50 93 / 11%), 0 1px 3px rgb(0 0 0 / 8%);
                }
                .buttonRed:Hover
                {
                    background-color:#f7fafc
                }
            </style>
   </head>

   <body>
       
    <!-- Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <strong>HRS</b>
                </div>
            </div>
        </div>
    </div>
    <!-- Preloader Start -->

    <header>
        <!-- Header Start -->
       <div class="header-area header-sticky">
            <div class="main-header ">
                <div class="container">
                    <div class="row align-items-center">
                        <!-- logo -->
                        <div class="col-xl-2 col-lg-2">
                            <div class="logo">
                               <img src="<?= base_url() ?>marian-master/assets/img/logo/HRS LOGO.png" alt="">
                            </div>
                        </div>
                    <div class="col-xl-8 col-lg-8">
                            <!-- main-menu -->
                            <div class="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">                                                                                                                                     
                                        <li><a href="home">Home</a></li>
                                        <li><a href="about">About</a></li>
                                        <li><a href="rooms">Rooms</a></li>
                                        <li><a href="package">Packages</a></li>
                                        <li><a href="contact">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>             
                        <div class="col-xl-2 col-lg-2">
                            <!-- header-btn -->
                            <div class="header-btn" >
                                <a href="#" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#exampleModalCenter">Book Now</a>
                            </div>
                        </div>

                        <!-- MODAL Start -->
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                <div class="modal-header" style ="background-color:#5e72e4">
                                    <h3 class="modal-title" id="exampleModalLongTitle" style="color:white">Booking</h3>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                                </div>
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label" for="checkIn">Check In</label>
                                            <input type="date" id="checkIn" name="checkIn" class="form-control">
                                        </div>
                                    </div>  
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label" for="checkOut">Check Out</label>
                                            <input type="date" id="checkOut" name="checkOut" class="form-control">
                                        </div>
                                    </div>  
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label" for="noNights">No. of Nights</label>
                                            <input type="number" id="noNights" name="noNights" class="form-control" placeholder="No. of Nights" disabled>
                                        </div>
                                    </div>  
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label" for="guest">Guest</label>
                                            <input type="number" id="guest" name="guest" class="form-control" placeholder="No. of Guest">
                                        </div>
                                    </div>  
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <label class="form-control-label"> Room Type </label>
                                            <br>
                                            <select class="form-control-label" name="roomType" id="roomType">
                                                    <option value="single">Single Room</option>
                                                    <option value="standard">Standard Room</option>
                                                    <option value="deluxe">Deluxe Room</option>
                                                    <option value="suite">Suite Room</option>
                                            </select>
                                        </div>
                                    </div>  
                                </div>
                                <br>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="form-group">
                                       <center><img src="<?= base_url() ?>marian-master/assets/img/rooms/room2.jpg"></center>
                                        </div>
                                    </div>  
                                </div>
                                <br>
                                <div class="modal-footer">
                                <button type="button" class="btn buttonWhite" onClick="formReset()" data-dismiss="modal" >Close</button>
                                <button type="button" class="btn btn-primary">Book</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <!-- MODAL Modal End -->

                        <!-- Mobile Menu -->
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
        <!-- Header End -->
    </header>