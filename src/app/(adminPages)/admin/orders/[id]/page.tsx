import getIndividualPackage from "@/app/actions/getIndividualPackage";
import getStatus from "@/app/actions/getStatus"
import { formatDateTime } from "@/lib/dateTimeUtils";
import { formatDate } from "@/lib/dateUtils";

//Import Needed Components
import StatusChange from "@/components/(AdminComponents)/StatusChange";


export const revalidate = 60

const Page = async ({ params }: { params: { id: string } }) => {
    const packageId = params.id

    const thePackageArray = await getIndividualPackage(packageId)
    const packageStatus = await getStatus(packageId)
    console.log({thePackageArray})
    const thePackage = thePackageArray[0];
    //Switch Statement for the status
    function getDisplayStatus(status: string | undefined): string {
        switch (status) {
            case 'PickedUp':
              return 'Picked Up';
              break;
            case 'PackageReceived':
              return 'Package Received';
              break;
            case 'InTransitRoad':
                return 'Package In Transit (Road)';
              break;
            case 'InFlight':
                return 'Package In Flight';
              break;
            case 'InShip':
                return 'Package In Ship';
              break;
            case 'InRail':
                return 'Package In Train';
              break;
            case 'Arrived':
                return 'Package Arrived';
              break;
            case 'OutForDelivery':
                return 'Package Out For Delivery';
              break;
            case 'Delivered':
                return 'Package Delivered';
              break;
        
              default:
                return "No Status Yet";
              break;
        }
    }
    return ( 
        <main>
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto mt-20 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
            <p className="mt-4 text-center">Package Details</p>
            <div className="flex flex-col gap-y-3 mt-10">
                <p className="flex justify-between gap-x-5">Tracking Code <span className="text-orange">{thePackage.trackingNumber}</span></p>
                <p className="flex justify-between gap-x-5">Origin Port <span className="text-orange">{thePackage.originPort}</span></p>
                <p className="flex justify-between gap-x-5">Destination Port <span className="text-orange">{thePackage.destinationPort}</span></p>
                <p className="flex justify-between gap-x-5">Transportation Mode <span className="text-orange">{thePackage.transportationMode}</span></p>
                <p className="flex justify-between gap-x-5">Pieces(Quantity) <span className="text-orange">{thePackage.pieces}</span></p>
                <p className="flex justify-between gap-x-5">Weight (KG) <span className="text-orange">{thePackage.weight} KG</span></p>
                <p className="flex justify-between gap-x-5">Length (CM)<span className="text-orange">{thePackage.length} CM</span></p>
                <p className="flex justify-between gap-x-5">Width (CM)<span className="text-orange">{thePackage.width} CM</span></p>
                <p className="flex justify-between gap-x-5">Height (CM)<span className="text-orange">{thePackage.height} CM</span></p>
                <p className="flex justify-between gap-x-5">Delivery Required Date and Time<span className="text-orange text-right">{formatDateTime(thePackage.deliveryRequiredDate)}</span></p>
                <p className="flex justify-between gap-x-5">Estimated Delivery Date and Time<span className="text-orange text-right">{formatDateTime(thePackage.estimatedDeliveryDate)}</span></p>
                <p className="flex justify-between gap-x-5">Desired Created Date and Time<span className="text-orange text-right">{formatDateTime(thePackage.dateCreated)}</span></p>
                <p className="flex justify-between gap-x-5">Real Created Date<span className="text-orange text-right">{formatDate(thePackage.realDateCreated)}</span></p>
                <div className="border-b border-black my-4"></div>
                <p className="text-blue">Statuses</p>
                <p className="text-xs lg:text-sm">This shows all your status from the LATEST to the OLDEST</p>
                <div>
                    {packageStatus && packageStatus.map((status) => (
                    <div key={status.id} className="mt-4 flex flex-col gap-y-3 border-b border-gray-300 text-right py-2">
                      <p className="flex justify-between gap-x-5">Status: <span className="text-orange">{getDisplayStatus(status.status)}</span></p>
                      <p className="flex justify-between gap-x-5">Timestamp: <span className="text-orange">{formatDateTime(status.timestamp)}</span></p>
                      <p className="flex justify-between gap-x-5">Location: <span className="text-orange">{status.location}</span> </p>
                  </div>
                ))}
                  {!packageStatus && <p>There is no status</p>}
                </div>
                <p className="text-xs sm:text-sm md:text-base font-bold mt-4">Update Package Status</p>
                <StatusChange thePackageID={packageId}/>
            </div>
        </div>
    </main>
 );
}
 
export default Page;


