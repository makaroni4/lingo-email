import { useAppStore } from '../store';
import { XMarkIcon } from '@heroicons/react/24/solid';
import Markdownify from './Markdownify';

export default function WelcomePopup() {
  const {
    welcomeBannerCopy,
    setShowWelcomePopup
  } = useAppStore();

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-30">
      <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-40 opacity-50"></div>
      <div className="container">
        <div className="p-6 bg-amber-100 rounded-md relative opacity-100 z-50">
          <XMarkIcon
            onClick={() => { setShowWelcomePopup(false) }}
            className="w-6 absolute right-2 top-2 cursor-pointer hover:opacity-70" />
          <Markdownify>
            { welcomeBannerCopy }
          </Markdownify>
        </div>
      </div>
    </div>
  )
}
