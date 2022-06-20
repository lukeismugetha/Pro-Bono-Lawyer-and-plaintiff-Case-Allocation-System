<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class AdminController extends BaseController
{
    public function __construct(){
        if (session()->get('role') != 1) {
            echo 'Access denied';
            exit;
        }
    }
    public function admin()
    {
        return view('Admin/admin');
    }

}
