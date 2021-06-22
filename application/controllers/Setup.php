<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Setup extends CI_Controller {

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
		 ($this->session->userdata['token']) ? null : redirect('Access/login');
	 }

	public function index()
	{
		$this->load->view('template/head');
		$this->load->view('template/nav');
		$this->load->view('template/body-table');
		$this->load->view('template/footer');
	}

	public function profile()
	{
		$this->load->view('template/head');
		$this->load->view('template/nav');
		$this->load->view('template/body-profile');
		$this->load->view('template/footer');
	}

	public function amenity()
	{
		$this->load->view('template/head');
		$this->load->view('template/nav');
		$this->load->view('pages/amenity');
		$this->load->view('template/footer');
	}

	public function tax()
	{
		$this->load->view('template/head');
		$this->load->view('template/nav');
		$this->load->view('pages/taxes');
		$this->load->view('template/footer');
	}

	public function loyalty_point()
	{
		$this->load->view('template/head');
		$this->load->view('template/nav');
		$this->load->view('pages/loyaltypoints');
		$this->load->view('template/footer');
	}
}
