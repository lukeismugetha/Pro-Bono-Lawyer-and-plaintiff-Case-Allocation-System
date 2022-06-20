<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;

class Home extends BaseController
{
    public function index()
    {
        return view('index');
    }
    // public function signin()
    // {
    //     helper(['form']);
    //     if($this->request->getMethod() == 'post'){
    //         $rules = [
    //             'Email' => 'required|min_length[7]|max_length[30]|valid_email',
    //             'Password' => 'required|min_length[4]|max_length[255]|validateUser[Email,Password]',
    //         ];
    //         $errors = [
    //             'Password' => [
    //                 'validateUser' => 'Email or password dont match'
    //             ]
    //         ];

    //         $userModel = new UserModel();
    //         $email = $this->request->getPost('Email');
    //         $password = $this->request->getPost('Password');
    //         $user['data'] = $userModel->getUserWhere(['Email' => $email, 'Password' => $password,]);
    //         $data = $user;
         

    //         if( ! $user){
    //             echo "<script> alert('Invalid email or password!'); </script>";
    //         }else{    
    //             //print_r($role);   
    //             // if($data[6] == '2'){
    //             //     echo "<script> alert('Succesful!'); </script>";
    //             //     echo view('Lawyer/lawyersdash');

    //             // }else if($data[6] == '3'){
    //                  echo "<script> alert('Succesful!'); </script>";
    //                  echo view('Lawyer/lawyersdash');
    //             // }
    //             // else{
    //             //     echo "<script> alert('Succesful!'); </script>";
    //             //     echo view('Lawyer/adminssdash');
    //             // }   

    //         }
    //     }

    //     return view('signin');
    // }


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
                $password = hash('md5', $this->request->getPost('password_1'));

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
    public function signin()
    {
        $data = [];

        if ($this->request->getMethod() == 'post') {

            $rules = [
                'Email' => 'required|min_length[6]|max_length[50]|valid_email',
                'password' => 'required|min_length[8]|max_length[255]|validateUser[Email,password]',
            ];

            $errors = [
                'password' => [
                    'validateUser' => "Email or Password didn't match",
                ],
            ];

            if (!$this->validate($rules, $errors)) {

                return view('signin', [
                    "validation" => $this->validator,
                ]);

            } else {
                $model = new UserModel();

                $user = $model->where('Email', $this->request->getVar('Email'))
                    ->first();

                // Stroing session values
                $this->setUserSession($user);

                // Redirecting to dashboard after login
                if($user['role'] == 1){
                    return redirect()->to(base_url('admin'));
                }elseif($user['role'] == 2){
                    return redirect()->to(base_url('lawyer'));
                }elseif ($user['role'] == 3) {
                    return redirect()->to(base_url('plaintiff'));
                }
            }
        }
        return view('signin');
    }

    private function setUserSession($user)
    {
        $data = [
            'ID' => $user['ID'],
            'First_Name' => $user['First_Name'],
            'Last_Name' => $user['Last_Name'],
            'Email' => $user['Email'],
            'isLoggedIn' => true,
            "role" => $user['role'],
        ];

        session()->set($data);
        return true;
    }

    public function logout()
    {
        session()->destroy();
        return redirect()->to('signin');
    }
}
