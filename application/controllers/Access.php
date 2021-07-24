<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Access extends CI_Controller {

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
	public function login()
	{
		$this->session->sess_destroy();
		$this->load->view('template/head');
		$this->load->view('access/login');
		$this->load->view('template/footer');
	}
	public function register()
	{
		$this->session->sess_destroy();
		$this->load->view('template/head');
		$this->load->view('access/register');
		$this->load->view('template/footer');
	}

	public function oAuth() {
		if ($_GET['token'] != null){
			$this->session->set_userdata(
				array(
					'token' => $_GET['token'],
					'email' => $_GET['email'],
					'user_id' => $_GET['user_id'],
					'user_info_id' => $_GET['user_info_id'],
					'user_info' => json_decode($_GET['user_info']),
					'user_type' => $_GET['user_type']
				)
			);

			redirect(base_url('/').$this->session->userdata['user_type']);
		}
	}

	public function updateProfile() {
		$this->session->unset_userdata('user_info');
		if ($_GET['user_info'] != null){
			$this->session->set_userdata('user_info', json_decode($_GET['user_info']));

			redirect(base_url('/').$this->session->userdata['user_type'].'/profile');
		}
	}
}
