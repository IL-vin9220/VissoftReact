import style from '../../css/layout/form.module.css'
import { useState } from 'react'

function Form(){

    const [employeeId, setEmployeeId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    // kiểm tra việc nhập email
    const validateEmail = (email) =>{
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // let success=0;

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (!employeeId) {
            setMessage('Mã không được để trống');
          } else if (!employeeId.startsWith('NV')) {
            setMessage('Mã không đúng định dạng');
          } else if (employeeId.length < 8) {
            setMessage('Mã không được nhỏ hơn 8 ký tự');
          } else if (employeeId.length > 16) {
            setMessage('Mã không được lớn hơn 16 ký tự');
          } else if (!email) {
            setMessage('Email không được để trống');
          } else if (!validateEmail(email)) {
            setMessage('Email không đúng định dạng');
          } else if (password.length < 8) {
            setMessage('Mật khẩu không được nhỏ hơn 8 ký tự');
          } else {
            setMessage('Đăng ký thành công');
          }
    }

    return(
        <form className={style.Form} onSubmit={handleSubmit}>
            <p className={style.title}>Đăng Ký</p>
            <div className={style.formGroup}>
                <label htmlFor="">Code:</label>
                <input type="text" name="" id="userCode" value={employeeId} className={style.input} onChange={(e) => setEmployeeId(e.target.value)}/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="">Email:</label>
                <input type="text" name="" id="email" value={email} className={style.input} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className={style.formGroup}>
                <label htmlFor="">Password:</label>
                <input type="text" name="" id="password" value={password} className={style.input} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className={style.formGroup}>
                <input type="checkbox" name="" id="ckbForm" className={style.ckbForm} />
                <p>Check me out</p>
            </div>
            <button type="submit" className={style.btn}>Submit</button>
            {message && <p className={style.message}>{message}</p>}
        </form>
    );
}

export default Form;