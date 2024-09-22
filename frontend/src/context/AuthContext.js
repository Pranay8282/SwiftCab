import { createContext, useState, useEffect, } from "react";
import { jwtDecode } from 'jwt-decode';
import { json, useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";

const swal = require("sweetalert2");

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
    );
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null);

    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    const loginUser = async (email, password) => {
        let url = "http://127.0.0.1:8000/api/token/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        })

        const data = await response.json()


        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate("/")
            swal.fire({
                title: 'Login Success',
                icon: 'success',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                chowConfirmButton: false,
            })
        }
        else {
            console.log(response.status)
            console.log('An Error Occured !')
            swal.fire({
                title: 'Email - Password does not exist !',
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                chowConfirmButton: false,
            })
        }
    }

    const registerUser = async (full_name, email, username, password, password2) => {
        let url = "http://127.0.0.1:8000/api/register/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ full_name, email, username, password, password2 })
        })
        const data = await response.json()

        if (response.status === 201) {
            navigate('/login')
            swal.fire({
                title: 'Registration Success',
                icon: 'success',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                chowConfirmButton: false,
            })
            return true;
        }
        else {
            console.log(response.status)
            console.log('An Error Occured !')
            console.log(data)
            swal.fire({
                title: "Signup failed. Check details.",
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                chowConfirmButton: false,
            })
            return false;
        }
    }

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);
        localStorage.removeItem('authTokens');
        navigate("/login")
        swal.fire({
            title: 'You have been logged out Successfully!',
            icon: 'success',
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            chowConfirmButton: false,
        })
    }

    const uploadDocuments = async (email, driving_license_num, adhaar_num, pan_number, license_plate) => {
        let url = "http://127.0.0.1:8000/api/document/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, driving_license_num, adhaar_num, pan_number, license_plate })
        });

        const data = await response.json()
        if (response.status === 201) {
            navigate("/confirmation")
            swal.fire({
                title: 'Document Uploaded Successfully!',
                icon: 'success',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            console.log('Error uploading document: ' + JSON.stringify(response.data));
            console.log(data)
            swal.fire({
                title: 'Error Uploading Document',
                text: JSON.stringify(response.data),
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }
    }

    const myTrips = async (email, pickup, dropoff, paymentMethod, dateTime, distance, duration, price) => {
        let url = "http://127.0.0.1:8000/api/mytrips/";
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, pickup, dropoff, paymentMethod, dateTime, distance, duration, price })
        });
        const data = await response.json()
        if (response.status === 201) {
            navigate("/mytrips")
            swal.fire({
                title: 'Ride booked successfully !',
                icon: 'success',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        } else {
            console.log('Error in booking ride: ' + JSON.stringify(response.data));
            console.log(data)
            swal.fire({
                title: 'Error in booking ride , Server issues',
                text: JSON.stringify(response.data),
                icon: 'error',
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            });
        }


    }

    const contextData = {
        user, setUser,
        authTokens, setAuthTokens,
        registerUser, loginUser, logoutUser, uploadDocuments, myTrips,
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwtDecode(authTokens.access))
        }
        setLoading(false);
    }, [authTokens, loading])

    return (
        <>
            <AuthContext.Provider value={contextData}>
                {loading ? null : children}
            </AuthContext.Provider>
        </>
    );
}