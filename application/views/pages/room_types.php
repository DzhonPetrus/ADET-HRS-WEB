<!-- HEADER -->
<div class="col-xl-12 order-xl-1">
          <div class="card">
          <form id="roomtypes_form">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">ROOM TYPES FORM</h3>
                </div> 
                  <!--Button-->
                <div class="col-12 text-right">
                  <button type="submit" class="btn btn-sm btn-primary">Add Pricing</button>
                </div>
              </div>
            </div>
            <div class="card-body">
<!--First Row -->
                <h6 class="heading-small text-muted mb-4">Pricing Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <input type="hidden" name="uuid" id="uuid" value="">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-price-type">Type</label>
                        <input type="text" id="type" class="form-control" name="type">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-min-guest-pricing">Minimun Guest</label>
                        <input type="number" id="min_guest" class="form-control" name="min_guest">
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group">
                        <label class="form-control-label" for="input-max-guest-pricing">Maximum Guest</label>
                        <input type="number" id="max_guest" class="form-control" name="max_guest">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-description">Description</label>
                        <textarea rows="4" id="description" name="description" class="form-control" placeholder="Description"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-description">Pricing ID</label>
                        <select id="pricing_id" class="form-control" name="pricing_id">
                        </select>
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
        ROOM TYPE ID
      </th>
      <th>
        TYPE
      </th>
      <th>
        DESCRIPTION
      </th>
      <th>
       MINIMUM GUEST
      </th> 
      <th>
       MAXIMUM GUEST
      </th>
      <th>
       PRICE
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

<script src="<?= base_url('assets') ?>/js/pages/roomtypes.js"></script>



