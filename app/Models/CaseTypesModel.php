<?php

namespace App\Models;
use CodeIgniter\Model;

class CaseTypesModel extends Model{
    protected $allowedFields=['ID', 'Type'];
    protected $primaryKey='ID';
    protected $table='CaseTypes';
    protected $db, $builder;


    function __construct(){
        $db=\Config\Database::connect();
        $this->builder=$db->table($this->table);
    }

    public function getAllCategories(){
        return $this->builder->get()->getResultArray();
    }

    public function getCaseCategoryWhere($condition){
     $result = $this->builder->getCasetypeWhere($condition)->get()->getResultArray();
       if(empty($result)) {
         return false;
         }
         return $result[0];
     }

}

?>