<?php

use Illuminate\Database\Seeder;
use App\User;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = User::create([
        	'name' => 'Robwert',
        	'surname' => 'Mota',
        	'email' => 'robwert1997@gmail.com',
        	'password' => 'secret',
        	'role' => 'Administrator',
        	'avatar'  => 'avatar.png',
        	'remember_token' => str_random(10)
        ]);

        factory(User::class)->times(10)->create();
    }
}
