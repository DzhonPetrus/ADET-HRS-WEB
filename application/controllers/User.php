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
}