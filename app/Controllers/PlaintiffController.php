<?php

namespace App\Controllers;
use App\Models\UserModel;

class PlaintiffController extends BaseController
{
    public function Plaintiff()
    {
        return view('Plaintiff/civiliandash');
    }

}