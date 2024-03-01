import { permanentRedirect, RedirectType } from 'next/navigation'


const VideoPage = () => {
    permanentRedirect('https://occ-0-1853-2773.1.nflxso.net/so/soa2/817/05f6317116f033d02737cd79408a9a2c.mp4?v=1', RedirectType.replace)
}

export default VideoPage;