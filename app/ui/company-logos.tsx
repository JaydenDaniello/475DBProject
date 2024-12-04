import { BeakerIcon } from "@heroicons/react/16/solid";

export default function DefaultLogo() {
    return (
        <div className="flex flex-col items-center justify-center">
            <BeakerIcon className="h-12 w-12" />
            <p className="text-[12px] mt-2">Hungry Spiders</p>
        </div>
    );
}