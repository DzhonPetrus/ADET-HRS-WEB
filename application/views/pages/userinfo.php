<!-- HEADER -->
<div class="col-xl-12 order-xl-1">
          <div class="card">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-8">
                  <h3 class="mb-0">User Information</h3>
                </div>
                <div class="col-4 text-right">
                  <a href="#!" class="btn btn-sm btn-primary">Add Data</a>
                </div>
              </div>
            </div>
            <div class="card-body">
              <form id="userinfo-form">
                <h6 class="heading-small text-muted mb-4">User Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-email">Email</label>
                        <input type="text" id="email" name="email" class="form-control" placeholder="UserEmail">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-first-name">First Name</label>
                        <input id="firstname" name="firstname" class="form-control" placeholder="First Name" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-middle-name">Middle Name</label>
                        <input id="middle_name" name="middle_name" class="form-control" placeholder="Middle Name" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-last-name">Last Name</label>
                        <input id="last_name" name="last_name" class="form-control" placeholder="Last Name" type="text">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-birthdate">Birthdate</label>
                        <input type="date" id="birth_date" name="birth_date" class="form-control" placeholder="User Birthdate">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-nationality">Nationality</label>
                        <input type="text" id="nationality" name="nationality" class="form-control" placeholder="Nationality" value="Filipino">
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-user-photo-url">Photo URL</label>
                        <input id="photo_url" name="photo_url" class="form-control" placeholder="Photo URL" type="text">
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-fk-lp-id">Loyalty Points ID</label>
                        <input type="text" id="loyalty_point_id" name="loyalty_point_id" class="form-control" placeholder="Loyalty Points ID" value="H2351JsG23">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4">
<!--second row-->
                <h6 class="heading-small text-muted mb-4">Contact Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-contact-number">Contact Number</label>
                        <input id="contact_no" name="contact_no" class="form-control" placeholder="Contact Number" type="number">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4">
<!--third row-->
                <h6 class="heading-small text-muted mb-4">Address</h6>
                <div class="row">
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label" for="input-Street">Street</label>
                      <input type="text" id="street1" name="street1" class="form-control" placeholder="Street">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label" for="input-city">City</label>
                      <input type="text" id="city1" name="city1" class="form-control" placeholder="City">
                    </div>
                  </div>
                  <div class="col-lg-4">
                    <div class="form-group">
                      <label class="form-control-label" for="input-postal-code">Postal code</label>
                      <input type="number" id="zip1" name="zip1" class="form-control" placeholder="Postal code">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-control-label" for="input-state">State</label>
                      <input type="text" id="state1" name="state1" class="form-control" placeholder="State">
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="form-group">
                      <label class="form-control-label" for="input-country">Country</label>
                      <input type="text" id="country1" name="country1" class="form-control" placeholder="Country">
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>



<!-- BODY -->


<table id="myTable">
  <thead>
    <tr>
      <th>
        User Info ID
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
      <!--<th>
       Birthdate
      </th>
      <th>
       Nationality
      </th>
      <th>
       Photo URL
      </th>
      <th>
       Loyalty Point ID
      </th>
      <th>
       Contact Number
      </th>
      <th>
       Street
      </th>
      <th>
       City
      </th>
      <th>
       Postal Code
      </th>
      <th>
       State
      </th>
      <th>
       Country
      </th>-->
      <th>
       Action
      </th>
    </tr>
</thead>
<tbody>
</tbody>
</table>



<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/userinfo.js"></script>




