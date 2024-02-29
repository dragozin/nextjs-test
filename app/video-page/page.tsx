import { permanentRedirect, RedirectType } from 'next/navigation'


const VideoPage = () => {
    permanentRedirect('http://s3.mds.yandex.net/trailers/test.mp4', RedirectType.replace)
}

export default VideoPage;