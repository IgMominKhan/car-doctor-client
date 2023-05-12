import img from '../../assets/images/login/login.svg'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'



const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen py-20">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <div className="text-center lg:text-left lg:">
            <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl">
            <div className="card-body">
              <h2 className="text-6xl font-bold text-center my-12">Login</h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control my-6">
                <button className="btn btn-error">Login</button>
              </div>
              <p className='text-center'>Or Sign in With</p>
             <div className='flex py-8 gap-4 items-center justify-center '>
                <div className='p-4 rounded-full  flex items-center justify-center bg-red-200'>
                <FaFacebookF/>
                </div>
                <div className='p-4 rounded-full  flex items-center justify-center bg-red-200'>
                <FaLinkedinIn/>
                </div>
                  
                <div className='p-4 rounded-full  flex items-center justify-center bg-red-200'>
                <FcGoogle/>
            </div> 
            </div>
              <p className=
                'text-center'>Don't Have an Account?<Link className='text-red-500
' to='/register'>Register</Link></p>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
