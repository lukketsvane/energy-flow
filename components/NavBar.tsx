import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import HelpDropdown from './HelpDropdown';

export default function TopNav() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleLinkClick = (path) => {
    if (router.pathname !== path) {
      router.push(path);
    }
    setIsOpen(false);
  }

  const toggleModal = () => setIsOpen(!isOpen);

  return (
    <nav className="flex flex-row w-full items-center space-y-2.5 px-6 py-4 bg-white shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" width={52} height={21} alt="logo" />
          <h1 className="text-lg font-bold">FlowViz 🧙</h1>
          <div className="hidden md:flex items-center space-x-4 ml-4">
            <Link href="/">
              <Image src="/back-button.svg" width={20} height={20} alt="back button" />
            </Link>
            <Link href="/docs">
              <span className="text-base font-medium text-grey-600 hover:text-blue-800">Docs</span>
            </Link>
            <Link href="/help">
              <span className="text-base font-medium text-grey-600 hover:text-blue-800">Help centre</span>
            </Link>
            <Link href="/faq">
              <span className="text-base font-medium text-grey-600 hover:text-blue-800">FAQ</span>
            </Link>
          </div>
        </div>
        <div className="flex items-center space-x-4 md:hidden">
          <button onClick={toggleModal}>
            <Image src={isOpen ? "/close-icon.png" : "/hamburger_icon.png"} width={24} height={24} alt="menu" />
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <Link href="#">
            <Image src="/code-button.svg" width={18.12} height={15.34} alt="code button" />
          </Link>
          <Link href="#">
            <Image src="/save-button.svg" width={16.25} height={16.25} alt="save button" />
          </Link>
          <Link href="#">
            <Image src="/settings-button.svg" width={20.13} height={20.13} alt="settings button" />
          </Link>
          <div className="hidden md:block">
            <HelpDropdown />
          </div>
        </div>
        {isOpen && (
          <div className="fixed inset-0 flex items-start justify-center z-50 pt-20">
            <div className="bg-white p-5 w-full h-full overflow-auto">
              <div className="space-y-4 mt-5 text-2xl flex flex-col">
                <button onClick={() => handleLinkClick("/docs")}>
                  <span className="font-medium text-grey-600 hover:text-blue-800 block">Docs</span>
                </button>
                <button onClick={() => handleLinkClick("/help")}>
                  <span className="font-medium text-grey-600 hover:text-blue-800 block">Help centre</span>
                </button>
                <button onClick={() => handleLinkClick("/faq")}>
                  <span className="font-medium text-grey-600 hover:text-blue-800 block">FAQ</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
