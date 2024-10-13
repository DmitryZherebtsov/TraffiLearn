import './header.css'
import { main_assets } from "../../assets/assets.tsx"
import { Link } from 'react-router-dom';

const header = () => {
  return (
    <header className='header'>
        <div className="header_left">
            <div className="logo">
                <Link to='/' ><img src={main_assets.logo} alt="Логотип" /></Link>
            </div>

            <Link to='/TestsPage' >
                <button className="start_test_btn">
                    Розпочати Тестування
                </button>
            </Link>
            
            <nav>
                <ul className='header_nav'>
                    <li>
                        <a href="#">Теми <img src={main_assets.arrow_nav} alt="" /></a>
                    </li>
                    <li>
                        <a href="##">Теорія <img src={main_assets.arrow_nav} alt="" /></a>
                    </li>
                    <li>
                        <a href="###">Білети <img src={main_assets.arrow_nav} alt="" /></a>
                    </li>
                    <li>
                        <a href="####">Про Нас </a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="header-right">
            <button className='log_in_btn'><a href="#">Вхід</a> </button>
            <button className='sign_in_btn'><a href="#">Реєстрація</a></button>
        </div>
    </header>
  )
}

export default header