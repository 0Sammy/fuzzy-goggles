import Image from "next/image";
//Import Needed Icons
import { RxCrossCircled } from "react-icons/rx";

type imageProps = {
    imgSrc: string,
    hideImageModal: () => void
}
const ImageComponent = ({imgSrc, hideImageModal}: imageProps) => {

    return ( 
        <main className={`fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[80] top-0 left-0`}>
            <div className="relative">
                <div className="absolute -top-10 right-0 text-red-600">
                    <RxCrossCircled size={24} className="cursor-pointer" onClick={hideImageModal}/>
                </div>
                <Image src={imgSrc} alt="Picture of the package" width={700} height={700} priority />
            </div>
            
        </main>
     );
}
 
export default ImageComponent;