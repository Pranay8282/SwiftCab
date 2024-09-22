
import google from '../images/google.svg'
import { Link} from 'react-router-dom';
import React,{useState,useContext} from 'react';
import AuthContext from '../context/AuthContext';


const DriverSignup = () => {
  const [full_name, setFullName] = useState("")
  const [email,setEmail] = useState("");
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const [confirmPassword,setConfirmPassword] = useState("")

  const [hover,setHover] = useState(null);
  const style= {
    textDecoration: hover==="link" ? "underline":"none",
    color: hover==='link' ? "gray" : "black",
  }

  const {registerUser} = useContext(AuthContext);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(full_name)
    console.log(email)
    console.log(username)

    registerUser(full_name,email,username,password,confirmPassword);
  }
  return (
    <>
      <div
        className="row"
        style={{
          backgroundColor: 'black',
          color: 'white',
          fontFamily: 'Poppins, sans-serif',
          paddingLeft: '10vh',
          paddingTop: '2.5vh',
          paddingBottom: '2.5vh',
        }}
      >
        <div className="col-md-4">
          <h1><Link to='/' style={{color:'white',textDecoration:'none'}}>SwiftCab</Link></h1>
        </div>
      </div>
      <div className="container-lg mt-5">
        <div className="row justify-content-md-center">
          <div className="col-md-4">
            <h3 className="text-center mb-4 mt-4">Sign Up to Drive</h3>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter your name"
                  className="form-control mt-3 mb-3"
                  onChange={(e)=>{setFullName(e.target.value)}}
                  required
                />
                <input
                  type="text"
                  name="emailPhone"
                  placeholder="Enter email"
                  className="form-control mt-3 mb-3"
                  onChange={(e)=>{setEmail(e.target.value)}}
                  required
                />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="form-control mt-3 mb-3"
                  onChange={(e)=>{setUsername(e.target.value)}}
                  required
                />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  className="form-control mt-3 mb-3"
                  onChange={(e)=>{setPassword(e.target.value)}}
                  required
                />
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  className="form-control mt-3 mb-3"
                  onChange={(e)=>{setConfirmPassword(e.target.value)}}
                  required
                />
              </div>
              <button
                type="submit" onClick={handleSubmit}
                style={{ backgroundColor: 'black', borderColor: 'black' }}
                className="btn btn-dark w-100 mt-4 p-3"
              >
                Continue
              </button>
              <div className="d-flex align-items-center justify-content-center mt-3">
                <span>Already have an account ? <Link style={style} onMouseEnter={()=>{setHover("link")}} onMouseLeave={()=>{setHover(null)}} to='/login'>Login</Link></span>
              </div>
            </form>
            <div
              style={{ display: 'flex', alignItems: 'center', margin: '5vh 0vh' }}
            >
              {/* <hr style={{ flex: 1, margin: '0 10px' }} className="my-4" /> */}
              {/* <p style={{ margin: 0 }}>OR</p> */}
              {/* <hr style={{ flex: 1, margin: '0 10px' }} className="my-4" /> */}
            </div>

            <hr style={{ flex: 1, margin: '0px 10px' }} className="my-4" />
            <div style={{ display: 'flex', alignItems: 'center', margin: '5vh 0vh' }}>
              By proceeding, you consent to get calls, WhatsApp or SMS messages,
              including by automated means, from Uber and its affiliates to the
              number provided.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DriverSignup;
