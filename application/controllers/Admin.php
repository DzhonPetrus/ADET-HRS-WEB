<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Admin extends CI_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */

	 function __construct() {
		 parent::__construct();
		 ($this->session->userdata['token']) ? (strtolower($this->session->userdata['user_type']) != 'admin' ? redirect(base_url().$this->session->userdata['user_type']) : null) : redirect('Access/login');
	 }

	public function index()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/dash');
		$this->load->view('template/footer');
	}

	public function profile()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('template/body-profile');
		$this->load->view('template/footer');
	}

	public function amenity()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/amenity');
		$this->load->view('template/footer');
	}

	public function tax()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/taxes');
		$this->load->view('template/footer');
	}

	public function loyalty_point()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/loyalty_points');
		$this->load->view('template/footer');
	}

	public function user_information()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/user_info');
		$this->load->view('template/footer');
	}

	public function pricing()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/pricing');
		$this->load->view('template/footer');
	}

	public function room_type()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/room_types');
		$this->load->view('template/footer');
	}

	public function rate()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/rates');
		$this->load->view('template/footer');
	}

	public function package()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/package');
		$this->load->view('template/footer');
	}

	public function pd_condition()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/pdconditions');
		$this->load->view('template/footer');
	}

	public function room()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/room');
		$this->load->view('template/footer');
	}

	public function booking()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/booking');
		$this->load->view('template/footer');
	}
	public function loyalty_point_history()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/loyalty_point_history');
		$this->load->view('template/footer');
	}
	public function promo_and_discount()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/promo_discount');
		$this->load->view('template/footer');
	}

	public function room_reserved()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/rooms_reserved');
		$this->load->view('template/footer');
	}

	public function housekeeping()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/housekeeping');
		$this->load->view('template/footer');
	}

	public function user()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/user');
		$this->load->view('template/footer');
	}
	public function dashboard()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/dashboard');
		$this->load->view('template/footer');
	}
  
	public function payment()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/payments');
		$this->load->view('template/footer');
	}

	public function dash()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('pages/dash');
		$this->load->view('template/footer');
	}
}
