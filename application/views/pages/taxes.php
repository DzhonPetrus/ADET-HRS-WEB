<!-- HEADER -->
<button type=button class="button_add_form" id="show_tax_form" onClick="return formReset('show')">+ Add TAX</button>
<div id="show_hide">
  <div class="col-xl-12 order-xl-1">
    <div class="card">
      <form id="tax_form" class="hidden_form">
        <div class="card-header">
            <div class="row align-items-center">
              <div class="col-12">
                <h3 class="mb-0">TAXES FORM</h3>
              </div>    
            </div>
        </div>
        <div class="card-body">
          <h6 class="heading-small text-muted mb-4">Tax Information</h6>
          <div class="pl-lg-4">
            <div class="row">
            <input type="hidden" name="uuid" id="uuid" value="" readonly>
            <div class="col-lg-12" id="update_tax_code">
                <div class="form-group">
                  <label class="form-control-label" for="input-tax-percentage">Tax Code</label>
                  <input type="text" id="uuid_1" class="form-control" readonly name="uuid_1">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-control-label" for="input-tax-percentage">PERCENTAGE</label>
                  <input type="Number" id="percentage" class="form-control" placeholder="Percentage" name="percentage" required>
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <div class="col-12 text-right">
            <button type="submit" class="button_add" id="add_tax">+ Add TAX</button>
            <button type="submit" class="button_add" id="update_tax">Update</button>
            <button type="button" class="button_cancel" onClick="return formReset('hide')">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>





<!-- Form for VIEW-->
<div id="view_form">
  <div class="col-xl-12 order-xl-1">
    <div class="card">
      <form id="tax_form" class="hidden_form">
        <div class="card-header">
            <div class="row align-items-center">
              <div class="col-12">
                <h3 class="mb-0">VIEW TAXES FORM</h3>
              </div>    
            </div>
        </div>
        <div class="card-body">
          <h6 class="heading-small text-muted mb-4">Tax Information</h6>
          <div class="pl-lg-4">
            <div class="row">
            <div class="col-lg-12" id="update_tax_code">
                <div class="form-group">
                  <label class="form-control-label" for="input-tax-percentage">Tax Code</label>
                  <input type="text" id="view_taxcode" class="form-control" readonly name="view_taxcode">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-control-label" for="input-tax-percentage">PERCENTAGE</label>
                  <input type="Number" id="view_percentage" class="form-control" readonly name="view_percentage">
                </div>
              </div>
              <div class="col-lg-12">
                <div class="form-group">
                  <label class="form-control-label" for="input-tax-percentage">CREATED BY</label>
                  <input type="text" id="view_creator" class="form-control" readonly name="view_creator"> 
                </div>
              </div>
            </div>
          </div>
          <hr class="my-4">
        </div>
      </form>
    </div>
  </div>
</div>
<!-- BODY -->


<table id="myTables" style="width:100%" class="display nowrap">
  <thead>
    <tr>
      <th>
        Action
      </th>
      <th>
        Tax Code
      </th>
      <th>
        Percentage
      </th>
      <th>
        Created
      </th>
    </tr>
  </thead>
<tbody>
</tbody>
</table>

<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/tax.js"></script>




