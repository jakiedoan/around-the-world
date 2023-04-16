import './introduce.scss';
import {Trans, useTranslation} from "react-i18next";
import {Container} from "react-bootstrap";

const Introduce = () =>{
    const { t } = useTranslation();

    const images = {
        bgIntroduce: process.env.PUBLIC_URL + '/images/introduce/bg-introduce.png',
        introduceFrame: process.env.PUBLIC_URL + '/images/introduce/introduce-frame.png'
    }
    return(
        <div className="introduce" style={{backgroundImage: `url(${images.bgIntroduce})`}}>
            <Container>
                <div data-aos="fade-up"
                     className="introduce-content" style={{backgroundImage: `url(${images.introduceFrame})`}}>
                    <span className="introduce-text">
                        <span className="introduce-text-main">
                            {t('introduce.titleMain')}
                        </span>

                        <Trans
                            i18nKey="introduce-title1"
                            defaults={t('introduce.title1')}
                            components={{ nowrap: <span className="nowrap"/>}}
                        />

                        <br/><br/>
                        <Trans
                            i18nKey="introduce-title1"
                            defaults={t('introduce.title2')}
                            components={{ nowrap: <span className="nowrap"/>}}
                        />
                    </span>

                    <div className="introduce-light introduce-light-1"></div>
                    <div className="introduce-light introduce-light-2"></div>
                    <div className="introduce-light introduce-light-3"></div>
                </div>
            </Container>
        </div>
    )
}

export default Introduce;