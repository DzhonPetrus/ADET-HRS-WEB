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
              <li class="breadcrumb-item active" aria-current="page">Payments</li>
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
          <h3 class="mb-0">PAYMENTS TABLE</h3>
        </div>
        <!-- Light table -->
        <div class="table-responsive">
          <!-- <table id="myTable" style="width:100%" class="display nowrap"> -->
          <table class="table align-items-center table-flush" style="width:100%" id="myTables">
            <thead class="thead-light">
              <tr>
                <th scope="col" class="sort" data-sort="buttons">Actions</th>
                <th scope="col" class="sort" data-sort="payment_id">Payments ID</th>
                <th scope="col" class="sort" data-sort="booking_id">Booking ID</th>
                <th scope="col" class="sort" data-sort="mode">Mode of Payment</th>
                <th scope="col" class="sort" data-sort="reference_no">Reference No</th>
                <th scope="col" class="sort" data-sort="payment_type">Payment Type</th>
                <th scope="col" class="sort" data-sort="payment_status">Payment Status</th>
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
  <div class="modal fade" id="FormPayments" tabindex="-1" role="dialog" aria-labelledby="FormPaymentsLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="FormPaymentsLabel">Paymentss</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <!-- <div class="modal-body"> -->

        <div class="card shadow-none">

        <form id="payment_form">

          <div class="card-body">
            <h6 class="heading-small text-muted mb-4">Payments Information</h6>
            <div class="pl-lg-12">
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group" id="group-payment_id">
                    <label class="form-control-label" for="input-tax-percentage">Payments ID</label>
                    <input type="text" id="payment_id" class="form-control" name="payment_id">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-booking_id">
                    <label class="form-control-label" for="input-tax-percentage">Booking</label>
                    <select id="booking_id" class="form-control" name="booking_id">
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-mode">
                    <label class="form-control-label" for="input-tax-percentage">Mode of Payment</label>
                    <select id="mode" class="form-control" name="mode">
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-ref_no">
                    <label class="form-control-label" for="input-tax-percentage">Reference No</label>
                    <input type="text" id="ref_no" class="form-control" name="ref_no">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-payment_type">
                    <label class="form-control-label" for="input-tax-percentage">Payment Type</label>
                    <select id="payment_type" class="form-control" name="payment_type">
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-payment_status">
                    <label class="form-control-label" for="input-tax-percentage">Payment Status</label>
                    <select id="payment_status" class="form-control" name="payment_status">
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-amount">
                    <label class="form-control-label" for="input-tax-percentage">Amount</label>
                    <input type="text" id="amount" class="form-control" name="amount">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-tax_code">
                    <label class="form-control-label" for="input-tax-percentage">Tax Percentage</label>
                    <select id="tax_code" class="form-control" name="tax_code">
                    </select>
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-pd_code">
                    <label class="form-control-label" for="input-tax-percentage">Promo & Discount Code</label>
                    <input type="text" id="pd_code" class="form-control" name="pd_code">
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group" id="group-is_neither">
                    <label class="form-control-label" for="input-tax-percentage">Neither</label>
                    <input type="radio" id="is_neither" class="form-control"  name="cancelRefund" value="is_neither" checked>
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group" id="group-is_cancelled">
                    <label class="form-control-label" for="input-tax-percentage">Cancel</label>
                    <input type="radio" id="is_cancelled" class="form-control"  name="cancelRefund" value="is_cancelled">
                  </div>
                </div>
                <div class="col-lg-2">
                  <div class="form-group" id="group-is_refund">
                    <label class="form-control-label" for="input-tax-percentage">Refund</label>
                    <input type="radio" id="is_refund" class="form-control" name="cancelRefund" value="is_refund">
                  </div>
                </div>
              </div>
              <div class="row" id="group-cancelled_refund_info">

                <div class="col-lg-12">
                  <div class="form-group" id="group-cancelled_refund_by">
                    <label class="form-control-label" for="input-tax-percentage">Cancelled/Refund By</label>
                    <input type="text" id="cancelled_refund_by" class="form-control" name="cancelled_refund_by">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-date_cancelled_refund">
                    <label class="form-control-label" for="input-tax-percentage">Cancelled/Refund Date</label>
                    <input type="date" id="date_cancelled_refund" class="form-control" name="date_cancelled_refund">
                  </div>
                </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-cancelled_refund_amt">
                    <label class="form-control-label" for="input-tax-percentage">Cancelled/Refund Amount</label>
                    <input type="number" min="0" id="cancelled_refund_amt" class="form-control" name="cancelled_refund_amt">
                  </div>
                </div>
              </div>
                <div class="col-lg-12">
                  <div class="form-group" id="group-process_by">
                    <label class="form-control-label" for="input-tax-percentage">Processed By</label>
                    <input type="text" class="form-control" value="<?= $this->session->userdata['email'] ?>" readonly>
                    <input type="text" id="process_by" class="form-control" name="process_by" hidden value="<?= $this->session->userdata['user_id'] ?>">
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
<script src="<?= base_url('assets') ?>/js/pages/payments.js"></script>