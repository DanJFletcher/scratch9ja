import React  from 'react';
import LoginBanner from '../../imgs/scratch9ja.png';
import Logo from '../../imgs/logo.png';
import {useForm} from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit} = useForm();

    const loginBg = "url(" + LoginBanner + ") center/cover"

    const onSubmit = (values) => {
        console.log(values);
    };

    return (
       
 <div className="page-banner flex justify-center page-header" style={{ background:  loginBg }} >
        
    <div className="text-content container mx-auto p-2 ">
       
        <div className="max-w-sm mx-auto my-24 px-5 py-10 rounded shadow-xl">
    
            <div className="flex mx-40 logo justify-between mb-8">
                <img src={Logo} alt=""/>
            </div>
    
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="mt-5 ">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" className="block w-full custom-input p-2  rounded "  ref={register} />
               </div>
    
                   
               <div className="mt-5">
                    <label  htmlFor="email">Email Address</label>
                    <input className="block w-full custom-input p-2  rounded " id="email" type="email" placeholder="Your valid email address" />
               </div>

               <div className="mt-5">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" className="block w-full custom-input p-2  rounded " ref={register} />
               </div>

               <div className="mt-5">
                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                        <input type="password" id="ConfirmPassword" className="block w-full custom-input p-2  rounded " ref={register} />
               </div>

    
               <div className=" mt-8 ">
                    <input type="submit" value="Register" className="py-3 rounded custom-btn text-center w-full" />        
               </div>
                    
              <br/>

              <div>
                  <span>Already have an account? <a href="/login"><strong>Login</strong></a> </span>
              </div>
              
           </form>
        </div>
    </div>
 </div> 
    );
}

export default SignUp;
