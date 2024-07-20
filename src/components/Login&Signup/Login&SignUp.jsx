// import React, { useState } from 'react';
// import './Login&SignUp.css';
// import { useNavigate, Link } from 'react-router-dom';
// import { RiMotorbikeFill } from "react-icons/ri";
// import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
// import download2 from "../../assets/download2.jpeg"
// // import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux'
// import { signUpUser } from "../../features/auth/authSlice";


// export const handleSignUpClick = () => {
//     const container = document.querySelector(".container");
//     container.classList.add("sign-up-mode");
// };

// export const handleSignInClick = () => {
//     const container = document.querySelector(".container");
//     container.classList.remove("sign-up-mode");
// };

// const LoginAndSignUp = () => {
//     const navigate = useNavigate();
//     const [loadingLogin, setLoadingLogin] = useState(false);
//     const [loadingSignup, setLoadingSignup] = useState(false);

//     // Set up Sign-up Function
//     const signup = async (event) => {
//         event.preventDefault();
//         setLoadingSignup(true);

//         try {
//             const email = document.querySelector('.sign-up-form .Email').value;
//             const password = document.querySelector('.sign-up-form .Password').value;
//             const name = document.querySelector('.sign-up-form .Name').value;
//             const dob = document.querySelector('.sign-up-form .DOB').value;

//             // if (!validate_email(email) || !validate_password(password)) {
//             //     alert('Email or Password is wrong');
//             //     return;
//             // }

//             // if (!validate_field(username)) {
//             //     alert('Username is required');
//             //     return;
//             // }

//             const response = await axios.post('https://insightbuddy.vercel.app/api/signup', {
//                 name,
//                 email,
//                 password,
//                 dob,
//             });

//             const data = response.data;
//             localStorage.setItem('token', JSON.stringify(data.token));
//             alert(data.message);
//             navigate('/login-signUp');
//             handleSignInClick();
//             document.querySelector('.sign-up-form .Email').value = "";
//             document.querySelector('.sign-up-form .Password').value = "";
//             document.querySelector('.sign-up-form .Name').value = "";
//             document.querySelector('.sign-up-form .DOB').value = "";
//         } catch (error) {
//             console.error('Failed to create user:', error);
//             alert(error.response.data.message);
//         } finally {
//             setLoadingSignup(false);
//         }
//     };

//     // Set up login function
//     const login = async (event) => {
//         event.preventDefault();
//         setLoadingLogin(true);

//         try {
//             const email = document.querySelector('.sign-in-form .Email').value;
//             const password = document.querySelector('.sign-in-form .Password').value;

//             // if (!validate_email(email) || !validate_password(password)) {
//             //     alert('Email or Password is wrong');
//             //     return;
//             // }

//             const response = await axios.post('https://insightbuddy.vercel.app/api/login', {
//                 email,
//                 password
//             });

//             const data = response.data;
//             localStorage.setItem('token', JSON.stringify(data.token));
//             alert(data.message);
//             navigate('/admin');
//             document.querySelector('.sign-in-form .Email').value = "";
//             document.querySelector('.sign-in-form .Password').value = "";
//         } catch (error) {
//             console.error('Failed to sign in:', error);
//             // alert(error.response.data.message);
//         } finally {
//             setLoadingLogin(false);
//         }
//     };

//     // // Validate Functions
//     // const validate_email = (email) => {
//     //     const expression = /^[^@]+@\w+(\.\w+)+\w$/;
//     //     return expression.test(email);
//     // };

//     // const validate_password = (password) => {
//     //     return password.length >= 6;
//     // };

//     // const validate_field = (field) => {
//     //     return field != null && field.length > 0;
//     // };
//     const [seePassword, setSeePassword] = useState(false);
//     const [userInfo, setUserInfo]= useState({})
//     const dispatch = useDispatch()

//     const handleForm=(t)=>{
//         t.preventDefault();
//         dispatch(signUpUser(userInfo))
//     }


//     return (
//         <div className="container">
//             <div className="signin-signup">
//                 <form className="sign-in-form" onSubmit={login}>
//                     <div className="headerImg">
//                         <Link to='/'>
//                             <h4 style={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px",  color: "rgb(5, 5, 57)" }}> 
//                                 < RiMotorbikeFill style={{ fontSize: "16px", width: "40px", height: "40px", backgroundColor: "grey", borderRadius: "100%", padding: "6px",  color: "rgb(5, 5, 57)" }} />  Bikehub</h4>
//                         </Link>
//                     </div>
//                     <h2 className="title">Login</h2>
//                     <div className="input-field">
//                         <FaUser />
//                         <input type="text" placeholder="Email" className="Email" name='email' required={true} />
//                     </div>
//                     <div className="input-field">
//                         <FaLock />
//                         <input type="password" placeholder="Password" className="Password" name='password' required={true} />
//                     </div>
//                     <button type="submit" className="btn" disabled={loadingLogin}>
//                         {loadingLogin ? (
//                             <>
//                                 {/* Signing in..  &nbsp;&nbsp;&nbsp; */}
//                                 <div className="loader"></div>
//                             </>
//                         ) : (
//                             'Sign in'
//                         )}
//                     </button>
//                     <p className="account-text">Don't have an account?
//                         <a href="#" id="sign-up-btn2" onClick={handleSignUpClick}>
//                             Sign up {loadingSignup && <div className="loader"></div>}
//                         </a>
//                     </p>
//                 </form>

//                 <form className="sign-up-form" onSubmit={signup}>
//                     <div className="headerImg">
//                         <Link to='/'>
//                             <h4 style={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px",  color: "rgb(5, 5, 57)" }}> 
//                                 < RiMotorbikeFill style={{ fontSize: "16px", width: "40px", height: "40px", backgroundColor: "grey", borderRadius: "100%", padding: "6px",  color: "rgb(5, 5, 57)" }} />  Bikehub</h4>
//                         </Link>
//                     </div>
//                     <h2 className="title">Sign up</h2>
//                     <div className="input-field">
//                         <FaUser />
//                         <input type="text" placeholder="Name" className="Name" name='name' required={true} 
//                         onChange={(e)=> setUserInfo((p)=> {return {...p, name: e.target.value}} )}/>
//                     </div>
//                     <div className="input-field">
//                         <FaUser />
//                         <input type="date" placeholder="DOB" className="DOB" style={{cursor: "text"}} name='DOB' required={true} 
//                         onChange={(e)=> setUserInfo((p)=> {return {...p, dob: e.target.value}} )} />
//                     </div>
//                     <div className="input-field">
//                         <FaEnvelope />
//                         <input type="text" placeholder="Email" className="Email" name='email' required={true} 
//                         onChange={(e)=> setUserInfo((p)=> {return {...p, email: e.target.value}} )} />
//                     </div>
//                     <div className="input-field">
//                         <FaLock />
//                         <input placeholder="Password" className="Password" name='password' required={true} 
//                          type={seePassword? "text":"password"} onChange={(e)=> setUserInfo((p)=> {return {...p, password: e.target.value}} )}/>
//                          {seePassword?<IoEyeOff onClick={()=>setSeePassword(!seePassword)}/>: <IoEye onClick={()=>setSeePassword(!seePassword)}/>}
//                     </div>
//                     <button type="submit" className="btn" disabled={loadingSignup}>
//                         {loadingSignup ? (
//                             <>
//                                 {/* Signing up..  &nbsp;&nbsp;&nbsp; */}
//                                 <div className="loader"></div>
//                             </>
//                         ) : (
//                             'Sign up'
//                         )}
//                     </button>
//                     <p className="account-text">Already have an account?
//                         <a href="#" id="sign-in-btn2" onClick={handleSignInClick}>
//                             Sign in {loadingLogin && <div className="loader"></div>}
//                         </a>
//                     </p>
//                 </form>
//             </div>
//             <div className="panels-container">
//                 <div className="panel left-panel">
//                     <div className="content">
//                         <h4>Already signed up?</h4>
//                         <p>Welcome to Bikehub<br />Sign in to continue</p>
//                         <button className="btn2" id="sign-in-btn" onClick={handleSignInClick}>Sign in</button>
//                     </div>
//                     <img src={download2} alt="Signin" className="image" />
//                 </div>
//                 <div className="panel right-panel">
//                     <div className="content">
//                         <h4>Are you New</h4>
//                         <p>Sign up to Bikehub<br />Sign up to continue</p>
//                         <button className="btn2" id="sign-up-btn" onClick={handleSignUpClick}>Sign up</button>
//                     </div>
//                     <img src={download2} alt="SignUp" className="image" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// // export { handleSignUpClick };
// export default LoginAndSignUp;







import React, { useState, useEffect } from 'react';
import './Login&SignUp.css';
import { useNavigate, Link } from 'react-router-dom';
import { RiMotorbikeFill } from "react-icons/ri";
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { IoEye, IoEyeOff } from 'react-icons/io5';
import download2 from "../../assets/download2.jpeg";
import { useSelector, useDispatch } from 'react-redux';
import { signUpUser, loginUser } from "../../features/auth/authSlice";

export const handleSignUpClick = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
};

export const handleSignInClick = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
};

const LoginAndSignUp = () => {
    const [seePassword, setSeePassword] = useState(false);
    const [seeError, setSeeError] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [loginInfo, setLoginInfo] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const checkIfLoggedIn = useSelector((state) => state.auth.isLoggedIn);

    const loginFunc = (e) => {
        e.preventDefault();
        dispatch(loginUser(loginInfo));
    };

    useEffect(() => {
        if (checkIfLoggedIn === true) {
            navigate("/");
        }
    }, [checkIfLoggedIn, navigate]);

    const handleForm = (t) => {
        t.preventDefault();
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /\d/;

        if (specialCharacterRegex.test(userInfo.password) && numberRegex.test(userInfo.password)) {
            dispatch(signUpUser(userInfo));
            navigate("/auth/login");
        } else {
            setSeeError(true);
        }
    };

    useEffect(() => {
        const specialCharacterRegex = /[!@#$%^&*(),.?":{}|<>]/;
        const numberRegex = /\d/;

        if (specialCharacterRegex.test(userInfo.password) && numberRegex.test(userInfo.password)) {
            setSeeError(false);
        }
    }, [userInfo.password]);

    return (
        <div className="container">
            <div className="signin-signup">
                <form className="sign-in-form" onSubmit={loginFunc}>
                    <div className="headerImg">
                        <Link to='/'>
                            <h4 style={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", color: "rgb(5, 5, 57)" }}>
                                <RiMotorbikeFill style={{ fontSize: "16px", width: "40px", height: "40px", backgroundColor: "grey", borderRadius: "100%", padding: "6px", color: "rgb(5, 5, 57)" }} />
                                Bikehub
                            </h4>
                        </Link>
                    </div>
                    <h2 className="title">Login</h2>
                    <div className="input-field">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Email"
                            className="Email"
                            name='email'
                            required
                            onChange={(e) => setLoginInfo({ ...loginInfo, email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <FaLock />
                        <input
                            type={seePassword ? "text" : "password"}
                            placeholder="Password"
                            className="Password"
                            name='password'
                            required
                            onChange={(e) => setLoginInfo({ ...loginInfo, password: e.target.value })}
                        />
                        {seePassword ? <IoEyeOff onClick={() => setSeePassword(!seePassword)} /> : <IoEye onClick={() => setSeePassword(!seePassword)} />}
                    </div>
                    <button type="submit" className="btn">
                        Sign in
                    </button>
                    <p className="account-text">Don't have an account?
                        <a href="#" id="sign-up-btn2" onClick={handleSignUpClick}>
                            Sign up
                        </a>
                    </p>
                </form>

                <form className="sign-up-form" onSubmit={handleForm}>
                    <div className="headerImg">
                        <Link to='/'>
                            <h4 style={{ fontSize: "20px", display: "flex", justifyContent: "center", alignItems: "center", gap: "5px", color: "rgb(5, 5, 57)" }}>
                                <RiMotorbikeFill style={{ fontSize: "16px", width: "40px", height: "40px", backgroundColor: "grey", borderRadius: "100%", padding: "6px", color: "rgb(5, 5, 57)" }} />
                                Bikehub
                            </h4>
                        </Link>
                    </div>
                    <h2 className="title">Sign up</h2>
                    <div className="input-field">
                        <FaUser />
                        <input
                            type="text"
                            placeholder="Name"
                            className="Name"
                            name='name'
                            required
                            onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <FaUser />
                        <input
                            type="date"
                            placeholder="DOB"
                            className="DOB"
                            style={{ cursor: "text" }}
                            name='DOB'
                            required
                            onChange={(e) => setUserInfo({ ...userInfo, dob: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <FaEnvelope />
                        <input
                            type="text"
                            placeholder="Email"
                            className="Email"
                            name='email'
                            required
                            onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                        />
                    </div>
                    <div className="input-field">
                        <FaLock />
                        <input
                            placeholder="Phone Number"
                            type="number"
                            name="Phone Number"
                            autoComplete="off"
                            required
                            onChange={(e) => setUserInfo({ ...userInfo, phoneNumber: e.target.value })}
                        />
                    </div>
                    {seeError && <section className="signUpError">Password should contain 1 special character and 1 number</section>}
                    <div className="input-field">
                        <FaLock />
                        <input
                            placeholder="Password"
                            className="Password"
                            name='password'
                            required
                            type={seePassword ? "text" : "password"}
                            onChange={(e) => setUserInfo({ ...userInfo, password: e.target.value })}
                        />
                        {seePassword ? <IoEyeOff onClick={() => setSeePassword(!seePassword)} /> : <IoEye onClick={() => setSeePassword(!seePassword)} />}
                    </div>
                    <button type="submit" className="btn">
                        Sign up
                    </button>
                    <p className="account-text">Already have an account?
                        <a href="#" id="sign-in-btn2" onClick={handleSignInClick}>
                            Sign in
                        </a>
                    </p>
                </form>
            </div>
            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h4>Already signed up?</h4>
                        <p>Welcome to Bikehub<br />Sign in to continue</p>
                        <button className="btn2" id="sign-in-btn" onClick={handleSignInClick}>Sign in</button>
                    </div>
                    <img src={download2} alt="Signin" className="image" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h4>Are you New</h4>
                        <p>Sign up to Bikehub<br />Sign up to continue</p>
                        <button className="btn2" id="sign-up-btn" onClick={handleSignUpClick}>Sign up</button>
                    </div>
                    <img src={download2} alt="SignUp" className="image" />
                </div>
            </div>
        </div>
    );
};

export default LoginAndSignUp;

