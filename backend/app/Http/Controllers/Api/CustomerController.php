<?php

namespace App\Http\Controllers\Api;

use App\Models\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        if($customers -> count()>0){
            return response()->json([
                'status' => 200,
                'customer'=> $customers
            ], 200);
        } else {
            return response()->json([
                'status' => 404,
                'message'=> 'No Records found'
            ], 404);
        }

        
    }

    public function store(Request $request)
    {
        $validator = Validator :: make($request->all(), [
            'firstname' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'phone' => 'required|digits:10'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else{
            $customer = Customer::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'email' => $request->email,
                'phone' => $request->phone,
            ]);

            if($customer){
                return response()->json([
                    'status' => 200,
                    'message' => "Customer Created Successfully"
                ], 200);
            }else{
                return response()->json([
                    'status' => 500,
                    'message' => "Something went wrong"
                ], 500);
            }
        };
    }

    public function show($id)
    {
        $customer = Customer :: find($id);
        if($customer){
            return response()->json([
                'status' => 200,
                'customer' => $customer
            ], 200);

        }else{
            return response()->json([
                'status' => 404,
                'message' => "No Such Customer Found"
            ], 404);
        }
    }

    public function edit($id)
    {
        $customer = Customer :: find($id);
        if($customer){
            return response()->json([
                'status' => 200,
                'customer' => $customer
            ], 200);

        }else{
            return response()->json([
                'status' => 404,
                'message' => "No Such Customer Found"
            ], 404);
        }
    }

    public function update(Request $request, int $id)
    {
        $validator = Validator :: make($request->all(), [
            'firstname' => 'required|string|max:191',
            'lastname' => 'required|string|max:191',
            'email' => 'required|email|max:191',
            'phone' => 'required|digits:10'
        ]);

        if($validator->fails()){
            return response()->json([
                'status' => 422,
                'errors' => $validator->messages()
            ], 422);
        }else{
            $customer = Customer::find($id);

           

            if($customer){

                $customer-> update([
                    'firstname' => $request->firstname,
                    'lastname' => $request->lastname,
                    'email' => $request->email,
                    'phone' => $request->phone,
                ]);

                return response()->json([
                    'status' => 200,
                    'message' => "Customer updated Successfully"
                ], 200);
            }else{
                return response()->json([
                    'status' => 404,
                    'message' => "No Such Customer found"
                ], 404);
            }
        };
    }

    public function destroy($id)
    {  
        $customer = Customer::find($id);

        if($customer){

            $customer -> delete();
            return response()->json([
                'status' => 200,
                'message' => "Customer deleted Successfully"
            ], 200);
        }else{
            return response()->json([
                'status' => 404,
                'message' => "No Such Customer found"
            ], 404);
        }
    }
}
