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
              <li class="breadcrumb-item active" aria-current="page">Taxes</li>
            </ol>
          </nav>
        </div>
        <div class="col-lg-6 col-5 text-right">
          <button type=button class=" btn btn-sm btn-neutral" data-toggle="modal" data-target="#FormTaxes" id="show_tax_form" onClick="newHandler()">New</button>
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
          <h3 class="mb-0">TAXES TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="buttons">Actions</th>
                <th scope="col" class="sort" data-sort="taxCode">Tax Code</th>
                <th scope="col" class="sort" data-sort="percentage">Percentage</th>
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
  <div class="modal fade" id="FormTaxes" tabindex="-1" role="dialog" aria-labelledby="FormTaxesLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormTaxesLabel">TAXES</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

        <form id="tax_form">

          <div class="card-body">
            <h6 class="heading-small text-muted mb-4">Tax Information</h6>
            <div class="pl-lg-4">
              <div class="row">
                <div class="col-lg-12" id="update_tax_code">
                  <div class="form-group" id="group-taxCode">
                    <label class="form-control-label" for="input-tax-percentage">Tax Code</label>
                    <input type="text" id="taxCode" class="form-control" readonly name="taxCode">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-percentage">
                    <label class="form-control-label" for="input-tax-percentage">PERCENTAGE</label>
                    <input type="Number" id="percentage" class="form-control" readonly name="percentage">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-creator">
                    <label class="form-control-label" for="input-tax-percentage">CREATED BY</label>
                    <input type="text" id="creator" class="form-control" readonly name="creator">
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
<script src="<?= base_url('assets') ?>/js/pages/tax.js"></script>