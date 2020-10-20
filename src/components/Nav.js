import React,{useState,useEffect} from 'react'
import '../Nav.css'

function Nav(){

    const [show,handleShow] = useState(false);

    useEffect(()=>{
        // Adding event listener to window 
        // then telling if scroll is done to 100px then handleShow will be true or false
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 80){
                handleShow(true)
            }else{
                handleShow(false)
            }
            // The return statement is telling if the useEffect fires up again just remove the scroll effect
            return ()=>{
                window.removeEventListener('scroll')
            }
        })
    },[])

    return(
        // telling it will always have flex-nav-container class
        // but also add nav-black class when show  is true
    
        <div className={`flex-nav-container ${show && 'nav-black'}`}>
            <div>
            <img className='netflix-logo' src='https://pmcvariety.files.wordpress.com/2020/05/netflix-logo.png?w=300' alt='Netflix_Logo'></img>
            </div>
            <div>
            <img className='avatar' src='https://avatarfiles.alphacoders.com/591/thumb-59122.jpg' alt='Your Avatar'></img>
            </div>
        </div>
    )
}

export default Nav;
