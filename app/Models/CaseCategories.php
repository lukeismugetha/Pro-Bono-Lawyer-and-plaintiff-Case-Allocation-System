<?php

namespace App\Models;
use CodeIgniter\Model;

class CaseCategories extends Model{
    protected $allowedFields=['ID', 'Case_Category','CaseType'];
    protected $primaryKey='ID';
    protected $table='CaseCategories';
    protected $db;

}

?>