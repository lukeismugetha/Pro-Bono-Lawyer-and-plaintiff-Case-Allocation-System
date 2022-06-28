<?php
namespace App\Validation;

use App\Models\UserModel;

class Userrules
{
    public function validateUser(string $str, string $fields, array $data)
    {

        $model = new UserModel();
        $user = $model->getUserWhere(['Email' => $data['Email']]);
        if(! $user)
        {
          return false;
        }else{
          if($data['password'] == $user['password']){
            return true;
          }
        }
        return false;
    }
}