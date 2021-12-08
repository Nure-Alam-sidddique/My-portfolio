/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';


const ProductDetails = () => {
    const { projectId } = useParams();
    const navigate = useNavigate();
    const [singleProject, setSingleProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const getData= async()=>{
        setLoading(true);
         const response=await fetch('http://localhost:3000/projects.json');
          const data= await response.json();
          console.log(data);
        if(data.length>0){
            const singleData = data.filter(single=>single._id === projectId);
            setSingleProject(singleData[0]);
            setLoading(false);
        }
    }

    useEffect(()=>{
       getData();
    },[])
    console.log( "comes form Single Product", singleProject);
    if(loading){
        return <p className="text-2xl text-white  text-center">Loading...............</p>
    }
    return (
        <div className='h-auto bg-gray-800'>
            <h1 className="pt-20 text-white text-2xl text-center">{singleProject.projectName}</h1>
            <div className="w-5/6 mx-auto pb-10">
            <div className="grid h-auto w-auto grid-cols-1 md:grid-cols-1 mt-10 border">
                <div className="grid grid-cols-1 mx-auto md:grid-cols-3 gap-4 pt-3 pb-5 px-5"> 
                 {Array.isArray(singleProject.photo) && singleProject.photo.map(ph=> <img  className="h-48 w-full " src={ph} alt= {ph}/>)}
                </div>
                <div>
              <div> 
                <p className="text-white py-5 px-10 text-justify">
                   Lorem ipsum dolor sit amet consectetur, adipisicing elit. In illo, quibusdam itaque autem quis qui beatae necessitatibus id voluptate eum tempore, commodi delectus neque illum atque consequuntur porro exercitationem nesciunt molestiae est libero ea? Cupiditate itaque fugit numquam quae dignissimos enim error excepturi qui, minima dolorem aliquam minus soluta incidunt eius, unde quis repellat, vitae eos sint reprehenderit recusandae! Cumque, voluptatum consequuntur nemo dolorem dolores vel atque perferendis quis et libero! Perferendis ratione iure exercitationem. Repellat impedit blanditiis illum velit delectus quia! 
                </p>
                </div>
                </div>
                <button onClick={() => navigate(-1)} type= "button" className="p-5 text-2xl text-white border hover:bg-yellow-500 transition duration-500">Back Home</button>
            </div>
            </div>
        </div>
    );
};

export default ProductDetails;