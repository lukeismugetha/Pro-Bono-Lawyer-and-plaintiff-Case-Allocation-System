<?php

namespace App\Controllers;
use App\Models\UserModel;

class LawyerController extends BaseController
{
    public function lawyer()
    {
        return view('Lawyer/lawyersdash');
    }

}
