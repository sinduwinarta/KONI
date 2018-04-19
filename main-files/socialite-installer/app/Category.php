<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'discription', 'parent_id', 'active',
    ];

    public function categories()
    {
        return $this->belongsTo('App\Page');
    }
}
