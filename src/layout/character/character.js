import './character.scss';
import {useTranslation} from "react-i18next";

const Character = ({windowDimensions}) =>{
    const {t} = useTranslation();

    return(
        <div className="character">
            <span className="title-main"
                  data-aos="fade-up">
                {t("character.titleMain")}
            </span>
            {
                windowDimensions.width > 767.5 ?
                    <video data-aos="fade-up"
                           data-aos-delay="600"
                           autoPlay muted loop
                           className="video hidden-mobile">
                        <source src="" type="video/mp4"/>
                    </video>
                    :
                    <video data-aos="fade-up"
                           data-aos-delay="600"
                           autoPlay muted loop
                           className="video hidden-pc">
                        <source src="" type="video/mp4"/>
                    </video>
            }
        </div>
    )
}

export default Character;