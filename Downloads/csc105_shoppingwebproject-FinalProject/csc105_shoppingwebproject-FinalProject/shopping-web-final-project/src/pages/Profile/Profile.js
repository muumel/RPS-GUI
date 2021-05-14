import React, { Component } from 'react';
import './Profile.css';
import Form from '../../components/Form/Form';
import Stock from '../../components/Stock/Stock';
import {connect} from 'react-redux';
import {authenticateUser} from '../../Services/index';

class Profile extends Component {
    constructor(props){
        super(props);
        this.state = {blurMainProfile: true}

    }
    //state = {blurMainProfile: true}
    callBackFunction = (blurCheck) => {
        this.setState({blurMainProfile: blurCheck})
        console.log(this.state.blurMainProfile)
    }

    userLogout = (e) =>{
        e.preventDefault();
        this.props.authenticateUser("unKnoWiedffg", "unknowed");
        console.log("Logout" + JSON.stringify(this.props.auth)); 
        return this.props.history.push('/');
    }

    render (){
        return(
        <div className="bigContainer"> 
            <Form parentCallback = {this.callBackFunction}/>
            <div id={((this.state.blurMainProfile === false) ? "blur" : "")}>
            <div className="editAddIcon" >
                <div>
                    <button href="#favorite" className="buttonProfilePage" type="submit" disabled = "true">
                        <i className="fas fa-heart"></i>
                        <span>Your favorite</span>
                    </button>
                </div>
                <div>
                    <button href="#stock" className="buttonProfilePage" >     
                        <i class="fas fa-boxes"></i>
                        <span>Your wholesale</span>
                    </button> 
                </div></div>
                <div>
                <button href="#stock" className="buttonLogoutPage" onClick={this.userLogout}>     
                        <span>Logout</span>
                    </button> 
                </div>
                <div className="cart-page container"><Stock/></div>

            </div>

        </div>
        )
    }
}

const mapStateToProps = state => {
    return{
      auth: state.auth
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return{
      authenticateUser: (emailLogin, passwordLogin) => dispatch(authenticateUser(emailLogin, passwordLogin))
    };
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
