import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header(){
  return (
    <div className="container mx-auto py-2">
    <div className='flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Blockcoin Marketplace</h1>
      <div className='flex justify-center'>
        <ConnectButton />
      </div>

    </div>
    </div>
  );
};