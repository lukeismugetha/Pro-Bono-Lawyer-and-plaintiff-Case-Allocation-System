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
        helper(['form']);
        if($this->request->getMethod() == 'post'){
            $rules = [
                'Email' => 'required|min_length[7]|max_length[30]|valid_email',
                'Password' => 'required|min_length[4]|max_length[255]|validateUser[Email,Password]',
            ];
            $errors = [
                'Password' => [
                    'validateUser' => 'Email or password dont match'
                ]
            ];

            $userModel = new UserModel();
            $email = $this->request->getPost('Email');
            $password = $this->request->getPost('Password');
            $user = $userModel->getUserWhere(['Email' => $email, 'Password' => $password,]);
            $role = $userModel->getUser($email);

            if( ! $user){
                echo "<script> alert('Invalid email or password!'); </script>";
            }else{       
                if($role == '2'){
                    echo "<script> alert('Succesful!'); </script>";
                    echo view('Lawyer/lawyersdash');

                }else if($role == '3'){
                    echo "<script> alert('Succesful!'); </script>";
                    echo view('Lawyer/civiliandash');
                }
                // else{
                //     echo "<script> alert('Succesful!'); </script>";
                //     echo view('Lawyer/adminssdash');
                // }   

            }
        }

        return view('signin');
    }


    public function signup(){
        helper(['form']);
        //$validation = \Config\Services::validation();

        if($this->request->getMethod() == 'post'){

            $userModel = new UserModel();
             
            $rules = [
                'Email' => 'min_length[7]|max_length[30]|valid_email|is_unique[Users.Email]',
         
            ];
            if(! $this -> validate($rules, )){
                $data['validation'] = $this -> validator;
                return view('signup', $data);
            }else{
                //$password = hash('md5', $this->request->getPost('password_1'));

                $data = [
                    'First_Name' => $this->request->getPost('First_Name'),
                    'Last_Name' => $this->request->getPost('Last_Name'),
                    'Email' => $this->request->getPost('Email'),
                    'password' => $this->request->getPost('password_1'),
                    'role' => $this->request->getPost('role'),
                ];
                $userModel->insertUser($data);
                echo "<script> alert('User Successfully Registered !'); </script>";
                echo view('signin');
            }
      

        }

        return view('signup');
    }
}
