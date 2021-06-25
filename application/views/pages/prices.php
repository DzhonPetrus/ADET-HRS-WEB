<!-- HEADER -->
<div class="col-xl-12 order-xl-1">
          <div class="card">
          <form id="pricing_form">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">PRICING FORM</h3>
                </div>
                <!--Button-->
                <div class="col-12 text-right">
                  <button type="submit" class="btn btn-sm btn-primary">Add Pricing</button>
                </div>
              </div>
            </div>
            <div class="card-body">
<!--First Row-->
                <h6 class="heading-small text-muted mb-4">Pricing Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <input type="hidden" name="uuid" id="uuid" value="">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-type">Price</label>
                        <input type="number" id="price_per_qty" class="form-control" name="price_per_qty">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-description">Date Start</label>
                        <input type="date" id="date_start" class="form-control" name="date_start">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-description">Date End</label>
                        <input type="date" id="date_end" class="form-control" name="date_end">
                      </div>
                    </div>
                  </div>
                  </div>
                <hr class="my-4">
              </form>
            </div>
          </div>
        </div>



<!-- BODY -->


<table id="myTable">
  <thead>
    <tr>
      <th>
        Pricing ID
      </th>
      <th>
        Prices per QTY
      </th>
      <th>
        Start Date
      </th>
      <th>
        End Date
      </th> 
      <th>
        Action
      </th>
    </tr>
</thead>
<tbody>
</tbody>
</table>



<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/pricing.js"></script>




