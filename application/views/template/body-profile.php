<div class="main-content" id="panel">
    <!-- Header -->
    <div class="header pb-6 d-flex align-items-center" style="min-height: 500px; background-image: url(../assets/img/theme/profile-cover.jpg); background-size: cover; background-position: center top;">
      <!-- Mask -->
      <span class="mask bg-gradient-default opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">Hello, <?= $this->session->userdata['user_info']->first_name.' '.$this->session->userdata['user_info']->middle_name.' '.$this->session->userdata['user_info']->last_name ?></h1>
            <p class="text-white mt-0 mb-5">This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks</p>
            <a id="btnEdit" class="btn btn-neutral">Edit profile</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Page content -->
    <div class="container-fluid mt--6">
      <div class="row">
        <div class="col-xl-4 order-xl-2">
          <div class="card card-profile">
            <img src="../assets/img/theme/img-1-1000x600.jpg" alt="Image placeholder" class="card-img-top">
            <div class="row justify-content-center">
              <div class="col-lg-3 order-lg-2">
                <div class="card-profile-image">
                  <a href="#">
                    <img src="<?= API_PUBLIC.$this->session->userdata['user_info']->photo_url ?>" class="rounded-circle">
                  </a>
                </div>
              </div>
            </div>
            <div class="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col">
                  <div class="card-profile-stats d-flex justify-content-center"></div>
                </div>
              </div>
              <div class="text-center">
                <h5 class="h3">
                  <?= $this->session->userdata['user_info']->first_name.' '.$this->session->userdata['user_info']->middle_name.' '.$this->session->userdata['user_info']->last_name ?>
                  <span class="font-weight-light"></span>
                </h5>
                <div class="h5 font-weight-300">
                  <i class="ni location_pin mr-2"></i><?= $this->session->userdata['user_info']->city1.', '.$this->session->userdata['user_info']->country1 ?>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">Edit profile </h3>
                </div>
                <!-- <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Settings</a>
                </div> -->
              </div>
            </div>
            <div class="card-body">

<form role="form" id="profile_form" name="profile_form" data-parsley-validate>
                  <input hidden type="text" id="user_info_id" name="user_info_id" value="<?= $this->session->userdata['user_info']->user_info_id ?>">
                  <input hidden type="text" id="user_id" name="user_id" value="<?= $this->session->userdata['user_id'] ?>">
          <div class="pl-lg-4">
          <h6 class="heading-small text-muted mb-4">User Information</h6>
            <div class="row">
                  <div class="col-lg-8">
                      <label for="image" class="form-label">Picture</label>

                      <input class="form-control" type="file" id="imageUpload" name="imageUpload"
                          accept="image/*">
                      <input type="hidden" name="photo_url">
                  </div>
                  <div class="col-lg-4">
                      <img src="<?= API_PUBLIC.$this->session->userdata['user_info']->photo_url ?>" alt=""
                          class="rounded avatar-lg img-thumbnail" style="object-fit: cover;"
                          id="photo_url_placeholder" name="photo_url_placeholder">
                  </div>
                  </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group" id="group-email">
                  <label class="form-control-label" for="input-user-email">Email</label>
                  <input type="text" id="email" name="email" class="form-control" placeholder="Email" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group" id="group-first_name">
                  <label class="form-control-label" for="input-user-first-name">First Name</label>
                  <input id="first_name" name="first_name" class="form-control" placeholder="First Name" type="text" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-middle_name">
                  <label class="form-control-label" for="input-user-middle-name">Middle Name</label>
                  <input id="middle_name" name="middle_name" class="form-control" placeholder="Middle Name" type="text" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-last_name">
                  <label class="form-control-label" for="input-user-last-name">Last Name</label>
                  <input id="last_name" name="last_name" class="form-control" placeholder="Last Name" type="text" required>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group" id="group-birth_date">
                  <label class="form-control-label" for="input-user-birthdate">Birthdate</label>
                  <input type="date" id="birth_date" name="birth_date" class="form-control" placeholder="User Birthdate" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-nationality">
                  <label class="form-control-label" for="input-user-nationality">Nationality</label>
                  <input type="text" id="nationality" name="nationality" class="form-control" placeholder="Nationality" required>
                </div>
              </div>
              <div class="col-md-4">
                <div class="form-group" id="group-contact_no">
                  <label class="form-control-label" for="input-contact-number">Contact Number</label>
                  <input id="contact_no" name="contact_no" class="form-control" placeholder="Contact Number" type="number" required>
                </div>
              </div>
            </div>

          <hr class="my-4">
          <h6 class="heading-small text-muted mb-4">Address</h6>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group" id="group-street1">
                  <label class="form-control-label" for="input-Street">Street</label>
                  <input type="text" id="street1" name="street1" class="form-control" placeholder="Street" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-city1">
                  <label class="form-control-label" for="input-city">City</label>
                  <input type="text" id="city1" name="city1" class="form-control" placeholder="City" required>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-zip1">
                  <label class="form-control-label" for="input-postal-code">Postal code</label>
                  <input type="number" id="zip1" name="zip1" class="form-control" placeholder="Postal code" required>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group" id="group-state1">
                  <label class="form-control-label" for="input-state">State</label>
                  <input type="text" id="state1" name="state1" class="form-control" placeholder="State" required>
                </div>
              </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-country1">
                    <label class="form-control-label" for="input-country">Country</label>
                    <input type="text" id="country1" name="country1" class="form-control" placeholder="Country" required>
                  </div>
                </div>
            </div>
          <hr class="my-4">
          <h6 class="heading-small text-muted mb-4">Address 2</h6>
            <div class="row">
              <div class="col-lg-4">
                <div class="form-group" id="group-street2">
                  <label class="form-control-label" for="input-Street">Street</label>
                  <input type="text" id="street2" name="street2" class="form-control" placeholder="Street" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-city2">
                  <label class="form-control-label" for="input-city">City</label>
                  <input type="text" id="city2" name="city2" class="form-control" placeholder="City" >
                </div>
              </div>
              <div class="col-lg-4">
                <div class="form-group" id="group-zip2">
                  <label class="form-control-label" for="input-postal-code">Postal code</label>
                  <input type="number" id="zip2" name="zip2" class="form-control" placeholder="Postal" >
                </div>
              </div>
              <div class="col-lg-6">
                <div class="form-group" id="group-state2">
                  <label class="form-control-label" for="input-state">State</label>
                  <input type="text" id="state2" name="state2" class="form-control" placeholder="State" >
                </div>
              </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-country2">
                    <label class="form-control-label" for="input-country">Country</label>
                    <input type="text" id="country2" name="country2" class="form-control" placeholder="Country" >
                  </div>
                </div>
            </div>
        </div>
                <div class="text-center" id="group-btnUpdate">
                  <button id="btnUpdate" type="submit" class="btn btn-primary my-4" style="background-color:#5e72e4; border-color:#5e72e4">Save Changes</button>
                </div>
              </form>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <!-- PROFILE JS -->
  <script defer src="<?= base_url('assets')?>/js/pages/profile.js "></script>