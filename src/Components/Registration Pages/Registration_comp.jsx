import { useTransition, useReducer, } from "react";

import styles from "./Registration_comp.module.css";
import { useNavigate } from "react-router";

 const emptyObj = {
    username: "",
    email: "",
    password: "",
  };

  const reducer = (data,action) =>{
    return {...data,[action.type]:action.val}
  }

export default function Registration_comp() {
    const navigate = useNavigate();

  const [state,dispatch] = useReducer(reducer,emptyObj);

  const [pending, startTransition] = useTransition();

  const handleSignupBtn =() =>{
    localStorage.setItem("new_userDetails",JSON.stringify(state))

    startTransition(async ()=>{
      await new Promise(res=>setTimeout(res,2500))
    })

    navigate('/');
  }
  
  

  

  return (
    <div className={styles.Registration_form_container}>
      <h2>Registration form</h2>
      <form >
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e)=>dispatch({type:e.target.name, val:e.target.value})}
            placeholder="Enter username"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="user_email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e)=>dispatch({type:e.target.name, val:e.target.value})}
            id="user_email"
            placeholder="Enter email"
            required={true}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e)=>dispatch({type:e.target.name, val:e.target.value})}
            placeholder="Enter password"
            required={true}
          />
        </div>

        <button className={styles.signup_btn} onClick={handleSignupBtn} disabled={pending} style={{opacity:pending?0.55:null}}>
          Sign up
        </button>
      </form>
    </div>
  );
}
