import React, { useState, useEffect } from 'react';
import Pagination from '../pagination/pagination'
import "./list-user.scss";
import Usercontent from './list-user-body';
import axios from 'axios';
import Searchuser from '../search/search';



const Listuser = () => {
    const [posts, setPosts] = useState([]);
    const [values, setValue] = useState('');
    const [loading, setLoading] = useState(false);
    const [currentPage,  setCurrentPage] = useState(1);
    const [postsPerPage] = useState(4);
    const [pageNumber , setPageNumber] = useState(1);
  
  
   

    useEffect(() => {
      const fetchPosts = async () => {
        setLoading(true);
        const res = await axios.get(`https://reqres.in/api/users?page=${pageNumber}`);
        setPosts(res.data);
        setLoading(false);
      };
  
      fetchPosts();
    }, []);
    
    let data  = posts &&  posts.data ? posts.data : [];
    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);
  
    // // Change page
  
    const paginate = async (pageNumber) =>{ 
       setCurrentPage(pageNumber);
        setPageNumber(pageNumber)
      //  fetchPosts();
      };

    const handleSearch = (value) => {
      setValue(value)
    
    }
  
    let searchUser = currentPosts.filter((names) => {
     
      return names.first_name.toLowerCase().indexOf(values.toLowerCase()) !== -1;
    });
    return (
      <React.Fragment>
      <div className='container mt-5'>
       
      <div style={{float: 'right', paddingBottom: '10px', paddingRight: '70px'}}>
      <Searchuser data={searchUser} onChange={handleSearch} />
      </div>
        <table className="ui celled collapsing very basic table">
          <thead className="">
            <tr className="">
            <th className="">Id</th>
              <th className="">Image</th>
              <th className="">Firstname</th>
              <th className="">Lastname</th>
              <th className="">Action</th>
            </tr>
          </thead>
          <tbody className="body">
              <Usercontent bodyData={searchUser} loading={loading} />
            </tbody>
        </table>
     <div style={{paddingLeft: '50px'}}>
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
        />
      

     </div>
      
       
      
      </div>
      </React.Fragment>
    );
  };
  export default Listuser;




