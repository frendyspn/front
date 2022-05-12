<template>
    <header class="main-nav">
        <div class="sidebar-user text-center">
            
                <a href="user-profile.html">
                    <h6 class="mt-3 f-14 f-w-600">Emay Walter</h6>
                </a>
                
            </div>
            <nav>
                <div class="main-navbar">
                    <div class="left-arrow" id="left-arrow">
                        <i data-feather="arrow-left"></i>
                    </div>
                    <div id="mainnav">
                        <ul class="nav-menu custom-scrollbar">
                            <li class="back-btn">
                                <div class="mobile-back text-end">
                                    <span>Back</span>
                                    <i class="fa fa-angle-right ps-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li class="sidebar-main-title">
                                <div>
                                    <h6>General
                                    </h6>
                                </div>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link menu-title" href="#" :to="{name: 'user'}">
                                    <i data-feather="home"></i>
                                    <span>Dashboard</span>
                                </a>
                            </li>
                            <li data-target="#sidenav-collapse-main" data-toggle="collapse">
                                <nuxt-link class="nav-link" :to="{name: 'categories'}">
                                    <i class="fas fa-fw fa-tag"></i>
                                    <span>Categories</span>
                                </nuxt-link>
                            </li>
                            <li class="dropdown">
                                <nuxt-link class="nav-link" :to="{name: 'users'}">
                                    <i class="fas fa-user"></i>
                                    <span>User</span>
                                </nuxt-link>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link menu-title" href="#" :to="{name: 'categories'}">
                                    <i data-feather="home"></i>
                                    <span>Categories</span>
                                </a>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link menu-title" href="javascript:void(0)">
                                    <i data-feather="airplay"></i>
                                    <span>Widgets</span>
                                </a>
                                <ul class="nav-submenu menu-content">
                                    <li>
                                        <a href="general-widget.html">General</a>
                                    </li>
                                    <li>
                                        <a href="chart-widget.html">Chart</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown">
                                <a class="nav-link menu-title" href="javascript:void(0)">
                                    <i data-feather="layout"></i>
                                    <span>Page layout</span>
                                </a>
                                <ul class="nav-submenu menu-content">
                                    <li>
                                        <a href="box-layout.html">Boxed</a>
                                    </li>
                                    <li>
                                        <a href="layout-rtl.html">RTL</a>
                                    </li>
                                    <li>
                                        <a href="layout-dark.html">Dark</a>
                                    </li>
                                    <li>
                                        <a href="footer-light.html">Footer Light</a>
                                    </li>
                                    <li>
                                        <a href="footer-dark.html">Footer Dark</a>
                                    </li>
                                    <li>
                                        <a href="footer-fixed.html">Footer Fixed</a>
                                    </li>
                                </ul>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="right-arrow" id="right-arrow">
                        <i data-feather="arrow-right"></i>
                    </div>
                </div>
            </nav>
        </header>
    </template>

    <script>
        export default {}
    </script>