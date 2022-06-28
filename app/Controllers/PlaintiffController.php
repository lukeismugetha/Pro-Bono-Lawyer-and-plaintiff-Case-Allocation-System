<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CaseTypes;
use App\Models\CaseCategories;

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

    public function Case()
    {
        $caseCategories = new CaseCategories();
        $caseCat = $caseCategories->findAll();
        session()->set('casecatgories', $caseCat);

        $caseTypes = new CaseTypes();
        $caseT['data'] = $caseTypes->findAll();
        //session()->set('casecatgories', $casecats);

        return view('Plaintiff/case', $caseT);
    }
    public function getCaseCat($catid=0){

        $caseCategories = new CaseCategories();
        $caseCat = $caseCategories->getCats($catid);
        dd($caseCat);
    }

}