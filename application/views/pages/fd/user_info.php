<!-- HEADER -->
<div class="header bg-primary pb-6">
  <div class="container-fluid">
    <div class="header-body">
      <div class="row align-items-center py-4">
        <div class="col-lg-6 col-7">
          <h6 class="h2 text-white d-inline-block mb-0">Tables</h6>
          <nav aria-label="breadcrumb" class="d-none d-md-inline-block ml-md-4">
            <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
              <li class="breadcrumb-item"><a href="./"><i class="fas fa-home"></i></a></li>
              <li class="breadcrumb-item"><a href="#">Tables</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Informations</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>


<!-- BODY -->

<div class="container-fluid mt--6">
  <div class="row">
    <div class="col">
      <div class="card">
        <!-- Card header -->
        <div class="card-header border-0">
          <h3 class="mb-0">USER INFORMATIONS TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">

            <thead class="thead-light">
              <tr>
                <th>Actions</th>
                <th>
                  User Information ID
                </th>
                <th>
                  Email
                </th>
                <th>
                  First Name
                </th>
                <th>
                  Middle Name
                </th>
                <th>
                  Last Name
                </th>
                <th>
                  Birthdate
                </th>
                <th>
                  Nationality
                </th>
                <th>
                  Contact No
                </th>
              </tr>
            </thead>
            <tbody>
            </tbody>

          </table>
        </div>
        <br>
      </div>
    </div>
  </div>
  </div>


  <div class="modal fade" id="FormUserInfo" tabindex="-1" role="dialog" aria-labelledby="FormUsersLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormUsersLabel">USER INFORMATION</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

          <form id="user_info_form">
            
            <div class="card-body">
              <h6 class="heading-small text-muted mb-4">USER Information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-lg-8">
                      <label for="image" class="form-label">Image</label>
                      <input class="form-control" type="file" id="imageUpload" name="imageUpload"
                          accept="image/*">
                      <input type="hidden" name="photo_url">
                  </div>
                  <div class="col-lg-4">
                      <img src="https://i.stack.imgur.com/y9DpT.jpg" alt=""
                          class="rounded avatar-lg img-thumbnail" style="object-fit: cover;"
                          id="photo_url_placeholder" name="photo_url_placeholder">
                  </div>
                  <div class="col-lg-12" id="update_user_info_id">
                  <div class="form-group" id="group-user_info_id">
                    <label class="form-control-label" for="input-tax-percentage">User Info ID</label>
                    <input type="text" id="user_info_id" class="form-control"  name="user_info_id">
                  </div>
                </div><div class="col-lg-12">
                  <div class="form-group" id="group-email">
                      <label class="form-control-label" for="input-user-email">Email</label>
                      <input type="text" id="email" name="email" class="form-control" placeholder="UserEmail" required>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group" id="group-first_name">
                      <label class="form-control-label" for="input-user-first-name">First Name</label>
                      <input id="first_name" name="first_name" class="form-control" placeholder="First Name" type="text" required>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group" id="group-middle_name">
                      <label class="form-control-label" for="input-user-middle-name">Middle Name</label>
                      <input id="middle_name" name="middle_name" class="form-control" placeholder="Middle Name" type="text">
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-group" id="group-last_name">
                      <label class="form-control-label" for="input-user-last-name">Last Name</label>
                      <input id="last_name" name="last_name" class="form-control" placeholder="Last Name" type="text" required>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-lg-6">
                    <div class="form-group" id="group-birth_date">
                      <label class="form-control-label" for="input-user-birthdate">Birthdate</label>
                      <input type="date" id="birth_date" name="birth_date" class="form-control" placeholder="User Birthdate" required>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group" id="group-nationality">
                      <label class="form-control-label" for="input-user-nationality">Nationality</label>
                      <input type="text" id="nationality" name="nationality" class="form-control" placeholder="Nationality" required>

                    </div>
                  </div>
                </div>
                
              </div>

              <hr class="my-4">
              <h6 class="heading-small text-muted mb-4">Contact Information</h6>
              <div class="pl-lg-4">
                <div class="row">
                  <div class="col-md-12">
                    <div class="form-group" id="group-contact_no">
                      <label class="form-control-label" for="input-contact-number">Contact Number</label>
                      <input id="contact_no" name="contact_no" class="form-control" placeholder="Contact Number" type="number" required>
                    </div>
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
            <div class="col-12 text-right">
              <button type="button" class="btn btn-secondary" onClick="formReset()" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary" id="group-btnAdd">Add</button>
              <button type="submit" class="btn btn-primary" id="group-btnUpdate">Save Changes</button>
            </div>
            </div>
          </form>
        </div>

      </div>

      <!-- </div> -->

    </div>
  </div>
</div>



<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/fd/user_info.js"></script>