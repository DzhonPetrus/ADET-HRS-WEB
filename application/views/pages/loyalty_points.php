<!-- HEADER -->
<div class="col-xl-12 order-xl-1">
          <div class="card">
          <form id="loyaltypoint_form">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">LOYALTY POINT FORM</h3>
                </div>
                <!--Button-->
                <div class="col-12 text-right">
                  <button type="submit" class="btn btn-sm btn-primary">Add Loyalty Point</button>
                </div>
              </div>
            </div>
            <div class="card-body">
<!--First Row-->
                <h6 class="heading-small text-muted mb-4">Loyalty Points Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <input type="hidden" name="uuid" id="uuid" value="">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-tax-percentage">Points</label>
                        <input type="Number" id="points" class="form-control" placeholder="Type" name="points">
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


<table id="myTable" class="display nowrap">
  <thead>
    <tr>
      <th>
        Loyalty Points ID
      </th>
      <th>
        Points
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
<script src="<?= base_url('assets') ?>/js/pages/loyaltypoints.js"></script>




