<div class="main-content">
    <!-- Header -->
    <div class="header  py-7 py-lg-8 pt-lg-9" style="background-color:#5e72e4">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
                <i class="fa fa-building" style="color:white"></i>
              <h1 class="display-4 text-white">
                Hotel Reservation System
              </h1>
              
              <p class="text-lead text-white">with Online Payment</p>
            </div>
          </div>
        </div>
      </div>
      <div class="separator separator-bottom separator-skew zindex-100">
        <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
        </svg>
      </div>
    </div>
    <!-- Page content -->
    <div class="container mt--8 pb-5">
      <div class="row justify-content-center">
        <div class="col-lg-5 col-md-7">
          <div class="card bg-secondary border-0 mb-0">
            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
                <div class="logo">
                  <img src="<?= base_url() ?>marian-master/assets/img/logo/HRS LOGO.png" alt="">
                </div>
                <hr>
                <h3>Sign in with Credentials</h3>
              </div>
              <form role="form" id="formLogin" name="formLogin" data-parsley-validate>
                <div class="form-group mb-3">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-email-83"></i></span>
                    </div>
                    <input class="form-control" placeholder="Email" type="email" id="email"  name="email" required>
                  </div>
                </div>
                <div class="form-group">
                  <div class="input-group input-group-merge input-group-alternative">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="ni ni-lock-circle-open"></i></span>
                    </div>
                    <input class="form-control" placeholder="Password" type="password" id="password"  name="password" required>
                  </div>
                </div>
                  <div class="row">
                <div class="custom-control custom-control-alternative custom-checkbox">
                  <input  type="checkbox">
                  <label>
                    <span class="text-muted">Remember me</span>
                  </label>
                </div>
                  </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary my-4" style="background-color:#5e72e4; border-color:#5e72e4">Sign in</button>
                </div>
              </form>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col-6">
              <a href="#" class="text-light"><small>Forgot password?</small></a>
            </div>
            <div class="col-6 text-right">
              <a href="<?= base_url('Access/register') ?>" class="text-light"><small>Create new account</small></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- LOGIN JS -->
  <script defer src="<?= base_url('assets')?>/js/access/login.js "></script>