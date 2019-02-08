<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Product extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return 
        [
            'id'         => $this->id,
            'category_id' => (int) $this->category_id,
            'name'       => $this->name,
            'description'    => $this->description,
            'price'     => (int) $this->price,
            'stock' => (int) $this->stock,
            'offer' => (int) $this->offer,
            'date' => $this->date,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
