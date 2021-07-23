<!-- Main content -->
  <div class="main-content" >
    <!-- Header -->
    <div class="header py-7 py-lg-8 pt-lg-9"style="background-color:#5e72e4">
      <div class="container">
        <div class="header-body text-center mb-7">
          <div class="row justify-content-center">
            <div class="col-xl-5 col-lg-6 col-md-8 px-5">
            <i class="fa fa-building" style="color:white"></i>
              <h1 class="text-white">Create an account</h1>
              <p class="text-lead text-white">Hotel Reservation System</p>
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
      <!-- Table -->
      <div class="row justify-content-center">
        <div class="col-lg-12 col-md-12">
          <div class="card bg-secondary border-0">

            <div class="card-body px-lg-5 py-lg-5">
              <div class="text-center text-muted mb-4">
              <div class="logo">
                  <img src="<?= base_url() ?>marian-master/assets/img/logo/HRS LOGO.png" alt="">
                </div>
              </div>

              <form role="form" id="formRegister" name="formRegister" data-parsley-validate>
              <hr>
              <div class="card-body">
              <h3 style="text-align:center"> Sign up with Credentials</h3>
          <h6 class="heading-small text-muted mb-4">USER Information</h6>
          <div class="pl-lg-4">
            <div class="row">
                  <div class="col-lg-8">
                      <label for="image" class="form-label">Picture</label>

                      <input class="form-control" type="file" id="imageUpload" name="imageUpload"
                          accept="image/*">
                      <input type="hidden" name="photo_url">
                  </div>
                  <div class="col-lg-4">
                      <img src="https://i.stack.imgur.com/y9DpT.jpg" alt=""
                          class="rounded avatar-lg img-thumbnail" style="object-fit: cover;"
                          id="photo_url_placeholder" name="photo_url_placeholder">
                  </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-email">Email</label>
                  <input type="text" id="email" name="email" class="form-control" placeholder="Email" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-password">Password</label>
                  <input type="password" id="password" name="password" class="form-control" placeholder="Password" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-password">Confirm Password</label>
                  <input type="password" id="confirmpassword" name="confirmpassword" class="form-control" placeholder="Confirm Password" data-parsley-equalto="#password" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-first-name">First Name</label>
                  <input id="firstname" name="first_name" class="form-control" placeholder="First Name" type="text" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-middle-name">Middle Name</label>
                  <input id="middle_name" name="middle_name" class="form-control" placeholder="Middle Name" type="text" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-last-name">Last Name</label>
                  <input id="last_name" name="last_name" class="form-control" placeholder="Last Name" type="text" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-birthdate">Birthdate</label>
                  <input type="date" id="birth_date" name="birth_date" class="form-control" placeholder="User Birthdate" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-user-nationality">Nationality</label>
                  <input type="text" id="nationality" name="nationality" class="form-control" placeholder="Nationality" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-contact-number">Contact Number</label>
                  <input id="contact_no" name="contact_no" class="form-control" placeholder="Contact Number" type="number" required>
                </div>
              </div>
            </div>

          <hr class="my-4">
          <h6 class="heading-small text-muted mb-4">Address</h6>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-Street">Street</label>
                  <input type="text" id="street1" name="street1" class="form-control" placeholder="Street" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-city">City</label>
                  <input type="text" id="city1" name="city1" class="form-control" placeholder="City" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-postal-code">Postal code</label>
                  <input type="number" id="zip1" name="zip1" class="form-control" placeholder="Postal code" required>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-state">State</label>
                  <input type="text" id="state1" name="state1" class="form-control" placeholder="State" required>
                </div>
              </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">Country</label>
                    <input type="text" id="country1" name="country1" class="form-control" placeholder="Country" required>
                  </div>
                </div>
            </div>
          <hr class="my-4">
          <h6 class="heading-small text-muted mb-4">Address 2 (Optional)</h6>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-Street">Street</label>
                  <input type="text" id="street2" name="street2" class="form-control" placeholder="Street" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-city">City</label>
                  <input type="text" id="city2" name="city2" class="form-control" placeholder="City" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group">
                  <label class="form-control-label" for="input-postal-code">Postal code</label>
                  <input type="number" id="zip2" name="zip2" class="form-control" placeholder="Postal" >
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group">
                  <label class="form-control-label" for="input-state">State</label>
                  <input type="text" id="state2" name="state2" class="form-control" placeholder="State" >
                </div>
              </div>
                <div class="col-lg-6">
                  <div class="form-group">
                    <label class="form-control-label" for="input-country">Country</label>
                    <input type="text" id="country2" name="country2" class="form-control" placeholder="Country" >
                  </div>
                </div>
            </div>
        </div>
                <div class="row my-4">
                  <div class="col-12">
                    <div class="custom-control custom-control-alternative custom-checkbox">
                      <input type="checkbox">
                      <label>
                        <span class="text-muted">I agree with the <a href="#!" style="color:#5e72e4">Privacy Policy</a></span>
                    </div>
                  </div>
                  <div class="row my-3">
                    <div class="col-12">
                        <a href="<?= base_url('Access/login') ?>" class="text-light">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<small>Already have an account?</small></a>
                      </label>
                    </div>
                  </div>
                </div>
                <div class="text-center">
                  <button type="submit" class="btn btn-primary my-4" style="background-color:#5e72e4; border-color:#5e72e4">Create account</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Argon Scripts -->
  <!-- Core -->
  <script src="../assets/vendor/jquery/dist/jquery.min.js"></script>
  <script src="../assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
  <script src="../assets/vendor/js-cookie/js.cookie.js"></script>
  <script src="../assets/vendor/jquery.scrollbar/jquery.scrollbar.min.js"></script>
  <script src="../assets/vendor/jquery-scroll-lock/dist/jquery-scrollLock.min.js"></script>
  <!-- Argon JS -->
  <script src="../assets/js/argon.js?v=1.2.0"></script>
</body>

</html>

  <!-- LOGIN JS -->
  <script defer src="<?= base_url('assets')?>/js/access/register.js "></script>