import './MainPage.css'
import { main_assets } from '../../assets/assets'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='main_page'>
        
        <div className='first'>
            <div>
                <h2 className='main_text'>А Ти Готовий  Пройти Тестування ПДР?</h2>
            </div>
            <div className='btn_block'>
                <Link to='/TestsPage'>
                    <button className='main_page_start_test_btn'>Розпочати Тестування</button>
                </Link>
                <br />
                <Link to='/TestsPage'>
                    <button className='main_page_sign_in_btn'>Реєстрація</button>
                </Link>
            </div>
            <div>
             <p className='add_text'>* Пройдіть реєстрацію щоб мати доступ до вашої статистики</p>
            </div>
        </div>

        <div className='second'>
            <img className='uncle_sam' src={main_assets.uncle_sam} alt="" />
        </div>

    </div>
  )
}

export default MainPage