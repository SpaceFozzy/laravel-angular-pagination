<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Booking;

class BookingController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $bookings = Booking::orderBy('id','asc')->paginate(10);
        return $bookings;
    }

    public function search(Request $request)
    {
        $text = $request->input('text');
        $this->validate($request, array(
            'text' => 'max:255',
        ));
        $bookings = Booking::where('description', 'like', '%'.$request->text.'%')->get();
        return $bookings;
    }
}
