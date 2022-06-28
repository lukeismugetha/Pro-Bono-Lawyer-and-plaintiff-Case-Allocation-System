<?php

namespace App\Models;
use CodeIgniter\Model;

class CaseTypes extends Model{
    protected $allowedFields=['ID', 'Type'];
    protected $primaryKey='ID';
    protected $table='CaseTypes';
    // protected $db, $builder;


    // function __construct(){
    //     $db=\Config\Database::connect();
    //     $this->builder=$db->table($this->table);
    // }

    // function getAllUsers(){
    //     return $this->builder->get()->getResultArray();
    // }

}

?>