import { useActionState, useState, useTransition } from 'react';
import { useNavigate } from 'react-router';

import styles from './Login_form.module.css';


export default function Login_form() {

    const clientBrowser = JSON.parse(localStorage.getItem("userDetails"))

    let u = clientBrowser?.username ? clientBrowser.username : "";
    let p = clientBrowser?.password ? clientBrowser.password : "";

    const [userDetail,setUserDetail] = useState({'username':u,'password':p});
    // const [errMsg,setErrMsg] = useState('');
    const navigate = useNavigate();
    const [pending, startTransition] = useTransition();


    const handleInputs = (e) => {
        const {name,value} = e.target;
        setUserDetail({...userDetail,[name]:value});
    }

    const handleLoginBtn =()=>{
        // console.log(userDetail)

        localStorage.setItem("userDetails",JSON.stringify(userDetail));

        startTransition(async ()=>{
            await new Promise(res => setTimeout(res,2500));
        })

        navigate('/h-p');

    }
    



    return <div className={styles.login_form_container}>
        <h5 className={styles.heading}>Log into instagram</h5>
        <form className={styles.inp_fields}>
            <input type="text" name="username" value={userDetail.username} onChange={handleInputs} placeholder="Mobile number, username or email" />
            <input type="password" name="password" value={userDetail.password} onChange={handleInputs} placeholder="Password" />
        </form>
        <br />

        <div className={styles.login_btn_continer}>
            <button className={styles.login_btn} onClick={handleLoginBtn} disabled={pending} style={{opacity:pending?"0.55":null}}>Log in</button>
            <button className={styles.forgotBtn} >Forgot password?</button>
        </div>    


        <div className={styles.login_with_ot_container}>
            <button className={styles.fb_btn}>Log in with Facebook</button>
            <button className={styles.new_ac_btn} >Create new account</button>
        </div>
     </div>
}