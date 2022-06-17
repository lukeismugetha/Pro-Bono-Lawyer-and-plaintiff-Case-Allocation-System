<?php

namespace App\Controllers;
use App\Models\UserModel;

class Home extends BaseController
{
    public function index()
    {
        return view('index');
    }
    public function login()
    {
        return view('login');
    }

    public function signup(){
        helper(['form']);

        $firstName = $this->request->getPost('First_Name');
        $lastName = $this->request->getPost('Last_Name');
        $email = $this->request->getPost('Email');
        $password = $this->request->getPost('password_1');
        $password_2 = $this->request->getPost('password_2');
        $role = $this->request->getPost('role');

        if($password == $password_2){
            $user = new UserModel();
             
            $rules = [
                'Email' => 'is_unique[Users.Email]',
            ];
            if(! $this -> validate($rules)){

            }else{
                echo "<script> alert('Email do not match'); </script>";
            return view('signup');
            }
            $data = [
                'First_Name' => $firstName,
                'Last_Name' => $lastName,
                'Email' => $email,
                'password' => $password,
                'role' => $role,
            ];
          
            $user->insertUser($data);
        

         
       }
        else{
            echo "<script> alert('Passwords do not match'); </script>";
            echo view('signup');
        }
 

        return view('signup');
    }
}
