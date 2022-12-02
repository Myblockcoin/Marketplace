import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import HambugerOpen from "../assets/svg/hambuger-open.svg";

interface HeaderProps {
  setWalletConnect: (walletConnect: boolean) => void;
  setAddress: (address: string) => void;
}

export default function Header({ setWalletConnect, setAddress }: HeaderProps) {
  return (
    <header className="p-6 bg-dark2-500 overflow-hidden h-20">
      <div className="mx-auto ">
        <div className="text-left flex">
          <button className="mr-4 md:mr-0 rounded-full bg-button justify-left h-10 w-10 focus:outline-none focus:ring-0 focus:ring-inset">
            <Image src={HambugerOpen} alt="hamburger-close" />
          </button>
          <div className="flex-grow flex"></div>
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted,
            }) => {
              // Note: If your app doesn't use authentication, you
              // can remove all 'authenticationStatus' checks
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    "aria-hidden": true,
                    style: {
                      opacity: 0,
                      pointerEvents: "none",
                      userSelect: "none",
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      setWalletConnect(false);
                      return (
                        <button
                          className="inline-block bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-primary-500 hover:border hover:border-primary-500 flex-none h-11 -mt-2"
                          onClick={openConnectModal}
                          type="button"
                        >
                          Connect Wallet
                        </button>
                      );
                    }

                    if (chain.unsupported) {
                      return (
                        <button onClick={openChainModal} type="button">
                          Wrong network
                        </button>
                      );
                    }
                    setAddress(account.address);
                    setWalletConnect(true);

                    return (
                      <div style={{ display: "flex", gap: 12 }}>
                        <button
                          onClick={openChainModal}
                          style={{ display: "flex", alignItems: "center" }}
                          type="button"
                          className="inline-block bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-primary-500 hover:border hover:border-primary-500 flex-none h-11 -mt-2"
                        >
                          {chain.hasIcon && (
                            <div
                              style={{
                                background: chain.iconBackground,
                                width: 12,
                                height: 12,
                                borderRadius: 999,
                                overflow: "hidden",
                                marginRight: 4,
                              }}
                            >
                              {chain.iconUrl && (
                                <img
                                  alt={chain.name ?? "Chain icon"}
                                  src={chain.iconUrl}
                                  style={{ width: 12, height: 12 }}
                                />
                              )}
                            </div>
                          )}
                          {chain.name}
                        </button>

                        <button
                          className="inline-block bg-primary-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-dark1-500 hover:bg-dark2-500 hover:text-primary-500 hover:border hover:border-primary-500 flex-none h-11 -mt-2"
                          onClick={openAccountModal}
                          type="button"
                        >
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button>
                      </div>
                    );
                  })()}
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div className="hidden sm:text-md md:text-md lg:text-lg text-white flex">
          <span className="font-semibold">GTR/BUSD:</span>&nbsp;
          <span>$0.00000000</span>
        </div>
      </div>
    </header>
  );
}
