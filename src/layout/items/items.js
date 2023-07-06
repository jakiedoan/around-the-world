import './items.scss';
import { useTranslation } from 'react-i18next';

const Items = ({ windowDimensions }) => {
  const { t } = useTranslation();
  const video = process.env.PUBLIC_URL + '/video/items.mp4';
  return (
    <div className='items'>
      <span data-aos='fade-up' className='title-main'>
        {t('items.titleMain')}
      </span>
      {windowDimensions.width > 767.5 ? (
        <video
          data-aos='fade-up'
          data-aos-delay='600'
          autoPlay
          muted
          loop
          className='video hidden-mobile'
        >
          <source src={video} type='video/mp4' />
        </video>
      ) : (
        <video
          autoPlay
          muted
          loop
          data-aos='fade-up'
          data-aos-delay='600'
          className='video hidden-pc'
        >
          <source src={video} type='video/mp4' />
        </video>
      )}
    </div>
  );
};

export default Items;
