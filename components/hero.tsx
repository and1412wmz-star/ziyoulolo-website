import Image from "next/image";

type HeroProps = {
  illustrationSrc?: string;
  titleSrc?: string;
  sloganSrc?: string;
};

export function Hero({
  illustrationSrc = "/home/homelolo1.png",
  titleSrc = "/home/ziyou&lolo.png",
  sloganSrc = "/home/draw eat sleep.png",
}: HeroProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={illustrationSrc}
        alt="LoLo illustration"
        width={3508}
        height={2481}
        priority
        className="mt-[100px] h-[22vh] w-auto"
      />
      <Image
        src={titleSrc}
        alt="Ziyou & LoLo"
        width={3508}
        height={2481}
        priority
        className="mt-[-30px] h-[22vh] w-auto"
      />
      <Image
        src={sloganSrc}
        alt="draw. eat. sleep."
        width={3508}
        height={2481}
        priority
        className="mt-[-88px] h-[90px] w-auto translate-x-[0px]"
      />
    </div>
  );
}
