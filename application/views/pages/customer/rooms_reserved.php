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
              <li class="breadcrumb-item active" aria-current="page">Room Reserve</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <button type=button class=" btn btn-sm btn-neutral" data-toggle="modal" data-target="#FormRoomReserved" id="show_tax_form" onClick="newHandler()">New</button>
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
          <h3 class="mb-0">ROOM RESERVED TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="buttons">Actions</th>
                <th scope="col" class="sort" data-sort="room_reserved_id">Room Reserved ID</th>
                <th scope="col" class="sort" data-sort="booking_id">Booking ID</th>
                <th scope="col" class="sort" data-sort="room_id">Room Number</th>
                <th scope="col" class="sort" data-sort="room_reserved_status">Room Status</th>
                <th scope="col" class="sort" data-sort="package_id">Package</th>
                <th scope="col" class="sort" data-sort="created">Created</th>
              </tr>
            </thead>
            <tbody class="list"></tbody>
          </table>
        </div>
        <br>

        <!-- Card footer -->

        <!-- <div class="card-footer py-4">
              <nav aria-label="...">
                <ul class="pagination justify-content-end mb-0">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      <i class="fas fa-angle-left"></i>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active">
                    <a class="page-link" href="#">1</a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      <i class="fas fa-angle-right"></i>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> -->

      </div>
    </div>
  </div>


  <!-- MODAL FORM -->
  <div class="modal fade" id="FormRoomReserved" tabindex="-1" role="dialog" aria-labelledby="FormRoomReservedLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormRoomReservedLabel">Room Reserve</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

        <form id="room_reserve_form">

          <div class="card-body">
            <h6 class="heading-small text-muted mb-4">Room Reserved Information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-12" id="update_room_reserved_id">
                  <div class="form-group" id="group-room_reserved_id">
                    <label class="form-control-label" for="input-tax-percentage">Room Reserved ID</label>
                    <input type="text" id="room_reserved_id" class="form-control" name="room_reserved_id">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Booking ID</label>
                    <select id="booking_id" class="form-control" name="booking_id"></select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-room_id">
                    <label class="form-control-label" for="input-tax-percentage">Room Number</label>
                    <select id="room_id" class="form-control" name="room_id"></select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-description">
                    <label class="form-control-label" for="input-tax-percentage">Room Status</label>
                    <select id="room_reserved_status" class="form-control" name="room_reserved_status">
                      <option value="Ongoing">Ongoing</option>
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Rate</label>
                    <input type="number" id="rate" class="form-control" name="rate">
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">No. of Nights</label>
                    <input type="number" id="no_of_nights" class="form-control" name="no_of_nights" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">No. of Guests</label>
                    <input type="number" id="no_of_guest" class="form-control" name="no_of_guest" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Start Date</label>
                    <input type="date" id="date_from" class="form-control" name="date_from" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">End Date </label>
                    <input type="date" id="date_to" class="form-control" name="date_to" required>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Package</label>
                    <select id="package_id" class="form-control" name="package_id"></select>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Check In</label>
                    <input type="date" id="checkIn" class="form-control" name="checkIn" >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Check Out</label>
                    <input type="date" id="checkOut" class="form-control" name="checkOut">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-creator">
                    <label class="form-control-label" for="input-tax-percentage">CREATED BY</label>
                    <input type="text" id="creator" class="form-control" name="creator">
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
<script src="<?= base_url('assets') ?>/js/pages/customer/room_reserved.js"></script>