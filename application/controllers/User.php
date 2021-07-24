<?php defined('BASEPATH') OR exit('No direct script access allowed');

class User extends CI_Controller {

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
	

	public function home()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/template/body');
		$this->load->view('user/template/footer');
	}
    public function about()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/pages/about');
		$this->load->view('user/template/footer');
	}
    public function rooms()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/pages/rooms');
		$this->load->view('user/template/footer');
	}
    public function contact()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/pages/contact');
		$this->load->view('user/template/footer');
	}
    public function package()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/pages/package');
		$this->load->view('user/template/footer');
	}
	public function Profile()
	{
		$this->load->view('template/head');
		$this->load->view('template/admin/nav');
		$this->load->view('user/pages/profile');
		$this->load->view('template/footer');
	}
	public function editProfile()
	{
		$this->load->view('template/head');
		$this->load->view('user/rooms/editprofile');
		$this->load->view('template/footer');
	}
	public function singleRoom()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/rooms/singleroom');
		$this->load->view('user/template/footer');
	}
	public function standardRoom()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/rooms/standardroom');
		$this->load->view('user/template/footer');
	}
	public function deluxeRoom()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/rooms/deluxeroom');
		$this->load->view('user/template/footer');
	}
	public function suiteRoom()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/rooms/suiteroom');
		$this->load->view('user/template/footer');
	}
	public function famBond()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/packages/fambond');
		$this->load->view('user/template/footer');
	}
	public function takes2toTango()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/packages/takes2totango');
		$this->load->view('user/template/footer');
	}
	public function squadBond()
	{
		$this->load->view('user/template/header');
		$this->load->view('user/packages/squadbond');
		$this->load->view('user/template/footer');
	}
	
}