import "./key-features-item.scss"
import {Trans} from "react-i18next";

const KeyFeaturesItem = ({titleMain, title, delay}) =>{
    const images = {
        boxKeyFeatures: process.env.PUBLIC_URL + '/images/key-features/box-key-features.png',
    }
    return(
        <div data-aos={delay ? "fade-left" : null}
             data-aos-delay={delay ? delay : null}
             className="key-features-item"
             style={{backgroundImage: `url(${images.boxKeyFeatures})`}}>
            <div className="box-title">
                <span className="title-key title-main-key">
                    {titleMain}
                </span>
                <span className="title-key title">
                    <Trans
                        i18nKey="key-feature-title"
                        defaults={title}
                        components={{ nowrap: <span className="nowrap"></span>}}/>
                </span>
            </div>
        </div>
    )
}

export default KeyFeaturesItem;