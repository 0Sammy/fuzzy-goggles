import Image from "next/image";
//Import Icons
import { BiSolidHomeHeart } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

//Import Needed Images
import faqImg from "../../../public/images/faq1.jpeg";

const OfficeLocation = () => {
  return (
    <main className="px-4 pt-[8rem] sm:px-10 md:px-12 lg:px-14">
      <div className="flex flex-col-reverse gap-y-5 lg:flex-row lg:items-center lg:justify-between lg:gap-y-0">
        <div className="w-full lg:w-[45%]">
          <Image src={faqImg} alt="Office Image" className="rounded-lg" placeholder="blur"/>
        </div>
        <div className="flex w-full flex-col gap-y-5 md:gap-y-10 lg:w-[50%]">
          <div>
            <p className="mb-4 text-sm text-orange sm:text-base md:text-lg lg:text-xl">
              OUR OFFICE
            </p>
            <h1 className="text-2xl font-[620] sm:text-3xl md:text-4xl lg:text-5xl">
              Our <span className="text-orange">Global Office </span>Presence.
            </h1>
            <p className="my-4 text-xs sm:text-sm md:text-base lg:text-lg">
              Connecting Continents: Discover Our Global Office Addresses for
              Unified Courier Solutions.
            </p>
            <div className="special mt-10 flex gap-x-3 overflow-x-auto pb-4">
              <div className="h-80 w-72 min-w-[18rem] rounded-md bg-blue p-8">
                <p className="text-base font-bold text-orange1 sm:text-lg md:text-xl lg:text-2xl">
                  United States
                </p>
                <p className="text-bold mt-2 text-white md:text-lg">
                  Head Office
                </p>
                <div className="mt-6 flex items-center gap-x-3 text-white">
                  <BiSolidHomeHeart size={26} className="text-orange1 shrink-0" />
                  <div>
                    <p className="text-lg font-bold md:text-xl">Address</p>
                    <p className="text-xs md:text-sm mt-1">
                        422 Hazelwood Logistics Center Dr, Hazelwood, MO 63042, USA.
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex items-center gap-x-3 text-white">
                  <MdEmail size={26} className="text-orange1 shrink-0" />
                  <div>
                    <p className="text-lg font-bold md:text-xl">Email</p>
                    <p className="text-xs md:text-sm mt-1">
                      Info@targetexpressholdings.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-80 w-72 min-w-[18rem] rounded-md bg-blue p-2 flex flex-col">
                <p className="text-sm font-bold text-orange1 sm:text-base md:text-lg lg:text-xl">
                   Branch Offices
                </p>
                <div className="h-[49%] border border-white mt-2 rounded-md flex flex-col gap-y-2 p-4">
                    <div className="flex gap-x-1">
                      <BiSolidHomeHeart size={26} className="text-orange1 shrink-0" />
                      <p className="text-sm font-semibold text-orange1 sm:text-base md:text-lg lg:text-xl">Address</p>
                    </div>
                    <p className="text-xs md:text-sm text-white mt-4">Trafford Park, Stretford, Manchester M17, UK</p>
                </div>
                <div className="h-[49%] border border-white mt-2 rounded-md flex flex-col gap-y-2 p-4">
                    <div className="flex gap-x-1">
                      <BiSolidHomeHeart size={26} className="text-orange1 shrink-0" />
                      <p className="text-sm font-semibold text-orange1 sm:text-base md:text-lg lg:text-xl">Address</p>
                    </div>
                    <p className="text-xs md:text-sm text-white mt-4">Stokkamyrveien 22, 4313 Sandnes, Stavanger Norway</p>
                </div>
              </div>
              <div className="h-80 w-72 min-w-[18rem] rounded-md bg-blue p-2 flex flex-col">
                  <p className="text-sm font-bold text-orange1 sm:text-base md:text-lg lg:text-xl">
                    Branch Offices
                  </p>
                  <div className="h-[49%] border border-white mt-2 rounded-md flex flex-col gap-y-2 p-4">
                    <div className="flex gap-x-1">
                      <BiSolidHomeHeart size={26} className="text-orange1 shrink-0" />
                      <p className="text-sm font-semibold text-orange1 sm:text-base md:text-lg lg:text-xl">Address</p>
                    </div>
                    <p className="text-xs md:text-sm text-white mt-4">R. Mário Enzio Pasqualucci, 300 - Chácara Santo Antônio, São Paulo - SP, 04711-090, Brazil</p>
                  </div>
                  <div className="h-[49%] border border-white mt-2 rounded-md flex flex-col gap-y-2 p-4">
                    <div className="flex gap-x-1">
                      <BiSolidHomeHeart size={26} className="text-orange1 shrink-0" />
                      <p className="text-sm font-semibold text-orange1 sm:text-base md:text-lg lg:text-xl">Address</p>
                    </div>
                    <p className="text-xs md:text-sm text-white mt-4">Boxdorfer Str. 13, 90765 Fürth, Germany</p>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OfficeLocation;
