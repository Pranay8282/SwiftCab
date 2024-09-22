import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Button } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import { jwtDecode } from 'jwt-decode'
import { Navigate, useNavigate } from 'react-router-dom';
const VerifyPhone = () => {
    const token = localStorage.getItem('authTokens');
    const user = jwtDecode(token);
    const username = user.username;
    const [phone, setPhone] = useState();
    const navigate = useNavigate();
    
    const verifyNumber = () => {
        if(phone==="+91" || phone==="+" || phone===''){
            alert('Invalid phone number. Please correct immediately.');
            
        }
        else{
            if(phone.length<10){
                alert("We couldn't recognize that phone number. Please enter a valid 10-digit number.")
            }
            else{
                localStorage.setItem(`${username}Phone`, phone);
                alert('Phone number verified successfully');
                navigate('/dashboard');
            }
        }
    }
    return (
        <div>
            <header className="bg-dark text-white mb-4">
                <div className="container d-flex justify-content-between align-items-center">
                    <h1 className="mb-0">SwiftCab</h1>
                    <button className="btn btn-light">Help</button>
                </div>
            </header>
            <div className='container-lg'>
                <div className="card mt-3" style={{ transform: "none", transition: "none", boxShadow: "none", border: "none" }}>
                    <div className="card-header text-center bg-dark" style={{ fontSize: "30px", color: "white", backgroundColor: "black", border: "none" }}>
                        Verify Phone Number
                    </div>
                    <div className="card-body d-flex align-items-center pt-3" style={{ flexDirection: "column" }}>
                        <div style={{ display: "flex" ,alignItems:"center"}}>
                            <PhoneInput
                                country={'in'}
                                value={phone}
                                onChange={(phone)=>setPhone("+"+phone)}
                                required
                            />
                        </div>
                        <Button onClick={verifyNumber} variant="standard" style={{marginTop:"10px"}} startIcon={<VerifiedIcon />}>
                            Verify Phone 
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyPhone
