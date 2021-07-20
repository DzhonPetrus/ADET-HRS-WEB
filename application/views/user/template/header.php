<!doctype html>
<html class="no-js" lang="zxx">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Hotel</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="manifest" href="site.webmanifest">
		<link rel="shortcut icon" type="image/x-icon" href="<?= base_url() ?>marian-master/assets/img/favicon.ico">

		<!-- CSS here -->
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
   </head>

   <body>
       
    <!-- Preloader Start -->
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <strong>Hotel</b>
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
                               <img src="<?= base_url() ?>marian-master/assets/img/logo/logo.png" alt="">
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
                                <a href="" class="btn btn-default btn-rounded my-3" data-toggle="modal" data-target="#modalLRForm"">LOGIN</a>
                            </div>
                        </div>
                            <!--Modal: Login / Register Form-->
<div class="modal fade" id="modalLRForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog cascading-modal" role="document">
    <!--Content-->
    <div class="modal-content">

      <!--Modal cascading tabs-->
      <div class="modal-c-tabs">

        <!-- Nav tabs -->
        <ul class="nav nav-tabs md-tabs tabs-2 light-blue darken-3" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#panel7" role="tab"><i class="fas fa-user mr-1"></i>
              Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#panel8" role="tab"><i class="fas fa-user-plus mr-1"></i>
              Register</a>
          </li>
        </ul>

        <!-- Tab panels -->
        <div class="tab-content">
          <!--Panel 7-->
          <div class="tab-pane fade in show active" id="panel7" role="tabpanel">

            <!--Body-->
            <div class="modal-body mb-1">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <label data-error="wrong" data-success="right" for="userName">Your email:</label>
                <input type="email" id="userName" class="form-control form-control-sm validate">
                <br>
                <i class="fas fa-lock prefix"></i>
                <label data-error="wrong" data-success="right" for="password">Your password:</label>
                <input type="password" id="password" class="form-control form-control-sm validate">
              </div>
              <div class="text-center mt-2">
                <button class="btn btn-default btn-rounded my-3">Login <i class="fas fa-sign-in ml-1"></i></button>
              </div>
            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-center text-md-right mt-1">
                <p>Not a member?<a href="#" class="blue-text"> Sign Up</a></p>
                <p>Forgot<a href="#" class="blue-text"> Password?</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>

          </div>
          <!--/.Panel 7-->

          <!--Panel 8-->
          <div class="tab-pane fade" id="panel8" role="tabpanel">

            <!--Body-->
            <div class="modal-body">
              <div class="md-form form-sm mb-5">
                <i class="fas fa-envelope prefix"></i>
                <label data-error="wrong" data-success="right" for="modalLRInput12">Your email:</label>
                <input type="email" id="modalLRInput12" class="form-control form-control-sm validate">
                <br>
                <i class="fas fa-lock prefix"></i>
                <label data-error="wrong" data-success="right" for="modalLRInput13">Your password:</label>
                <input type="password" id="modalLRInput13" class="form-control form-control-sm validate">
                <br>
                <i class="fas fa-lock prefix"></i>
                <label data-error="wrong" data-success="right" for="modalLRInput14">Repeat password:</label>
                <input type="password" id="modalLRInput14" class="form-control form-control-sm validate">
                <br>
              <div class="text-center form-sm mt-2">
                <button class="btn btn-info">Sign up <i class="fas fa-sign-in ml-1"></i></button>
              </div>
              </div>

            </div>
            <!--Footer-->
            <div class="modal-footer">
              <div class="options text-right">
                <p class="pt-1">Already have an account? <a href="#" class="blue-text">Log In</a></p>
              </div>
              <button type="button" class="btn btn-outline-info waves-effect ml-auto" data-dismiss="modal">Close</button>
            </div>
          </div>
          <!--/.Panel 8-->
        </div>

      </div>
    </div>
    <!--/.Content-->
  </div>
</div>



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