import { useEffect } from 'react';
import Video from '../components/Video';

const VideoPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <Video />;
};

export default VideoPage;
