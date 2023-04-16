import './video-introduce.scss';

const VideoIntroduce = () => {
  const srcDefault =
    '/video/video.mp4';
  const srcError =
    '/video/video.mp4';

  return (
    <div className='video-introduce' id='video-introduce'>
      <video
        autoPlay
        muted
        loop
        className='video'
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = srcError;
        }}
      >
        <source src={srcDefault} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoIntroduce;
