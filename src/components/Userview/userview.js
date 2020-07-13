import React from "react";
import Userdeteils from './userdeteils';
import './userview.scss';
class Indiviualuser extends React.Component{

  click=()=>{
    this.props.onClick()
  }
  
  render(){
   
    return (
      <React.Fragment>
      <div id="wrapper" style={{marginTop: '70px', }}>
        <p><a className="button" href="#popup2" onClick={this.click}>View</a></p>
      </div>
      <div id="popup2" className="overlay light">
        <a className="cancel" href="#"></a>
        <div className="popup">
          <a className="close" href="#">&times;</a>
          <div className="content" style={{overflow: 'hidden'}}>
            <Userdeteils userInfo={this.props.userInfo} loading={this.props.loading} />
          </div>
        </div>
      </div>
      </React.Fragment>
    );

  }
}



export default Indiviualuser
