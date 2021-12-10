/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [singleProject, setSingleProject] = useState([]);
    const getData= async()=>{
        try{
            const response=await fetch('/projects.json');
            const data= await response.json();
            console.log(data);
          if(data.length>0){
              const singleData = data.filter(single=>single._id === projectId);
              setSingleProject(singleData[0]);
          }
        }
        catch(error){
            console.log(error.message);
        }
        
    }

    useEffect(()=>{
       getData();
    },[])
    console.log( "comes form Single Product", singleProject);
    return (
        <div className='h-auto  bg-gray-800'>
            <h1 className="pt-20 text-white text-2xl text-center">{singleProject.projectName}</h1>
            <div className="w-5/6 mx-auto pb-10">
            <div className="grid h-auto w-auto grid-cols-1 md:grid-cols-1 mt-10 border">
                <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 pt-3 pb-5 px-5"> 
                 {Array.isArray(singleProject.photo) && singleProject.photo.map(ph=> <img  className="h-48 w-full " src={ph} alt= {ph}/>)}
                </div>
                <div>
             
                  <div className='grid grid-cols-1 md:grid-cols-2'>
                      <div>
                           <ul className="text-white py-5 px-10 text-justify">
                   {Array.isArray(singleProject.description) && singleProject.description.map(des=> <li>{des}</li>)}
                           </ul>
                      </div>
                      <div>
                          <a className='text-decoration-none text-white hover:text-yellow-400 pt-7 px-10 text-center block text-xl' href={singleProject.live} target="_blank" rel='noreferrer'> Live Side</a>
                          <a className='text-decoration-none text-white hover:text-yellow-400 pt-1 px-10 text-center block text-xl' href={singleProject.clientSite} target="_blank"rel='noreferrer'> Client Side</a>
                          <a className='text-decoration-none text-white hover:text-yellow-400 pt-1 px-10 text-center block text-xl' href={singleProject.serverSide} target="_blank"rel='noreferrer'> Server Side</a>
                      </div>
                  </div>
                <p className="text-white py-5 px-10 text-justify"><span className="text-yellow-400 text-xl">Technology</span> : {singleProject.technology}</p>
                </div>
                <button onClick={() => navigate(-1)} type= "button" className="p-5 text-2xl text-white border hover:bg-yellow-500 transition duration-500">Back Home</button>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;