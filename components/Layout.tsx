import Header from "./Header";
import Navbar from "./Navbar";
interface LayoutProps {
  children: React.ReactNode;
  setWalletConnect: (walletConnect: boolean) => void;
  setAddress: (address: string) => void;
}

export default function Layout({
  children,
  setWalletConnect,
  setAddress,
}: LayoutProps) {
  return (
    <div className="h-screen flex flex-1 bg-dark1-500">
      <Navbar />
      <div className="flex flex-col w-100 sm:flex-1 flex-initial sm:flex-1 w-24">
        <Header setWalletConnect={setWalletConnect} setAddress={setAddress} />
        {children}
      </div>
    </div>
  );
}
