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
              <li class="breadcrumb-item active" aria-current="page">Promo and Discount</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <button type=button class=" btn btn-sm btn-neutral" data-toggle="modal" data-target="#FormPD" id="show_tax_form" onClick="newHandler()">New</button>
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
          <h3 class="mb-0">PROMO AND DISCOUNT TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="buttons">Actions</th>
                <th scope="col" class="sort" data-sort="pd_code">Promo/Discount ID</th>
                <th scope="col" class="sort" data-sort="type">TYPE</th>
                <th scope="col" class="sort" data-sort="room_type_id">Room Type</th>
                <th scope="col" class="sort" data-sort="description">Description</th>
                <th scope="col" class="sort" data-sort="discount_percentage_amount">Discount Amount</th>
                <th scope="col" class="sort" data-sort="condition_code">Condition ID</th>
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
  <div class="modal fade" id="FormPD" tabindex="-1" role="dialog" aria-labelledby="FormPDLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormPDLabel">Promo and Discount</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

        <form id="pd_form">

          <div class="card-body">
            <h6 class="heading-small text-muted mb-4">Promo and Discount Information</h6>
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
                <div class="col-lg-12" id="update_pd_code">
                  <div class="form-group" id="group-pd_code">
                    <label class="form-control-label" for="input-tax-percentage">Promo/Discount ID</label>
                    <input type="text" id="pd_code" class="form-control" name="pd_code">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Type</label>
                    <select id="type" class="form-control" name="type" required>
                      <option value="Promo">Promo</option>
                      <option value="Discount">Discount</option>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-description">
                    <label class="form-control-label" for="input-tax-percentage">Description</label>
                    <input type="text" id="description" class="form-control" name="description">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-description">
                    <label class="form-control-label" for="input-tax-percentage">Room Type</label>
                    <select id="room_type_id" class="form-control" name="room_type_id" required>
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Discount Amount</label>
                    <input type="number" id="discount_percentage_amount" class="form-control" name="discount_percentage_amount" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-description">
                    <label class="form-control-label" for="input-tax-percentage">Valid From</label>
                    <input type="date" id="valid_from" class="form-control" name="valid_from" required>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="form-group" id="group-type">
                    <label class="form-control-label" for="input-tax-percentage">Valid Until</label>
                    <input type="date" id="valid_until" class="form-control" name="valid_until" required>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-description">
                    <label class="form-control-label" for="input-tax-percentage">Condition ID</label>
                    <select id="condition_code" class="form-control" name="condition_code">
                    </select>
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
<script src="<?= base_url('assets') ?>/js/pages/promo_discount.js"></script>