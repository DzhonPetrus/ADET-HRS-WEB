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
              <li class="breadcrumb-item active" aria-current="page">USER</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <button type=button class=" btn btn-sm btn-neutral" data-toggle="modal" data-target="#FormUser" id="show_tax_form" onClick="newHandler()">New</button>
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
          <h3 class="mb-0">USER TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="buttons">ACTIONS</th>
                <th scope="col" class="sort" data-sort="id">ID</th>
                <th scope="col" class="sort" data-sort="email">EMAIL</th>
                <th scope="col" class="sort" data-sort="user_type">USER TYPE</th>
              </tr>
            </thead>
            <tbody class="list"></tbody>
          </table>
        </div>
        <br>
      </div>
    </div>
  </div>


  <!-- MODAL FORM -->
  <div class="modal fade" id="FormUser" tabindex="-1" role="dialog" aria-labelledby="FormUsersLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormUsersLabel">USER</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

        <form id="user_form">

          <div class="card-body">
            <h6 class="heading-small text-muted mb-4">Tax Information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-12" id="update_id">
                  <div class="form-group" id="group-id">
                    <label class="form-control-label" for="input-tax-percentage">ID</label>
                    <input type="text" id="id" class="form-control"  name="id">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-email">
                    <label class="form-control-label" for="input-tax-email">Email</label>
                    <input type="text" id="email" class="form-control"  name="email">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-email">
                    <label class="form-control-label" for="input-tax-email">Password</label>
                    <input type="text" id="password" class="form-control"  name="password">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-email">
                    <label class="form-control-label" for="input-tax-email">User Type</label>
                    <select id="user_type" class="form-control"  name="user_type">
                      <option value="admin">Admin</option>
                      <option value="customer">Customer</option>
                      <option value="frontdesk">Front Desk</option>
                    </select>
                  </div>
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
        
        <!-- </div> -->

      </div>
    </div>
  </div>


  <!-- BODY CLOSING -->
</div>

<!-- BODY CLOSING -->
</div>

<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/user.js"></script>