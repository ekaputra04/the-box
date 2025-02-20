import { Button } from "./ui/button";

export default function Consultation() {
  return (
    <>
      <div
        className="relative h-fit overflow-hidden"
        style={{
          backgroundImage: "url(/images/bg-consultation.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="z-10 lg:flex justify-between items-center px-8 md:px-16 lg:px-32 py-24">
          <div className="space-y-6">
            <p className="font-bold text-white text-3xl">
              Free consultation with exceptional quality
            </p>
            <p className="text-white">Just one call away: +84 1102 2703</p>
          </div>
          <Button variant={"outline"} className="mt-8 lg:mt-0">
            Get your consultation
          </Button>
        </div>
      </div>
    </>
  );
}
