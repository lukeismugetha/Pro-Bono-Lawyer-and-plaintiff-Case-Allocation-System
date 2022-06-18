<?php

namespace App\Models;
use CodeIgniter\Model;
use Config\Database;

class UserModel extends Model{
    protected $allowedFields=['ID','First_Name','Last_Name', 'Email','Password','role','Created_at',];
    protected $primaryKey='ID';
    protected $table='Users';
    protected $db,$builder;

    public function __construct(){
        $db=Database::connect();
        $this->builder=$db->table('Users');
    }

    public function getAllUsers(){
        return $this->builder->get()->getResultArray();
    }

    public function insertUser($data){
        $this->builder->insert($data);
    }

    public function getUserWhere($condition){
        return $this->builder->where($condition)->get()->getResultArray();
    }
    public function getUser($email){
        return $this->builder->where('Email',$email)->select('role');
    }
}

?>