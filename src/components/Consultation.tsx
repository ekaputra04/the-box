import { Button } from "./ui/button";

export default function Consultation() {
  return (
    <>
      <div className="relative h-fit overflow-hidden">
        <div className="z-10 flex justify-between items-center px-32 py-24">
          <div className="space-y-6">
            <p className="font-bold text-white text-3xl">
              Free consultation with exceptional quality
            </p>
            <p className="text-white">Just one call away: +84 1102 2703</p>
          </div>
          <Button variant={"outline"}>Get your consultation</Button>
        </div>
        <img
          src="/images/bg-consultation.png"
          alt="Background"
          className="top-0 right-0 bottom-0 left-0 -z-30 absolute"
        />
      </div>
    </>
  );
}
