<?php

namespace App\Models;
use CodeIgniter\Model;
use Config\Database;

class UserModel extends Model{
    protected $allowedFields=['ID','First_Name','Last_Name', 'Email','password','role',];
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
}

?>