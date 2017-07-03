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
        $term = $request->input('term');
        $this->validate($request, array(
            'term' => 'max:255',
        ));
        $bookings = Booking::where('description', 'like', '%'.$request->term.'%')->paginate(10);
        return $bookings;
    }
}
