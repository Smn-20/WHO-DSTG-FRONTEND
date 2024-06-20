import React, { useState } from 'react'
import axios from 'axios';
import { logout } from '../../store/actions/auth'; 
import { connect } from 'react-redux';
const ChangePassword = (props) => {
  const [oldPassword,setOldPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const [hide1,setHide1] = useState(true)
  const [hide2,setHide2] = useState(true)
  const [hide3,setHide3] = useState(true)
  const [confirmPassword,setConfirmPassword] = useState('')

  const handleLogout = () => {
    props.logout()
  }

  const handleSubmit = async (e) => {
    
    if(newPassword===confirmPassword){
      setLoading(true)
    let my_token = localStorage.getItem('token');
    e.preventDefault();
    
    const userId = await localStorage.getItem('userId')
    const postObj  = JSON.stringify({
      user_id:userId,
      old_password:oldPassword,
      new_password:newPassword,
    })

    const config = {
    headers: { "Authorization": `Token ${my_token}`,"Content-Type":"application/json"}
    };
    

    //axios post
    axios.put('https://who.ubuzima.rw/who/change-password/', postObj,config).then((res) => {
      setLoading(false)
      if (res.status == 200 || res.status == 201) {
        alert('Password successfully changed')
        handleLogout();
      }
      else {
        alert('Something went wrong!');
        window.location.reload();
      }
  
    }).catch(err => {
        setLoading(false)
        alert('Your current password is incorrect!')
    })
    }else{
      alert('New password and Confirmation password doesn\'t match')
    }
  }
  return (
    <div class="container-xxl container-p-y">

    <div class="col-md-12">
       <div class="card mb-4">
         <h5 class="card-header">Change Password</h5>
         <div class="card-body demo-vertical-spacing demo-only-element">
           <div class="form-password-toggle">
             <label class="form-label" for="basic-default-password12">Current Password</label>
             <div class="input-group">
               <input
                 type={hide1?'password':'text'}
                 class="form-control"
                 onChange={(e)=>setOldPassword(e.target.value)}
                 id="basic-default-password12"
                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                 aria-describedby="basic-default-password2"
               />
               <span id="basic-default-password2" onClick={()=>setHide1(!hide1)} class="input-group-text cursor-pointer"
                 ><i class={`bx ${hide1?'bx-hide':'bx-show'}`}></i></span>
             </div>
           </div>

           <div class="form-password-toggle">
             <label class="form-label" for="basic-default-password12">New Password</label>
             <div class="input-group">
               <input
                 type={hide2?'password':'text'}
                 class="form-control"
                 onChange={(e)=>setNewPassword(e.target.value)}
                 id="basic-default-password12"
                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                 aria-describedby="basic-default-password2"
               />
               <span id="basic-default-password2" onClick={()=>setHide2(!hide2)} class="input-group-text cursor-pointer"
                 ><i class={`bx ${hide2?'bx-hide':'bx-show'}`}></i></span>
             </div>
           </div>

           <div class="form-password-toggle">
             <label class="form-label" for="basic-default-password12">Confirm Password</label>
             <div class="input-group">
               <input
                 type={hide3?'password':'text'}
                 class="form-control"
                 onChange={(e)=>setConfirmPassword(e.target.value)}
                 id="basic-default-password12"
                 placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                 aria-describedby="basic-default-password2"
               />
               <span id="basic-default-password2" onClick={()=>setHide3(!hide3)} class="input-group-text cursor-pointer"
                 ><i class={`bx ${hide3?'bx-hide':'bx-show'}`}></i></span>
             </div>
           </div>

           <button type="button" onClick={handleSubmit} class="btn btn-primary d-grid w-100">{loading?'Submitting...':'Change'}</button>

         </div>
       </div>
     </div>
 </div>
  )
}

export default connect(null, { logout })(ChangePassword);