import { useState } from "react";
import "./testsPage.css";
import { main_assets } from "../../assets/assets";

const TestsPage = () => {
  const [isIconClicked, setIsIconClicked] = useState(false);
  const [isHintOpened, setIsHintOpened] = useState(true);

  const handleIconClick = () => {
    setIsIconClicked(!isIconClicked); 
  };

  const openHint = () => {
    setIsHintOpened(!isHintOpened); 
  };


  return (
    <div className="test_page">
      <div className="test_road">
        <div className="numeration">
          <div className="num">№</div>
          <div className="num">1</div>
          <div className="num num_checked">2</div>
          <div className="num">3</div>
          <div className="num">4</div>
          <div className="num">5</div>
          <div className="num">6</div>
          <div className="num">7</div>
          <div className="num">8</div>
          <div className="num">9</div>
        </div>

        <div className="question_answer">
          <div className="question">Недостатньою видимістю вважається: </div>
          <div>
            <button className="btn">Обмежена оглядовість менше 300 м.</button>
            <br />
            <button className="btn">
              Видимість дороги в напрямку руху менше 300 метрів, обмежена
              поворотом дороги.
            </button>
            <br />
            <button className="btn">
              Видимість дороги в напрямку руху менше 300 м у сутінках, в умовах
              туману, дощу, снігопаду і т. п.
            </button>
            <br />
            <button className="btn">
              Небезпечний поворот, небезпечний підйом, небезпечний спуск.
            </button>
          </div>
        </div>

        <div className="picture_and_interactions">
          <img src={main_assets.test_img} alt="" />
          <div className="interactions">
            <div>
              <img className="icons_interations" src={main_assets.like} alt="" />
              <p className="title_interaction">Like</p>
            </div>
            <div>
              <img
                className="icons_interations"
                src={main_assets.dislike}
                alt=""
              />
              <p className="title_interaction">Dislike</p>
            </div>

            <div onClick={openHint}> 
                <img className="icons_interations" src={main_assets.bulb} alt="" />
                <p className="title_interaction">Hint</p>
            </div>

            <div>
              <img
                className={`icons_interations ${isIconClicked ? "highlighted" : ""}`}
                src={main_assets.save}
                alt=""
                onClick={handleIconClick}
              />
              <p className="title_interaction">Save</p>
            </div>

            <button className="answer">Відповісти</button>
          </div>
        </div>
      </div>

      <div  className={`hint ${isHintOpened ? "show" : "close"}`}>
        <p className="hint_text"> 
            Правильна відповідь: Думай сам Думай самДумай самДумай сам Думай самДумай самДумай сам Думай самДумай самДумай самДумай самДумай сам Думай сам
            Думай сам Думай самДумай самДумай сам Думай самДумай самДумай сам Думай самДумай самДумай самДумай самДумай сам Думай сам.
        </p>
        <img className="maskot" src={main_assets.uncle_sam} alt="" />
      </div>

      <div className="comments">
        <div className="comment_titles">
            <h2>Напиши свій коментар!</h2>
            <textarea className="form_control" rows={3} placeholder="Напишіть тут свій коментар..."></textarea>
        </div>

        <div className="comment_titles">
            <h2><img className="img_message" src={main_assets.message} alt="" />Коментарі</h2>
            <textarea className="form_control" rows={3} placeholder="Напишіть тут свій коментар..."></textarea>
        </div>
      </div>

    </div>
  );
};

export default TestsPage;
