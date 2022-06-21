<?php
namespace App\Validation;

use App\Models\UserModel;

class Userrules
{
    public function validateUser(string $str, string $fields, array $data)
    {
        // dd($str, $fields, $data['Email']);
        $model = new UserModel();
        $user = $model->where('Email', $data['Email'])
                ->first();

        if(!$user)
          return false;

        return password_verify($data['password'], $user['password']);
    }
}