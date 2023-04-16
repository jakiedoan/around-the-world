import './advertising.scss'
import {useTranslation} from "react-i18next";

const Advertising = ({windowDimensions}) =>{
    const images = {
        bgAdvertising: "",
        bgAdvertisingMobile: "",
    }
    const {t} = useTranslation();

    return(
        <div className="advertising">
            <span className="title-main"
                  data-aos="fade-up">
                {t("advertising.titleMain")}
            </span>
            <div data-aos="fade-up"
                 className="advertising-image"
                 data-aos-delay="400"
                 style={{backgroundImage:`url(${windowDimensions.width > 767.5 ?images.bgAdvertising : images.bgAdvertisingMobile})`}}>
                <span data-aos="flip-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="title title-1">
                    {t("advertising.title1")}
                </span>

                <span data-aos="flip-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="title title-2">
                    {t("advertising.title2")}
                </span>
            </div>
        </div>
    )
}

export default Advertising