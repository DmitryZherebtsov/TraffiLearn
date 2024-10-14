// import { useState } from 'preact/hooks'
import { useState } from 'react';
import './SignInUp.css'

const SignInUp = () => {

    // const [isActive, setIsActive] = useState(false);

    // const registerClicked = () => {
    //     setIsActive(true);
    // }

    // const loginClicked = () => {
    //     setIsActive(false);
    // }

    const [flipped, setFlipped] = useState(false); // Состояние для управления переворотом

  const handleFlip = () => {
    setFlipped(!flipped); // Меняет состояние при нажатии на кнопку
  };

  return (
    <>
        <div className={`container ${flipped ? 'active' : ''}`} id="container">
            <div className="form-container sign-up">
                <form>
                    <h1>Створи новий акаунт</h1>
                    <span>Зареєструйся за допомогою пошти та пароля</span>
                    <input type="text" placeholder="Ім’я"></input>
                    <input type="email" placeholder="Пошта"></input>
                    <input type="password" placeholder="Пароль"></input>
                    <button>Реєстрація</button>
                </form>
            </div>
            <div className="form-container sign-in">
                <form>
                    <h1>Вхід</h1>
                    <span>Увійди за допомогою пошти та пароля</span>
                    <input type="text" placeholder="Ім’я"></input>
                    <input type="password" placeholder="Пароль"></input>
                    <a href="#">Забув пароль?</a>
                    <button>Увійти</button>
                </form>
            </div>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Маєш акаунт?</h1>
                        <p>Вже маєш акаунт,увійди в нього щоб отримати доступ до статистики та досягнень</p>
                        <button class="hidden" id="login" onClick={handleFlip}>Увійти</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Привіт, Друже!</h1>
                        <p>Ще не маєш акаунту, створи його щоб отримати доступ до статистики та досягнень</p>
                        <button class="hidden" id="register" onClick={handleFlip}>Реєстрація</button>
                    </div>
                </div>
            </div>
        </div>
        <div className={`container-mobile ${flipped ? 'flipped' : ''}`}>
            <div className={`form-container-mobile sign-up-mobile`} 
            // style={{ display: isActive ? 'none' : 'block' }}
            >
                    <form>
                        <h1>Створи новий акаунт</h1>
                        <span>Зареєструйся за допомогою пошти та пароля</span>
                        <input type="text" placeholder="Ім’я"></input>
                        <input type="email" placeholder="Пошта"></input>
                        <input type="password" placeholder="Пароль"></input>
                        <button>Реєстрація</button>
                        <a id='login' href="#" onClick={handleFlip}>Увійти</a>
                    </form>
                </div>
                <div className={`form-container-mobile sign-in-mobile`} 
                // style={{ display: isActive ? 'block' : 'none' }}
                >
                    <form>
                        <h1>Вхід</h1>
                        <span>Увійди за допомогою пошти та пароля</span>
                        <input type="text" placeholder="Ім’я"></input>
                        <input type="password" placeholder="Пароль"></input>
                        <a href="#">Забув пароль?</a>
                        <button>Увійти</button>
                        <a id='register' href="#" onClick={handleFlip}>Реєстрація</a>
                    </form>
                </div>
            </div>
            
    </>
  )
}

export default SignInUp