<!-- HEADER -->
<div class="col-xl-12 order-xl-1">
          <div class="card">
          <form id="amenities_form">
            <div class="card-header">
              <div class="row align-items-center">
                <div class="col-12">
                  <h3 class="mb-0">AMENTIES FORM</h3>
                </div>
                <!--Button-->
                <div class="col-12 text-right">
                  <button type="submit" class="btn btn-sm btn-primary">Add Amenities</button>
                </div>
              </div>
            </div>
            <div class="card-body">
<!--First Row-->
                <h6 class="heading-small text-muted mb-4">Amenities Information</h6>
                <div class="pl-lg-4">
                  <div class="row">
                    <input type="hidden" name="uuid" id="uuid" value="">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-type">TYPE</label>
                        <input type="text" id="type" class="form-control" placeholder="Type" name="type">
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="form-group">
                        <label class="form-control-label" for="input-amenities-description">Description</label>
                        <textarea rows="4" id="description" name="description" class="form-control" placeholder="Add ons, Request, etc ..."></textarea>
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
        Amenities ID
      </th>
      <th>
        Type
      </th>
      <th>
        Description
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
<script src="<?= base_url('assets') ?>/js/pages/amenity.js"></script>




