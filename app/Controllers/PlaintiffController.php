<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\CaseTypesModel;
use App\Models\CaseCategoriesModel;

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
        
        $caseTypes = new CaseTypesModel();
        $caseCategories = $caseTypes->getAllCategories();
        session()->set('caseCategories', $caseCategories);
        return view('Plaintiff/case');
    }
    public function getCaseCategoriesWhere($catid=0){

   
        $caseCategories = new CaseCategoriesModel();     
        $result = $caseCategories->getcasetypeWhere((['CaseType' => $catid]));
        echo json_encode($result);
        return true;
        
    }

}