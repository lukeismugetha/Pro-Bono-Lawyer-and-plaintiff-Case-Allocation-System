<?php

namespace App\Database\Seeds;

use CodeIgniter\Database\Seeder;
use App\Models\UserModel;

class UserSeeder extends Seeder
{
	public function run()
	{
		$user_object = new UserModel();

		$user_object->insertBatch([
			[
				"First_Name" => "mokaya",
				"Last_Name" => "rahul_sharma@mail.com",
				"Email" => "mokayasamson",
				"password" => password_hash('mokayasamson', PASSWORD_DEFAULT),
                "role" => 2, //lawyer 3-> plaintiff
			],
		]);
	}
}