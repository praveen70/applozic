import React from "react";
import './search.scss';

class Searchuser extends React.Component{
    state = {
        uservalue:'',
      };


    handleChange = (e) => {
        const { value } = e.target;
        this.setState({ uservalue: value})
        this.props.onChange(value)
      
    }
    render(){
        return (
            <form>
              <input type="text" className="textbox" placeholder="Search" onChange={(event) => this.handleChange(event)}
              value={this.state.uservalue}
              />
              <input title="Search" value=""  className="button" />
            </form>
          );
    }
}


export default Searchuser;
