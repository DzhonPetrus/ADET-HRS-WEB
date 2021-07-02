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
          <button type="button" class="btn btn-sm btn-neutral" data-toggle="modal" data-target="#FormTaxes">New</button>
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
              <table class="table align-items-center table-flush" id="myTable">
                <thead class="thead-light">
                  <tr>
                    <th scope="col" class="sort" data-sort="taxCode">Tax Code</th>
                    <th scope="col" class="sort" data-sort="percentage">Percentage</th>
                    <!-- <th scope="col" class="sort" data-sort="date_updated">Last Updated</th> -->
                    <th scope="col" class="sort" data-sort="buttons">Actions</th>
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
      <div class="modal-body">
        <div class="col-xl-12 order-xl-1">


          <!-- <div class="card"> -->

            <form id="tax_form">
              <div class="card-header">
                <div class="row align-items-center">
                  <div class="col-12">
                    <h3 class="mb-0">TAXES FORM</h3>
                  </div>
                  <!--Button-->
                  <div class="col-12 text-right">
                    <button type="submit" class="btn btn-sm btn-primary">Add TAX</button>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <!--First Row-->
                <h6 class="heading-small text-muted mb-4">Tax Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <input type="hidden" name="uuid" id="uuid" value="">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-tax-percentage">PERCENTAGE</label>
                        <input type="Number" id="percentage" class="form-control" placeholder="Type" name="percentage">
                      </div>
                    </div>
                  </div>
                </div>
                <hr class="my-4">
            </form>

          <!-- </div> -->


        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>



<!-- BODY CLOSING -->
</div>

<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/tax.js"></script>