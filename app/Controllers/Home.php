<?php

namespace App\Controllers;
use App\Models\UserModel;

class Home extends BaseController
{
    public function index()
    {
        return view('index');
    }
    public function signin()
    {
        return view('signin');
    }

    public function signup(){
        helper(['form']);
        //$validation = \Config\Services::validation();

        if($this->request->getMethod() == 'post'){

            $password = $this->request->getPost('password_1');
            $password_2 = $this->request->getPost('password_2');

        if($password == $password_2){
            $userModel = new UserModel();
             
            $rules = [
                'Email' => 'min_length[7]|max_length[30]|valid_email|is_unique[Users.Email]',
                'password' => 'min_length[4]|max_length[255]|validateUser'.[$password,$password_2].']',
         
            ];
            $errors = [
                'password' => [
                    'validateUser' => 'Email or password dont match'
                ]

            ];
            if(! $this -> validate($rules, )){
                $data['validation'] = $this -> validator;
                return view('signup', $data);
            }else{
                $password = hash('md5', $this->request->getPost('password_1'));
                $data = [
                    'First_Name' => $this->request->getPost('First_Name'),
                    'Last_Name' => $this->request->getPost('Last_Name'),
                    'Email' => $this->request->getPost('Email'),
                    'password' => $password,
                    'role' => $this->request->getPost('role'),
                ];
                $userModel->insertUser($data);
                echo "<script> alert('User Successfully Registered !'); </script>";
                echo view('signin');
            }
       }
        else{
            echo "<script> alert('Passwords do not match'); </script>";
            echo view('signup');
        }

        }

        return view('signup');
    }
}
