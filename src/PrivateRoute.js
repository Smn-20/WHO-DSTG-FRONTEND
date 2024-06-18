import React from 'react';
import {connect} from 'react-redux';
import {Navigate,Outlet} from 'react-router-dom';

const PrivateRoute=({isAuthenticated})=>{
    return(
    !isAuthenticated  ?<Navigate to='/'/>:<Outlet/>
    )
}

const mapStateToProps = state => ({
    isAuthenticated: state.token !== null,
    isLoading: state.loading
})
 export default connect(mapStateToProps)(PrivateRoute); 