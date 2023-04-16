import './timeline-vertical.scss';
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const TimelineVertical = () =>{

    const {t} = useTranslation();
    const [listOffsetTop, setListOffsetTop] = useState([]);
    const listClassSection = ["video-introduce","introduce","key-features","airports","character",
        "items","mini-games","advertising","road-map","core-team"];

    const listClass = ["vertical-video","vertical-introduce","vertical-key-features","vertical-airport","vertical-character",
        "vertical-item","vertical-mini-game","vertical-3d","vertical-roadmap","vertical-core-team"];

    const scrollCLick = (className) =>{
        let getClass = document.getElementsByClassName(className)[0];
        window.scrollTo(0, getClass.offsetTop);
    }

    const removeActive = () =>{
        listClass.forEach((element)=>{
            let getClass = document.getElementsByClassName(element)[0];
            if(getClass.classList.contains("active")){
                getClass.classList.remove("active");
            }
        })
    }

    useEffect(() => {
        let listClassElement = [];
        listClassSection.forEach((element)=>{
            listClassElement.push(document.getElementsByClassName(element)[0])
        });
        setListOffsetTop(listClassElement);

        const onScroll = () => {
            listOffsetTop.forEach((element, index)=>{
                let getClassItem = document.getElementsByClassName(listClass[index])[0];
                if(window.pageYOffset + element.offsetHeight/2 > element.offsetTop){
                    if(!getClassItem.classList.contains("active")){
                        removeActive()
                        getClassItem.classList.add("active");
                        return;
                    }
                }
            })
        }

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [document.getElementsByClassName('video-introduce')[0]]);

    return(
        <div className="timeline-vertical">
            <ul>
                <li data-aos="fade-right"
                    data-aos-delay="300"
                    className="vertical-timeline vertical-video"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[0])}>
                    <span>{t("introduceVideo.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="600"
                    className="vertical-timeline vertical-introduce"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[1])}>
                    <span>{t("introduceTitle.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="900"
                    className="vertical-timeline vertical-key-features"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[2])}>
                    <span>{t("keyFeatures.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="1200"
                    className="vertical-timeline vertical-airport"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[3])}>
                    <span>{t("airports.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="1500"
                    className="vertical-timeline vertical-character"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[4])}>
                    <span>{t("character.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="1800"
                    className="vertical-timeline vertical-item"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[5])}>
                    <span>{t("items.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="2100"
                    className="vertical-timeline vertical-mini-game"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[6])}>
                    <span>{t("miniGames.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="2400"
                    className="vertical-timeline vertical-3d"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[7])}>
                    <span>{t("advertising.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="2700"
                    className="vertical-timeline vertical-roadmap"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[8])}>
                    <span>{t("roadMap.titleMain")}</span>
                </li>
                <li data-aos="fade-right"
                    data-aos-delay="3000"
                    className="vertical-timeline vertical-core-team"
                    data-aos-anchor-placement="bottom-bottom"
                    onClick={()=>scrollCLick(listClassSection[9])}>
                    <span>{t("coreTeam.titleMain")}</span>
                </li>
            </ul>
        </div>
    )
}

export default TimelineVertical;