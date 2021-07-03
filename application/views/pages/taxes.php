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

<!-- MODAL POP-UP for VIEW-->
<div class="bg-modal">
  <div class="modal-content">
    <form id="tax_form_modal">
      <div class="card-header">
        <div class="row align-items-center">
          <div class="col-12">
            <h3 class="mb-0">TAXES INFORMATION</h3>
          </div>      
        </div>
      </div>
      <div class="card-body">
        <div class="pl-lg-4">
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label class="form-control-label" for="input-tax-percentage">TAX CODE</label>
                <input type="text" id="taxCode" class="form-control" readonly name="taxCode">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label class="form-control-label" for="input-tax-percentage">PERCENTAGE</label>
                <input type="text" id="modal_percentage" class="form-control" readonly name="modal.percentage">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-12">
              <div class="form-group">
                <label class="form-control-label" for="input-tax-percentage">CREATED BY</label>
                <input type="text" id="created_email" class="form-control" readonly name="created.email">
              </div>
            </div>
          </div>
          <div class="col-12 text-right">
            <a href="" class="button" id="close_modal">Close</a>
          </div>
        </div>
      </div>
    </form>   
  </div>
</div>


<!-- Import JS-->
<script src="<?= base_url('assets') ?>/js/pages/tax.js"></script>




