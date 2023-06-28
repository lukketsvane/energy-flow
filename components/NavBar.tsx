import Image from 'next/image';
import Link from 'next/link';

export default function TopNav() {
  return (
    <nav className="flex flex-row w-full items-start space-y-2.5">
      <div className="flex justify-between items-start px-6 py-4 bg-white shadow-md w-full">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" width={52} height={21} alt="logo" />
          <h1 className="text-lg font-bold">FlowViz 🧙</h1>
          <Link href="/">
            <Image src="/back-button.svg" width={7.86} height={13.24} alt="back button" />
          </Link>
          <Link href="/docs">
            <span className="text-base font-medium text-grey-600 hover:text-blue-800">Docs</span>
          </Link>
          <Link href="/help">
            <span className="text-base font-medium text-grey-600 hover:text-blue-800">Help</span>
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="#">
            <Image src="/code-button.svg" width={18.12} height={15.34} alt="code button" />
          </Link>
          <Link href="#">
            <Image src="/save-button.svg" width={16.25} height={16.25} alt="save button" />
          </Link>
          <Link href="#">
            <Image src="/settings-button.svg" width={20.13} height={20.13} alt="settings button" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
