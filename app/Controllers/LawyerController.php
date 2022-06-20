<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class LawyerController extends BaseController
{
    public function __construct(){
        if (session()->get('role') != 2) {
            echo 'Access denied';
            exit;
        }
    }
    public function lawyer()
    {
        return view('Lawyer/lawyersdash');
    }

}
