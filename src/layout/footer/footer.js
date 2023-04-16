import './footer.scss';
import { Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
const Footer = ({ windowDimensions }) => {
  const { t } = useTranslation();

  const [valueTextarea, setValueTextarea] = useState('');
  const lengthTextarea = 350;

  const changeValueTextarea = (e) => {
    setValueTextarea(e.target.value);
  };

  const images = {
    chainos: process.env.PUBLIC_URL + '/images/footer/chainos.png',
    cuckookoo: process.env.PUBLIC_URL + '/images/footer/cuckookoo.png',
    bgFooter: process.env.PUBLIC_URL + '/images/footer/bg-footer.png',
    bgForm: process.env.PUBLIC_URL + '/images/footer/bg-form.png',
    buttonForm: process.env.PUBLIC_URL + '/images/footer/button-form.png',
    MIconFooter: process.env.PUBLIC_URL + '/images/footer/m-footer.png',
    RIconFooter: process.env.PUBLIC_URL + '/images/footer/r-footer.png',
    PIconFooter: process.env.PUBLIC_URL + '/images/footer/p-footer.png',
    BIconFooter: process.env.PUBLIC_URL + '/images/footer/b-footer.png',
    YIconFooter: process.env.PUBLIC_URL + '/images/footer/y-footer.png',
    CIconFooter: process.env.PUBLIC_URL + '/images/footer/c-footer.png',
    FIconFooter: process.env.PUBLIC_URL + '/images/footer/f-footer.png',
    FFIconFooter: process.env.PUBLIC_URL + '/images/footer/ff-footer.png',
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert('email đã được gửi');
  };

  return (
    <div className='footer'>
      <Container>
        <div className='box-logo'>
          <div className='logo-cuckookoo'>
            <a href=''>
              <img src={images.cuckookoo} alt='icon-cuckookoo' />
            </a>
          </div>
          <div className='logo-chainos'>
            <a href=''>
              <img src={images.chainos} alt='icon-chainos' />
            </a>
          </div>
        </div>
      </Container>
      <div className='contract-form-footer'>
        <form
          className='contract-form'
          data-aos-anchor-placement='bottom-bottom'
          style={{ backgroundImage: `url(${images.bgForm})` }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <span className='title'>{t('footer.form.title')}</span>

          <div className='form-input first'>
            <span className='title-input'>
              {t('footer.form.name')}
              <span>*</span>:
            </span>
            <input
              {...register('name', {
                required: true,
              })}
            />
            {errors?.name?.type === 'required' && (
              <p className='text-error'>{t('footer.validate.required')}</p>
            )}
          </div>

          <div className='form-input'>
            <span className='title-input'>
              {t('footer.form.email')}
              <span>*</span>:
            </span>
            <input
              {...register('email', {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                },
              })}
            />
            {errors?.email?.type === 'required' && (
              <p className='text-error'>{t('footer.validate.required')}</p>
            )}
            {errors?.email?.type === 'pattern' && (
              <p className='text-error'>{t('footer.validate.email')}</p>
            )}
          </div>

          <div className='form-input'>
            <span className='title-input'>
              {t('footer.form.message')}
              <span>*</span>:
            </span>

            <textarea
              maxLength={lengthTextarea}
              {...register('message', {
                onChange: (e) => changeValueTextarea(e),
                required: true,
                maxLength: 350,
              })}
            />
            {errors?.message?.type === 'required' && (
              <p className='text-error'>{t('footer.validate.required')}</p>
            )}
            {errors?.message?.type === 'maxLength' ||
            valueTextarea.length > lengthTextarea ? (
              <p className='text-error'>{t('footer.validate.maxLength355')}</p>
            ) : null}

            <span className='count-text'>
              {valueTextarea.length}/{lengthTextarea}
            </span>
          </div>

          <button
            type='submit'
            className='button-submit'
            style={{ backgroundImage: `url(${images.buttonForm})` }}
          >
            {t('footer.form.button')}
          </button>
        </form>
      </div>

      <div
        className='contract'
        style={{ backgroundImage: `url(${images.bgFooter})` }}
      >
        <div className='contract-box'>
          <div className='google-map'>
            <iframe
              className='map'
              src=''
              allowFullScreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
            {windowDimensions.width > 767.5 ? (
              <div className='title-address-box'>
                <span className='title-address'>
                  {t('footer.titleAddress')}
                </span>
                <span className='title'>{t('footer.address')}</span>
              </div>
            ) : (
              <div className='title-address-box'>
                <span className='title-address-mobile'>
                  {t('footer.titleAddress')}: {t('footer.address')}
                </span>
              </div>
            )}
          </div>

          <div className='contract-title-box'>
            <span className='title-footer title-main-footer'>
              {t('footer.contactUs')}
            </span>
            <span className='title-footer email-footer'>
              {t('footer.email')}: email@domain.com
            </span>
            <span className='title-footer email-phone'>
              {t('footer.phoneNumber')}: 012 345 6789
            </span>
          </div>
        </div>
      </div>

      <ul className='circles'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Footer;
