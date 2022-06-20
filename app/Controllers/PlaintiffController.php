<?php

namespace App\Controllers;

use App\Controllers\BaseController;

class PlaintiffController extends BaseController
{
    public function __construct(){
        if (session()->get('role') != 3) {
            echo 'Access denied';
            exit;
        }
    }
    public function Plaintiff()
    {
        return view('Plaintiff/civiliandash');
    }
}