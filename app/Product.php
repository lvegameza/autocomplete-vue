<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        'category_id','name','descripcion','content','image','price','metric','brand','color','datasheet','stock','sotck_min','state',       
    ];
}
