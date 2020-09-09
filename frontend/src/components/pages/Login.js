import React, { useState }   from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
    const loginBg = "url(" + LoginBanner + ") center/cover"


 // handle submit

           const { register, handleSubmit} = useForm({});
            const onSubmit =  (data) => {
                console.log(data);
            };

 // Password visibility toggle

        const [passwordShown, setPasswordShown] = useState(false);

        const eye = <FontAwesomeIcon  icon={ passwordShown ? faEyeSlash : faEye } 
        onClick={() => setPasswordShown (passwordShown => !passwordShown )}
        />;

        const togglePasswordVisiblity = () => {
            setPasswordShown(passwordShown ? false:  true );
        };


    return (
<div className="form-bg flex justify-center page-header" style={{ background:  loginBg }} >
   <div className="text-content container mx-auto p-2 ">
     <div className="max-w-sm mx-auto justify-center px-5 py-10 rounded shadow-xl">
    
            <div className="flex mx-40 logo justify-between mb-8">
                <img src={Logo} alt=""/>
            </div>
    
  <form onSubmit={handleSubmit(onSubmit)}>

            <div className="mt-5 ">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" className="block w-full custom-input p-2  rounded "
                 ref={register({ required: "This is required." })} />
            </div>
    
            <div className="mt-5">
                <label htmlFor="password">Password</label>
                <input type={passwordShown ? "text" : "password"} id="password"
                 className="block w-full custom-input p-2  rounded "
                 ref={register({ required: "This is required." })} />
                <i className="fa-lg " onClick={togglePasswordVisiblity}>{eye}</i>
            </div>
    
            <div className=" mt-8 ">
                <input type="submit" value="Login" className="py-3 rounded custom-btn text-center w-full" />
                <div >
                    <a href="#"><span>Forgot password?</span></a>
                </div>
           </div>

              <br/>

            <div>
                <span>Don't have an account? <a href="/Signup"><strong>Create Account</strong></a> </span>
            </div>

      </form>
    </div>
  </div>
</div>
  );
}

export default Login;
