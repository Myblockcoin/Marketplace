import Link from "next/link";
import Image from "next/image";
import logo from "../assets/svg/logo.svg";
import Cup from "../assets/svg/cup.svg";
import Market from "../assets/svg/market.svg";
import Wallet from "../assets/svg/wallet.svg";

export default function Navbar() {
  return (
    <div className="h-full side-nav md:flex md:flex-shrink-0 border-right-linear-gradient bg-dark2-500 px-4 overflow-y-auto flex-1 sm:flex-initial overflow-y-auto ">
      <div className="flex flex-col w-56">
        <div className="flex flex-col h-0 flex-1">
          <div className="h-35 px-4 bg-primary p-8 border-b border-gray-600 border-opacity-25">
            <Image src={logo} alt="logo" />
          </div>
          <div className="flex-1 flex flex-col pb-8">
            <nav className="flex-1 px-2 py-4 bg-primary space-y-5 pl-3">
              <Link
                className="border-solid border-2 p-4 my-3 flex items-center rounded-md p-4 text-gray-200 focus:border-[#F4CA64] focus:text-[#F4CA64]"
                href="/"
              >
                <div className="rounded-full bg-button flex items-center justify-center">
                  <Image className="w-5 h-5" src={Wallet} alt="Wallet" />
                </div>
                <div className="ml-4 font-semibold">Portfolio</div>
                <div className="ml-auto pr-3">❯</div>
              </Link>
              <Link
                className="border-solid border-2 p-4 my-3 flex items-center rounded-md p-4 text-gray-200 focus:border-[#F4CA64] focus:text-[#F4CA64]"
                href="/nfts"
              >
                <div className="rounded-full bg-button flex items-center justify-center">
                  <Image className="w-5 h-5" src={Cup} alt="Cup" />
                </div>
                <div className="ml-4 font-semibold">NFTs</div>
                <div className="ml-auto pr-3">❯</div>
              </Link>
              <Link
                className="border-solid border-2 p-4 my-3 flex items-center rounded-md p-4 text-gray-200 focus:border-[#F4CA64] focus:text-[#F4CA64]"
                href="/marketplace"
              >
                <div className="rounded-full bg-button flex items-center justify-center">
                  <svg
                    viewBox="0 0 1200 1200"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 justify-centermr-6 fill-white focus:fill-[4F4CA64]"
                  >
                    <g>
                      <path d="m350 900c-27.613 0-50 22.387-50 50s22.387 50 50 50h500c27.613 0 50-22.387 50-50s-22.387-50-50-50z"></path>
                      <path
                        d="m101.49 37.875c5.5664-22.262 25.562-37.875 48.508-37.875h900c22.945 0 42.945 15.613 48.504 37.875l100 400c0.99609 3.9688 1.4961 8.0391 1.4961 12.129 0 60.691-32.914 111.82-78.578 146.07-6.8164 5.1133-13.969 9.8984-21.422 14.344v439.59c0 82.844-67.156 150-150 150h-700c-82.844 0-150-67.156-150-150v-439.59c-7.4531-4.4453-14.605-9.2305-21.422-14.344-45.664-34.246-78.578-85.375-78.578-146.07 0-4.0898 0.5-8.1602 1.4922-12.129zm848.51 612.12c17.02 0 33.754-1.3516 50-3.9609v403.96c0 27.613-22.387 50-50 50h-700c-27.613 0-50-22.387-50-50v-403.96c16.246 2.6094 32.977 3.9609 50 3.9609 65.957 0 128.65-20.461 175-56.641 46.348 36.18 109.05 56.641 175 56.641s128.65-20.461 175-56.641c46.352 36.18 109.05 56.641 175 56.641zm-760.96-550-88.816 355.27c1.7383 20.625 13.738 42.34 38.355 60.801 26.738 20.055 65.965 33.934 111.42 33.934 62.805 0 111.95-26.172 134.8-57.062 9.4297-12.746 24.344-20.262 40.195-20.262s30.766 7.5156 40.195 20.262c22.855 30.891 72 57.062 134.8 57.062s111.95-26.172 134.8-57.062c9.4297-12.746 24.34-20.262 40.195-20.262s30.766 7.5156 40.195 20.262c22.859 30.891 72 57.062 134.8 57.062 45.453 0 84.684-13.879 111.42-33.934 24.617-18.461 36.617-40.176 38.359-60.801l-88.82-355.27z"
                        fill-rule="evenodd"
                      ></path>
                    </g>
                  </svg>
                </div>
                <div className="ml-4 font-semibold">Marketplace</div>
                <div className="ml-auto pr-3">❯</div>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
