import React from 'react'
import { useForm } from 'react-hook-form';
import  axios  from 'axios';
import { useNavigate } from 'react-router-dom';

function Add() {
    const {register, handleSubmit} = useForm();
    const navi = useNavigate();

    function saveData(data){
        axios.post("http://localhost:5000/users", data);
        //alert("Record Added.....")
        navi('/user/show')


    }
  return (
    <>
        <div className='container'>
           <center><h1><u>Car Form:</u></h1></center>
        <form onSubmit={handleSubmit(saveData)} className='mt-5'>
            <label htmlFor='n'><b>No:</b></label>
            <input type="number" id="n" className='form-control'
            {...register('no')}/>
            <br/><br/>
            <label htmlFor='n'><b>NAME:</b></label>
            <input type="text" id="n" className='form-control'
            {...register('name')}/>
            <br/><br/>
            <label htmlFor='C'><b>CITY:</b></label>
            <input type="text" id="c" className='form-control'
            {...register('city')}/>
            <br></br>
            <input type="submit" value="Add" className='btn btn-outline-success col-6 btn-lg'/>
            <input type="reset" value="Cancel" className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
        </div>
    </>
  )
}

export default Add