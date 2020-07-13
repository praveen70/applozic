import React , { useState }from 'react';
import Indiviualuser from '../userview/userview';
import Spinner from '../spinner/spinner';
import axios from 'axios';


const Usercontent = ({bodyData, loading}) =>{
  const [userInfo, setuserInfo] = useState([]);
    if(loading){
        return <Spinner />
    
    }
    const makeapicall = async (id)  => {
      const res = await axios.get(`https://reqres.in/api/users/${id}`);
      setuserInfo(res.data);
     
    }
return(

   <React.Fragment>
        {
          bodyData && bodyData && bodyData.map((ele,index) => {
           
             
              return(
                
                  <tr key={index}>
                   
                    <td>{ele.id}</td>
                    <td data-column="First Name">
                   
                    <img src={ele.avatar} alt={ele.first_name} />
                    
                    </td>
                    <td>{ele.first_name}</td>
                    <td>{ele.last_name}</td>
                    <Indiviualuser onClick={()=>makeapicall(ele.id)} 
                    userInfo={userInfo}
                    id={ele.id}
                    loading={loading}
                    />
                    
                </tr>
              )
          })  
        }
    </React.Fragment>
    

)
 
}

export default Usercontent;