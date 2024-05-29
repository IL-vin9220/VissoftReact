import style from '../../css/layout/header.module.css'

function Header(){
    return(
        <div className={style.header}>
            <div className={style.header__left}></div>
            <div className={style.header__right}>
                <div className={style.icon}></div>
                <div className={style.icon}></div>
                <div className={style.user}>
                    <div className={style.avatar}></div>
                    <div className={style.fullname}>Nguyễn Trung Dũng</div>
                </div>
            </div>
        </div>
    );
}

export default Header;