import './header.scss'
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';
import i18next from "i18next";
import {BsList} from "react-icons/bs";
import {CgChevronLeft,CgChevronDown} from "react-icons/cg";
import {FiXCircle} from "react-icons/fi";
import AlertNotification from "../../components/alert-notification/alert-notification";

const Header = ({windowDimensions}) =>{
    const { t } = useTranslation();
    const images = {
        bgHeader: process.env.PUBLIC_URL + '/images/header/bg-header.png',
        titleHeader : process.env.PUBLIC_URL + "/images/header/title-header.png",
        logoHeader : process.env.PUBLIC_URL + "/images/header/logo-ckk-header.png",
        comingSoonButton : process.env.PUBLIC_URL + "/images/header/coming-soon-button.png",
        iconSelect : process.env.PUBLIC_URL + "/images/header/icon-select-header.png",
        flagEngland : process.env.PUBLIC_URL + "/images/header/england-flag.jpg",
        flagVietnam : process.env.PUBLIC_URL + "/images/header/vietnam-flag.jpg",
        flagKorean: process.env.PUBLIC_URL + "/images/header/korea-flag.jpg",
        appStore: process.env.PUBLIC_URL + "/images/header/app-store.png",
        googlePlay: process.env.PUBLIC_URL + "/images/header/google-play.png",
        pc: process.env.PUBLIC_URL + "/images/header/pc.png",
    };

    const [statusMobileMenu, setStatusMobileMenu] = useState(false);
    const [statusDownloadMobile, setStatusDownloadMobile] = useState(false);
    const [statusLangMobile, setStatusLangMobile] = useState(false);
    const [animationMobile, setAnimationMobile] = useState(false);

    const [statusAlert, setStatusAlert] = useState(false);

    const [statusLang, setStatusLang] = useState(false);
    const [statusDownload, setStatusDownload] = useState(false);

    const [textLang, setTextLang] = useState('ENGLISH');

    const [bgHeader , setBgHeader] = useState("");
    const [flag, setFlag] = useState(images.flagEngland);

    const setStatusMenu = (status) =>{
        setStatusLang(!status);
        setStatusDownload(false);
    };

    const openMenuMobile = () =>{
        setStatusMobileMenu(true);
        setAnimationMobile(true);
    }

    const setStatusDownloadDevice = (status) =>{
        setStatusDownload(!status);
        setStatusLang(false);
    }

    const changeLang = (name) =>{
        i18next.changeLanguage(name);
        let lang = t("header."+ name);
        setTextLang(lang);
        if(name === "ko"){
            setFlag(images.flagKorean)
        }else if(name === "vn"){
            setFlag(images.flagVietnam)
        }else{
            setFlag(images.flagEngland)
        }
        setStatusLang(false);

        closeMenuMobile();
    }

    const downloadAround = () =>{
        setStatusDownload(false);
        setStatusAlert(true);
        setTimeout(()=>{
            setStatusAlert(false);
        },1000)
        closeMenuMobile();
    }

    const closeMenuMobile = () =>{
        setAnimationMobile(false);
        setTimeout(()=>{
            setStatusMobileMenu(false);
            setStatusDownloadMobile(false);
            setStatusLangMobile(false);
        },500);
    }

    const clickDownloadMobile = () =>{
        setStatusMobileMenu(true);
        setStatusDownloadMobile(true);
        setStatusLangMobile(false);
    }

    const clickLangMobile = () =>{
        setStatusMobileMenu(true);
        setStatusDownloadMobile(false);
        setStatusLangMobile(true);
    }

    const clickHomeMenu = () =>{
        setStatusMobileMenu(true);
        setStatusDownloadMobile(false);
        setStatusLangMobile(false);
    }

    window.onclick = (event) => {
        if (
            statusLang &&
            !event.target.matches('.flag') &&
            !event.target.matches('.drop-btn-docs') &&
            !event.target.matches('.icon-select-header') &&
            !event.target.matches('.drop-btn-lang')
        ){
            setStatusMenu(true);
        }else if(
            statusDownload &&
            !event.target.matches('.device') &&
            !event.target.matches('.drop-btn-docs') &&
            !event.target.matches('.icon-select-header') &&
            !event.target.matches('.drop-btn-download')
        ){
            setStatusDownloadDevice(true);
        }else if(
            event.target.matches('.menu-mobile')
        ){
            closeMenuMobile();
        }
    }

    useEffect(() => {
        const onScroll = () => {
            if(window.pageYOffset > document.getElementById("video-introduce").offsetHeight){
                setBgHeader(images.bgHeader);
            }else {
                setBgHeader("");
            }
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <>
            <div className="header"
                 data-aos="fade-down"
                 data-aos-anchor-placement="top-top"
                 style={{backgroundImage:`url(${bgHeader})`}}>
                <img className="title-header"
                     src={images.titleHeader}
                     alt="title-header"/>

                {
                    windowDimensions.width > 767.5 ?
                        <div className="header-box">
                            <a href=""
                               className="button-cuckookoo button-menu">Cuckookoo</a>

                            <a href="" className="button-chainos button-menu">Chainos</a>

                            <div className="dropdown dropdown-download">
                                <button className="drop-btn drop-btn-download"
                                        onClick={()=>setStatusDownloadDevice(statusDownload)}>
                                    {t("header.button")}
                                    <img className={"icon-select-header" + (statusDownload ? " rotate": "")}
                                         src={images.iconSelect} alt="icon-select"/>
                                </button>

                                <div className={"dropdown-content dropdown-content-download" + (statusDownload ? " show": "")}>
                                    <button onClick={()=>downloadAround()}
                                            className="drop-option drop-option-download">
                                        <img className="device" src={images.appStore} alt="app-store"/>
                                        <span className="coming-soon">Coming soon</span>
                                    </button>
                                    <button onClick={()=>downloadAround()}
                                            className="drop-option drop-option-download">
                                        <img className="device" src={images.googlePlay} alt="google-play"/>
                                        <span className="coming-soon">Coming soon</span>
                                    </button>
                                    <button onClick={()=>downloadAround()}
                                            className="drop-option drop-option-download">
                                        <img className="device" src={images.pc} alt="pc"/>
                                        <span className="coming-soon">Coming soon</span>
                                    </button>
                                </div>
                            </div>

                            <div className="dropdown dropdown-lang">
                                <button className="drop-btn drop-btn-lang"
                                        onClick={()=>setStatusMenu(statusLang)}>
                                    <img className="flag" src={flag} alt="flag-england"/>
                                    {textLang}
                                    <img className={"icon-select-header" + (statusLang ? " rotate": "")}
                                         src={images.iconSelect} alt="icon-select"/>
                                </button>

                                <div className={"dropdown-content dropdown-content-lang" + (statusLang ? " show": "")}>
                                    <button onClick={()=>changeLang('en')}
                                            className="drop-option">
                                        <img className="flag-option" src={images.flagEngland} alt="flag-english"/>
                                        {t("header.en")}
                                    </button>
                                    <button onClick={()=>changeLang('ko')}
                                            className="drop-option">
                                        <img className="flag-option" src={images.flagKorean} alt="flag-korean"/>
                                        {t("header.ko")}
                                    </button>
                                    <button onClick={()=>changeLang('vn')}
                                            className="drop-option">
                                        <img className="flag-option" src={images.flagVietnam} alt="flag-vietnam"/>
                                        {t("header.vn")}
                                    </button>
                                </div>
                            </div>
                        </div>
                        :
                        <BsList onClick={()=>openMenuMobile()} className="icon-menu" />
                }
            </div>

            <AlertNotification alertStatus={statusAlert} title="Download success"/>



            <div className={"menu-mobile" + (statusMobileMenu ? " show" : "" )}>
                <div className={"menu-mobile-box" + (animationMobile ? " show": "") }>
                    <div className="header-mobile" >
                        <button className={"button-back" + (statusDownloadMobile ? " show" : "")}
                                onClick={()=>clickHomeMenu()}>
                            <CgChevronLeft className="icon-left" />
                            {t("header.buttonMobile")}
                        </button>

                        <button className={"button-back" + (statusLangMobile ? " show" : "")}
                                onClick={()=>clickHomeMenu()}>
                            <CgChevronLeft className="icon-left" />
                            {t("header.buttonLang")}
                        </button>

                        <FiXCircle onClick={()=>closeMenuMobile()} className="icon-close" />
                    </div>

                    <div className={"body-mobile" + (statusDownloadMobile || statusLangMobile ? " hidden" : "")} >
                        <a href="">Cuckookoo</a>
                        <a href="">Chainos</a>
                        <button onClick={()=>clickDownloadMobile()}>
                            {t("header.buttonMobile")}
                            <CgChevronDown className="icon-down" />
                        </button>

                        <button onClick={()=>clickLangMobile()}>
                            {t("header.buttonLang")}
                            <CgChevronDown className="icon-down" />
                        </button>
                    </div>

                    <div className={"body-mobile-download" + (statusDownloadMobile ? " show" : "")}>
                        <img onClick={()=>downloadAround()}
                             src={images.appStore}
                             alt="app-store"/>

                        <img onClick={()=>downloadAround()}
                             src={images.googlePlay}
                             alt="google-play"/>

                        <img onClick={()=>downloadAround()}
                             src={images.pc}
                             alt="pc"/>
                    </div>

                    <div className={"body-mobile-lang" + (statusLangMobile ? " show" : "")}>
                        <button onClick={()=>changeLang('en')}>
                            <img src={images.flagEngland} alt="england" />
                            English
                        </button>
                        <button onClick={()=>changeLang('ko')}>
                            <img src={images.flagKorean} alt="korean" />
                            한국어
                        </button>
                        <button onClick={()=>changeLang('vn')}>
                            <img src={images.flagVietnam} alt="vietnam" />
                            Việt Nam
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;