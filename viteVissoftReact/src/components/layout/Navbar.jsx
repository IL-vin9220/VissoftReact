import style from '../../css/layout/navbar.module.css'

function Navbar(){
  return(
    <div className={style.navbar}>
      <ul className={style.menu}>
        <li>
          <div className={style.icon}></div>
          <a href="">DashBoard</a>
        </li>
        <li>
          <div className={style.icon}></div>
          <a href="">Employee</a>
        </li>
        <li>
          <div className={style.icon}></div>
          <a href=""></a>
        </li>
        <li>
          <div className={style.icon}></div>
          <a href=""></a>
        </li>
        <li>
          <div className={style.icon}></div>
          <a href=""></a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
