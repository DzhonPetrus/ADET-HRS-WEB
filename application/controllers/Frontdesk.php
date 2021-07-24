<?php defined('BASEPATH') OR exit('No direct script access allowed');

class Frontdesk extends CI_Controller {

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
		 ($this->session->userdata['token']) ? (strtolower($this->session->userdata['user_type']) != 'frontdesk' ? redirect(base_url().$this->session->userdata['user_type']) : null) : redirect('Access/login');
	 }

	public function index()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('template/body-table');
		$this->load->view('template/footer');
	}

	public function profile()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('template/body-profile');
		$this->load->view('template/footer');
	}

	public function amenity()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/amenity');
		$this->load->view('template/footer');
	}

	public function tax()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/taxes');
		$this->load->view('template/footer');
	}

	public function loyalty_point()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/loyalty_points');
		$this->load->view('template/footer');
	}

	public function user_information()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/user_info');
		$this->load->view('template/footer');
	}

	public function pricing()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/pricing');
		$this->load->view('template/footer');
	}

	public function room_type()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/room_types');
		$this->load->view('template/footer');
	}

	public function rate()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/rates');
		$this->load->view('template/footer');
	}

	public function package()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/package');
		$this->load->view('template/footer');
	}

	public function pd_condition()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/pdconditions');
		$this->load->view('template/footer');
	}

	public function room()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/room');
		$this->load->view('template/footer');
	}

	public function booking()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/booking');
		$this->load->view('template/footer');
	}
	public function loyalty_point_history()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/loyalty_point_history');
		$this->load->view('template/footer');
	}
	public function promo_and_discount()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/promo_discount');
		$this->load->view('template/footer');
	}

	public function room_reserved()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/rooms_reserved');
		$this->load->view('template/footer');
	}

	public function housekeeping()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/housekeeping');
		$this->load->view('template/footer');
	}
	public function dashboard()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('template/frontdesk/dashboard');
		$this->load->view('template/footer');
	}

	public function payment()
	{
		$this->load->view('template/head');
		$this->load->view('template/frontdesk/nav');
		$this->load->view('pages/fd/payments');
		$this->load->view('template/footer');
	}
}
