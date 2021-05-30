import React, { useEffect } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import {CartContext} from '../CartContext';
import {useContext} from 'react';
import {connect} from 'react-redux';
import {authenticateUser} from '../../Services/index';


const Navbar = (props) => {
    const [cart, setCart] = useContext(CartContext);
    

    function animation() {
        var tabsNewAnim = $('#navbarSupportedContent');
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        

        $(".hori-selector").css({
            "top": itemPosNewAnimTop.top + "px",
            "left" : itemPosNewAnimLeft.left + "px",
            "height" : activeWidthNewAnimHeight + "px",
            "width" : activeWidthNewAnimWidth + "px"
        });

        $("#navbarSupportedContent").on("click", "li", function(e){
            $('#navbarSupportedContent ul li').removeClass("active");
            $(this).addClass('active');

            var activeWidthNewAnimHeight = $(this).innerHeight();
            var activeWidthNewAnimWidth = $(this).innerWidth();
            var itemPosNewAnimTop = $(this).position();
            var itemPosNewAnimLeft = $(this).position();

            $(".hori-selector").css({
                "top": itemPosNewAnimTop.top + "px",
                "left" : itemPosNewAnimLeft.left + "px",
                "height" : activeWidthNewAnimHeight + "px",
                "width" : activeWidthNewAnimWidth + "px"
            });
        });
    }

    

    useEffect(() => {
        animation();

        $(window).on('resize', function(){
            setTimeout(function(){ animation(); }, 500);
        });
    });

    

    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-brand navbar-logo" to="/" exact>
                CORE
            </NavLink>
            
           
            

            <button className="navbar-toggler" onClick={function(){setTimeout(function(){animation();});}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <div className="hori-selector">
                        <div className="left"></div>
                        <div className="right"></div> 
                    </div>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/" exact>
                            <i className="fas fa-home"></i> Home
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/newest" exact>
                            <i className="fas fa-book"></i> Newest
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/trends" exact>
                            <i className="fas fa-fire"></i> Trends
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/shop" exact>
                            <i className="fas fa-store"></i> Shop
                        </NavLink>
                    </li>

                    <li className="nav-item active">
                        <NavLink className="nav-link" to="/about" exact>
                            <i className="fas fa-info"></i> About
                        </NavLink>
                    </li>

                    
                  
                </ul>
                
                <ul className="navbar-nav ml-auto submenu">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/search" exact>
                            <i className="fas fa-search"></i> <span className="hiddenText">Search</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to = {(props.auth.users.verify && Object.keys(props.auth.users).length>1)? "/profile":"/login"} exact>
                            <i className="fas fa-user"></i> <span className="hiddenText">{(!props.auth.users.verify || !(Object.keys(props.auth.users).length>1)) && <span>Login</span>}{props.auth.users.verify && Object.keys(props.auth.users).length>1 && <span>Profile</span>}</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/shopping-cart" exact>
                            <i className="fas fa-shopping-cart"><span class="num-product-in-cart" >{cart.length}</span></i> <span className="hiddenText">Shopping Cart</span>
                        </NavLink>
                    </li>
                    {/*<button onClick={() => {setNumProCart(numProCart+1)}}>
                        Add to cart
                    </button>*/}
                </ul>
                
                
            </div>
        </nav>
    )
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);