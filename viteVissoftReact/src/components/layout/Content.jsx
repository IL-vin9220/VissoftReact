import style from '../../css/layout/content.module.css'
import {useState} from 'react';
import Form from './Form'

function Content() {

  let employeeCode_1 = [];
  // let employeeCode_3 = [];
  const [employeeId, setemployeeId] = useState('');
  const [employeeId3, setemployeeId3] = useState('');
  const [array3, setArray3] = useState([]);
  const [message1, setMessage1] = useState('');
  const [message2, setMessage2] = useState('');

  for(let i=0;i<10;i++){
    employeeCode_1.push("nv"+(i+1));
  }

  const handleSubmit1 = (e) =>{
    e.preventDefault();
    if(!employeeId){setMessage1("Mã Nhân Viên Không Được Để Trống");}
    else if(employeeCode_1.includes(employeeId)){setMessage1("Mã Nhân Viên Đã Tồn Tại Trong Hệ Thống");}
    else{
      employeeCode_1.push(employeeId);
      setMessage1("Thêm Mã Nhân Viên Thành Công");
    }
  }

  const handleSubmit2 = (e) =>{
    e.preventDefault();
    if(!employeeId3){setMessage2("Mã Nhân Viên Không Được Để Trống");}
    else if(!employeeId3.startsWith("NV")){setMessage2("Mã Nhân Viên Không Đúng Định Dạng");}
    else if(employeeId3.length<8){setMessage2("Mã Nhân Viên Không Được Ngắn Hơn 8 Ký Tự");}
    else if(employeeId3.length>16){setMessage2("Mã Nhân Viên Không Được Dài Hơn 16 Ký Tự")}
    else{
      setArray3(item => [...item, employeeId3]);
      setMessage2("Thêm Mã Nhân Viên Thành Công");
    }
  }

    return (
      <div className={style.content}>
        {/* Bài 1 */}
        <div className={style.bai1}>
          <form onSubmit={handleSubmit1}>
            <div className={style.formGroup}>
              <label htmlFor="">Mã Nhân Viên:</label>
              <input type="text" name="" id="employeeId" value={employeeId} onChange={(e) => setemployeeId(e.target.value)} className={style.input} />
            </div>
            <button type="submit" className={style.btn}>Submit</button>
          </form>
          {message1 && <p className={style.message}>{message1}</p>}
        </div>
        {/* Bài 2 */}
        <Form></Form>
        {/* Bài 3 */}
        <div className={style.bai1}>
          <form onSubmit={handleSubmit2}>
            <div className={style.formGroup}>
              <label htmlFor="">Mã Nhân Viên:</label>
              <input type="text" name="" id="employeeId" value={employeeId3} onChange={(e) => setemployeeId3(e.target.value)} className={style.input} />
            </div>
            <button type="submit" className={style.btn}>Submit</button>
          </form>
          {message2 && <p className={style.message}>{message2}</p>}
          {array3.map(item => (<p key={item}>{item}</p>))}
        </div>
      </div>
    );
  }
  
  export default Content;
  