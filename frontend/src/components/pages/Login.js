import React, { useState }   from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import {useForm} from 'react-hook-form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { ArrowLeftCircle } from 'react-feather';


const Login = () => {
    const loginBg = "url(" + LoginBanner + ") center/cover"


 // handle submit

           const { register, handleSubmit, errors, watch} = useForm({});
            const onSubmit =  (data, e) => {
                console.log(data);
                e.target.reset();
            };
            const onError = (errors, e) => console.log(errors, e);

 // Password visibility toggle

        const [passwordShown, setPasswordShown] = useState(false);

        const eye = <FontAwesomeIcon  icon={ passwordShown ? faEyeSlash : faEye } 
        onClick={() => setPasswordShown (passwordShown => !passwordShown )}
        />;

        const togglePasswordVisiblity = () => {
            setPasswordShown(passwordShown ? false:  true );
        };

        // watch inputs
        const watchAllFields = watch();


    return (
<div className="form-bg flex justify-center page-header" style={{ background:  loginBg }} >
    
 
   <div className="text-content container mx-auto p-2 ">
   <li className="back">
   <a className="nav-link" href="/">
       <ArrowLeftCircle className="back-icon" />
       back
   </a>
</li>
     <div className="max-w-sm mx-auto justify-center px-5 py-10 rounded shadow-xl">
    
            <div className="flex mx-40 logo justify-between mb-8">
                <img src={Logo} alt=""/>
            </div>
    
  <form onSubmit={handleSubmit(onSubmit, onError)}>

            <div className="mt-5 ">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" className="block w-full custom-input p-2  rounded "
                 ref={register({ required: true })} />
                 {errors.username && errors.username.type === "required" 
                 &&  (<span className="error-message">Fill in your Username</span>) }
            </div>
    
            <div className="mt-5">
                <div>
                <label htmlFor="password">Password</label>
                <input type={passwordShown ? "text" : "password"} id="password" name="password"
                 className="block w-full custom-input p-2  rounded "
                 ref={register({ required: true,  minLength: 12,  })} />
                <i className="fa-lg " onClick={togglePasswordVisiblity}>{eye}</i>
                </div>
               

                {errors.password && errors.password.type === "required" 
                 &&  (<span className="error-message">Fill in your password</span>)}

                 {/* {errors.password && errors.password.type === "maxLength" 
                 &&  (<span className="error-message">Password has exceeded twelve characters</span>)} */}

                 {errors.password && errors.password.type === "minLength" 
                 &&  (<span className="error-message">Password must be minimum of 8 characters</span>)}
            </div>
    
            <div className=" mt-8 ">
                <input type="submit" value="Login" className="py-3 rounded custom-btn text-center w-full" name="submit" />
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
