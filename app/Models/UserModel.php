<?php

namespace App\Models;
use CodeIgniter\Model;
//use Config\Database;

class UserModel extends Model{
    protected $allowedFields=['ID','First_Name','Last_Name', 'Email','password','role',];
    protected $primaryKey='ID';
    protected $table='Users';
    // protected $db,$builder;
    
    // function __construct(){
    //     $db = \Config\Database::connect();
    //     $this->builder = $db->table($this->table);
    // }

    public function getAllUsers(){
        return $this->builder->get()->getResultArray();
    }
    // public function getUserWhere($condition){
    //     return $this->builder->where($condition)->get()->getResultArray()[0];
    //     return $this->builder->where($condition)->get()->getResultArray();
    // }

    
}

?>