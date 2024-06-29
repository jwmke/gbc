import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="relative w-full">
        <div className="w-full">
          <Image 
            src="/img/athens.jpg" 
            alt="The School of Athens" 
            width={1920} 
            height={1080} 
            className="w-full h-[100vh] object-cover"
          />
        </div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
          <h1 className="px-4 text-6xl md:text-9xl text-terracota font-chal text-center">
            Gundo Book Club
          </h1>
          <p className="px-4 text-2xl md:text-3xl text-terracota font-cinzel text-center mt-1">
            Saturday, 5:00 PM
          </p>
          <p className="px-4 text-md md:text-3xl text-terracota font-cinzel text-center">
            Blue Butterfly Coffee
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-marble to-clay w-full text-terracota border-b-8 border-double border-terracota">
        <div className="text-center my-40 mx-8">
          <div className="font-chal text-5xl">
            Currently Reading
          </div>
          <div className="font-bold font-cinzel text-xl">
            Narcissus and Goldmund
          </div>
          <div className="font-cin text-sm">
            Hermann Hesse
          </div>
          <div className="w-1/2 md:w-1/6 mx-auto mt-4 border-4 rounded-sm border-terracota">
            <Image src="/img/ng.jpg" alt="Narcissus and Goldmund" width={600} height={1000} className="w-full" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-marble to-clay w-full text-terracota border-b-8 border-double border-terracota">
        <div className="text-center my-40 mx-8">
          <div className="font-chal text-5xl">
            The Library
          </div>
          <div className="font-cin text-md mb-8">
            ( Past Reads )
          </div>
          <div className="font-cinzel text-xl">
            Die With Zero
          </div>
          <div className="font-cin text-sm">
            Bill Perkins
          </div>
          <div className="w-1/2 md:w-1/6 mx-auto mt-4 border-4 rounded-sm border-terracota">
            <Image src="/img/dw0.jpg" alt="Die With Zero" width={600} height={1000} className="w-full" />
          </div>
          <div className="font-cinzel text-xl mt-8">
            Selective Breeding and the Birth of Philosophy
          </div>
          <div className="font-cin text-sm">
            Costin Alamariu
          </div>
          <div className="w-1/2 md:w-1/6 mx-auto mt-4 border-4 rounded-sm border-terracota">
            <Image src="/img/sb.jpg" alt="Selective Breeding and the Birth of Philosophy" width={600} height={1000} className="w-full" />
          </div>
          <div className="font-cinzel text-xl mt-8">
            Hamilton vs. Wall Street
          </div>
          <div className="font-cin text-sm">
            Nancy Spannaus
          </div>
          <div className="w-1/2 md:w-1/6 mx-auto mt-4 border-4 rounded-sm border-terracota">
            <Image src="/img/hws.jpg" alt="Hamilton vs. Wall Street" width={600} height={1000} className="w-full" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-marble to-clay w-full text-terracota border-b-8 border-double border-terracota">
          <div className="text-center my-40 mx-8">
            <div className="font-chal text-5xl">
              The Forum
            </div>
            <div className="font-bold font-cinzel text-xl underline text-salmon">
              <a href="https://twitter.com/search?q=%23gundobookclub" target="_blank" rel="noreferrer">
                #gundobookclub
              </a>
            </div>
          </div>
        </div>
    </main>
  );
}