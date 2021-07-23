<?php
$tablePages = array(
  array('text'=>'Bookings', 'url'=> 'booking', 'icon'=>' fa fa-address-book'),
  array('text'=>'Loyalty Points', 'url'=> 'loyalty_point', 'icon'=>'fa fa-coins'),
  array('text'=>'Loyalty Point Histories', 'url'=> 'loyalty_point_history', 'icon'=>' fas fa-poll'),
  array('text'=>'Payment', 'url'=> 'payment', 'icon'=>' fa fa-credit-card'),
  array('text'=>'Rooms Reserved', 'url'=> 'room_reserved', 'icon'=>'fas fa-clipboard-list'),
  array('text'=>'User Informations', 'url'=> 'user_information', 'icon'=>' fa fa-address-card')
  );

$customerPages = array(
  array('text'=>'Dashboard', 'url'=> '', 'icon'=>' ni ni-tv-2'),
  );

  $currentPage = basename($_SERVER['REQUEST_URI']) ;


?>
<!-- SIDE NAV -->
<nav class="sidenav navbar navbar-vertical  fixed-left  navbar-expand-xs navbar-light bg-white" id="sidenav-main">
  <div class="scrollbar-inner">
    <!-- Brand -->
    <div class="sidenav-header  align-items-center">
      <a class="navbar-brand" href="javascript:void(0)">
        <h1 class="display-3">
          <i class="ni ni-building text-primary"></i>
          HRS
        </h1>
      </a>
    </div>
    <div class="navbar-inner">
      <!-- Collapse -->
      <div class="collapse navbar-collapse" id="sidenav-collapse-main">
        <!-- Nav items -->
        <ul class="navbar-nav">

        <?php
          foreach($customerPages as $item){
            $isActive = $currentPage == ($item['url'] != '' ? $item['url'] : 'customer');
            $html = '<li class="nav-item">'
                .  '<a class="nav-link '. (($isActive) ? 'active' : ' ') .'" href="' . base_url($this->session->userdata['user_type'].'/'.$item['url']) . '">'
                . '<i class="'. $item['icon'] . (($isActive) ? ' text-primary' : ' text-default') .'"></i>'
                . '<span class="nav-link-text '.(($isActive) ? ' text-primary' : ' text-default').'">' . $item['text'] . '</span>'
                . '</a>'
                . '</li>';
            echo $html;
          }
        ?>
          
        </ul>
        <!-- Divider -->
        <hr class="my-3">
        <!-- Heading -->
        <h6 class="navbar-heading p-0 text-muted">
          <span class="docs-normal">TABLES</span>
        </h6>
      </div>
      <ul class="navbar-nav">

        <?php
          foreach($tablePages as $item){
            $isActive = $currentPage == $item['url'];
            $html = '<li class="nav-item">'
                .  '<a class="nav-link '. (($isActive) ? 'active' : ' ') .'" href="' . base_url($this->session->userdata['user_type'].'/'.$item['url']) . '">'
                . '<i class="'. $item['icon'] . (($isActive) ? ' text-primary' : ' text-default') .'"></i>'
                . '<span class="nav-link-text '.(($isActive) ? ' text-primary' : ' text-default').'">' . $item['text'] . '</span>'
                . '</a>'
                . '</li>';
            echo $html;
          }
        ?>

      </ul>
    </div>
  </div>
</nav>



<!--  TOP NAV -->
<div class="main-content" id="panel">


  <nav class="navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Search form
        <form class="navbar-search navbar-search-light form-inline mr-sm-3" id="navbar-search-main">
          <div class="form-group mb-0">
            <div class="input-group input-group-alternative input-group-merge">
              <div class="input-group-prepend">
                <span class="input-group-text"><i class="fas fa-search"></i></span>
              </div>
              <input class="form-control" placeholder="Search" type="text">
            </div>
          </div>
          <button type="button" class="close" data-action="search-close" data-target="#navbar-search-main" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </form> -->
        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center  ml-md-auto ">
        </ul>
        <ul class="navbar-nav align-items-center  ml-auto ml-md-0 ">
          <li class="nav-item dropdown">
            <a class="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media align-items-center">
                <span class="avatar avatar-sm rounded-circle">
                  <img alt="Image placeholder" src="<?= base_url('assets') ?>/img/theme/team-4.jpg">
                </span>
                <div class="media-body  ml-2  d-none d-lg-block">
                  <span class="mb-0 text-sm  font-weight-bold"><?= $this->session->userdata['email'] ?></span>
                </div>
              </div>
            </a>
            <div class="dropdown-menu  dropdown-menu-right ">
              <div class="dropdown-header noti-title">
                <h6 class="text-overflow m-0">Welcome!</h6>
              </div>
              <a href="#!" class="dropdown-item">
                <i class="ni ni-single-02"></i>
                <span>My profile</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="<?= base_url('Access/Login') ?>" class="dropdown-item">
                <i class="ni ni-user-run"></i>
                <span>Logout</span>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>