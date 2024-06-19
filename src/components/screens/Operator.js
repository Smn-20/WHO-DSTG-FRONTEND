import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Operator = () => {
  const [users,setUsers] = useState([])
  const [users_,setUsers_] = useState([])
  const fetchUsers = () => {

    let my_token = localStorage.getItem('token');
    const config = { headers: { "Authorization": `Token ${my_token}`, "Content-Type": "application/json" } };
    axios.get('http://who.ubuzima.rw/who/users/',config).then(response => {
      setUsers(response.data);
      setUsers_(response.data);
    });

  }

  const searchUsers = (value) => {
    //setSearchTerm(value); // Update the search term state

    if (value === "") {
      setUsers(users_); // Reset to the original list of projects
    } else {
      const filteredUsers = users_.filter((user) => {
        const userLowercase = user.email.toLowerCase();
        const searchTermLowercase = value.toLowerCase();
        return userLowercase.includes(searchTermLowercase);
      });

      setUsers(filteredUsers);
    }
  };

  useEffect(()=>{
    fetchUsers();
  },[])

  return (
   <div class="container-xxl container-p-y">

              <div class="card"> 
                <h5 class="card-header" style={{color:'black',alignSelf:'flex-start'}}>All users</h5>

                <div style={{marginBottom:25,alignSelf:'flex-end'}}>
                      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
                        <div class="offcanvas-header">
                          <h5 id="offcanvasEndLabel" class="offcanvas-title">Add new user</h5>
                          <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body  flex-grow-0">
                              <div class="card-body">
                                <form>
                                  <div class="mb-3">
                                    <label class="form-label" for="basic-default-fullname">Email</label>
                                    <input type="email" class="form-control" id="basic-default-fullname" placeholder="email" />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label" for="basic-default-phone">Phone No</label>
                                    <input
                                      type="number"
                                      id="basic-default-phone"
                                      class="form-control phone-mask"
                                      placeholder="658 799 8941"
                                    />
                                  </div>
                                  <div class="mb-3">
                                    <label class="form-label" for="basic-default-company">Select role</label>
                                    <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                                      <option selected>Open this select menu</option>
                                      <option value="1">Customer</option>
                                      <option value="3">Insurance</option>
                                      <option value="2">Petrol Station</option>
                                    </select>
                                  </div> 

                                  <button type="submit" class="btn btn-primary d-grid w-100">Save</button>
                              </form>
                            </div>
                            
                      </div>
                  </div>

                    <div class="btn-group m-3">
                      <div class="input-group">
                        <input
                          type="text"
                          class="form-control"
                          onChange={(e)=>searchUsers(e.target.value)}
                          placeholder="search customer"
                        />
                        <span class="input-group-text cursor-pointer" style={{backgroundColor: "#6A6CFE"}}><i class="bx bx-search" style={{color:'white'}}></i></span>
                      </div>
                    </div>

                      

                </div>


                <div class="table-responsive text-nowrap">
                  <table class="table">
                    <thead class="table-dark">
                      <tr>
                        <th style={{color:'white'}} >No</th>
                        <th style={{color:'white'}} >Email</th>
                        <th style={{color:'white'}} >Role</th>
                        <th style={{color:'white'}} >Status</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                    {users.map((user, index) => {
                    return (
                      <tr>
                        <td><strong>{index + 1}.</strong></td>
                        <td>{user.email}</td>
                        <td>{user.roles.map(role => role.name).join(' ,')}</td>
                        <td><span className="badge bg-label-success me-1">Active</span></td>
                      </tr>
                    )
                  })}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
  )
}

export default Operator;