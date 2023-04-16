import './mini-games.scss';
import {useTranslation} from "react-i18next";

const MiniGames = ({windowDimensions}) =>{
    const {t} = useTranslation();
    const images = {
        button : process.env.PUBLIC_URL + "/images/mini-games/button.png",
    }

    return(
        <div className="mini-games">
            <span className="title-main"
                  data-aos="fade-up">
                {t("miniGames.titleMain")}
            </span>

            {
                windowDimensions.width > 767.5 ?
                    <>
                        <video data-aos="fade-up"
                               data-aos-delay="600"
                               autoPlay muted loop
                               className="video hidden-mobile">
                            <source src=""
                                    type="video/mp4"/>
                        </video>

                        <div className="button-hidden-box">
                            <div data-aos="flip-down"
                                 className="button button-hidden hidden-mobile"
                                 style={{backgroundImage:`url(${images.button}`}}>
                                <span>{t("miniGames.buttonObject")}</span>
                            </div>
                        </div>

                        <div data-aos="flip-down"
                             className="button button-jigsaw hidden-mobile"
                             style={{backgroundImage:`url(${images.button}`}}>
                            <span>{t("miniGames.buttonPuzzle")}</span>
                        </div>

                        <div data-aos="flip-down"
                             className="button button-quiz hidden-mobile"
                             style={{backgroundImage:`url(${images.button}`}}>
                            <span>{t("miniGames.buttonQuiz")}</span>
                        </div>
                    </>
                    :
                    <>
                        <div className="mobile-box hidden-pc">
                            <video autoPlay muted loop
                                   className="video"
                                   data-aos="fade-up"
                                   data-aos-delay="800">
                                <source src=""
                                        type="video/mp4"/>
                            </video>
                            <div className="button-mobile">
                                <div className="button"
                                     data-aos="flip-down"
                                     style={{backgroundImage:`url(${images.button}`}}>
                                    <span>{t("miniGames.buttonObject")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-box hidden-pc">
                            <video autoPlay muted loop
                                   className="video"
                                   data-aos="fade-up"
                                   data-aos-delay="800">
                                <source src=""
                                        type="video/mp4"/>
                            </video>
                            <div className="button-mobile">
                                <div className="button"
                                     data-aos="flip-down"
                                     style={{backgroundImage:`url(${images.button}`}}>
                                    <span>{t("miniGames.buttonPuzzle")}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mobile-box hidden-pc"
                             data-aos="fade-up">
                            <video autoPlay muted loop
                                   className="video"
                                   data-aos="fade-up"
                                   data-aos-delay="800">
                                <source src=""
                                        type="video/mp4"/>
                            </video>
                            <div className="button-mobile">
                                <div className="button"
                                     data-aos="flip-down"
                                     style={{backgroundImage:`url(${images.button}`}}>
                                    <span>{t("miniGames.buttonQuiz")}</span>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default MiniGames