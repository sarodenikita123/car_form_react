import React, {useEffect} from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';

function Update() {
    const {register, handleSubmit, setValue} = useForm();
    const {userId} = useParams();
    const navi = useNavigate();

    async function fetchData(){
        const result = await axios.get(`http://localhost:5000/users/${userId}`)
        setValue('no', result.data.no);
        setValue('name', result.data.name);
        setValue('city', result.data.city);
    }

    function saveData(data){
        axios.put(`http://localhost:5000/users/${userId}`, data);
        navi('/user/show');

    }

    useEffect(()=>{
         fetchData();
    },[])


  return (
    <>
    <div className='container'>
        <center><h1><u>UPDATE FORM:</u></h1></center>
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
            <input type="submit" value="UPDATE" className='btn btn-outline-success col-6 btn-lg'/>
            <input type="reset" value="Cancel" className='btn btn-outline-warning col-6 btn-lg'/>
        </form>
    </div>
    </>
  )
}

export default Update