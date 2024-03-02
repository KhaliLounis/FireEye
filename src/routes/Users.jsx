import React, {useState, useEffect} from "react";
import Template from "../comps/Template";
import Filter from "../comps/Filter";
import { IoClose } from "react-icons/io5";
import { AdminApi } from "../utils/data/constant";

const Users = () => {
  const [users, setUsers] = useState([])
  const getData = async () => {
    try {
      const response = await fetch(`${AdminApi}getUsers`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });
      const result = await response.json();
      setUsers(result.data);
     
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSearch = async(event)=>{
    
    try {
      const response = await fetch(`${AdminApi}search?name=${event.target.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });
      const result = await response.json();
      if (result && result.data) {
      setUsers(result.data);
      }else{
        setUsers([])
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  }

  const handleChange = async(event)=>{
    try {
      const response = await fetch(`${AdminApi}getUsers/${event.target.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token'),
        },
      });
      const result = await response.json();
      if (result && result.data) {
        setUsers(result.data);
        }else{
          setUsers([])
        }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    }
  }

  return (
    <Template>
      <div className="flex flex-col  ">
        <h1 className="font-main text-4xl text-black font-bold pt-4 text-center">
          Welcome back, {`Walid Younes`}
        </h1>
        <p className="fs-3 my-3 fw-bold pl-8">Users</p>
        <Filter handleSearch={handleSearch} handleChange={handleChange}/>
        <button className="self-end p-2 px-3 bg-green-500 text-white rounded text-xl mb-3 mr-7">
          Add user
        </button>
      </div>
      <div className="p-0 bg-white rounded-4 table-container">
        <table className="table table-hover custom-table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Wilaya</th>
              <th scope="col">Region</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user) => (
            <tr key={user.id}> {/* Ensure to provide a unique key for each row */}
                <th scope="row">{user.name}</th>
                <td>{user.email}</td>
                <td className="">{user.region ? user.region.wilaya : ''}</td> {/* Ensure region exists before accessing wilaya */}
                <td className="">{user.region ? user.region.name : ''}</td> {/* Ensure region exists before accessing name */}
                <td>
                    <IoClose
                        color="red"
                        size={30}
                        className="ml-20 cursor-pointer"
                    />
                </td>
            </tr>
        ))}
        
            
          </tbody>
        </table>
      </div>
    </Template>
  );
};

export default Users;