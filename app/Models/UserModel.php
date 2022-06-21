<?php

namespace App\Models;
use CodeIgniter\Model;
//use Config\Database;

class UserModel extends Model{
    protected $allowedFields=['ID','First_Name','Last_Name', 'Email','password','role',];
    protected $primaryKey='ID';
    protected $table='Users';
    protected $beforeInsert = ['beforeInsert'];
    protected $beforeUpdate = ['beforeUpdate'];

    protected function beforeInsert(array $data){
        $data = $this->passwordHash($data);
    
        return $data;
      }
    
      protected function beforeUpdate(array $data){
        $data = $this->passwordHash($data);
    
        return $data;
      }
    
      protected function passwordHash(array $data){
        if(isset($data['data']['password']))
          $data['data']['password'] = password_hash($data['data']['password'], PASSWORD_DEFAULT);
    
        return $data;
      }
    // protected $db,$builder;
    
    // function __construct(){
    //     $db = \Config\Database::connect();
    //     $this->builder = $db->table($this->table);
    // }

    // public function getAllUsers(){
    //     return $this->builder->get()->getResultArray();
    // }
    // public function getUserWhere($condition){
    //     return $this->builder->where($condition)->get()->getResultArray()[0];
    //     return $this->builder->where($condition)->get()->getResultArray();
    // }

    
}

?>