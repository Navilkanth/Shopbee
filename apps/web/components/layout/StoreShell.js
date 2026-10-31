import BeeCursor from '@/components/animations/BeeCursor';
import IntroOverlay from '@/components/animations/IntroOverlay';
import AuthPromptModal from '@/components/animations/AuthPromptModal';
import AnnouncementBar from './AnnouncementBar';
import Footer from './Footer';
import Navbar from './Navbar';

export default function StoreShell({ settings, children }) {
  return (
    <>
      <AnnouncementBar />
      <IntroOverlay />
      <BeeCursor />
      <AuthPromptModal />
      <Navbar storeName={settings.store_name || 'ShopBee'} />
      <main>{children}</main>
      <Footer settings={settings} />
    </>
  );
}
