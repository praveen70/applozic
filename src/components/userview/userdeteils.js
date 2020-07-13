import React from "react";
import "./userdeteils.scss";
import Spinner from '../spinner/spinner';

const Userdeteils = ({ userInfo, loading }) => {
  let { data } = userInfo;
  if(loading){
    return <Spinner />

}
  
  return (
    <div className="row">
      <div className="column">
        <div className="card">
        <img src={data && data.avatar} alt="Avatar" style={{width:"50%"}} />
        <p className="fistname" style={{fontWeight: 600, paddingTop:'13px'}}>{data && data.first_name} {data && data.last_name}</p>
        <p style={{fontWeight: 600,}}>Email : {data && data.email}</p>
        </div>
      </div>

  
    </div>
    
  );
};

export default Userdeteils;
