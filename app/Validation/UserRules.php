<?php
namespace App\Validation;
use App\Models\UserModel;

class UserRules{
    public function validateUser(string $str,string $fields, array $data){
        $model = new UserModel();
        $user = $model->where('Email',$data['Email'])
                      ->first();
        if(! $user)
            return false;
        return password_verify($data['Password'], $user['Password']);

    }

}