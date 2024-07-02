"use client"
import Image from "next/image";
import Countdown from 'react-countdown';
import Script from 'next/script';

export default function Home() {

  const Book = ({title, author, image}) => {
    return (
      <div className="columns-1 mb-8">
        <div className="font-cinzel text-xl">
          {title}
        </div>
        <div className="font-cin text-sm">
          {author}
        </div>
        <div className="w-1/2 md:w-40 mx-auto mt-4 border-4 rounded-sm border-terracota">
          <Image src={image} alt={title} width={600} height={1000} className="w-full" />
        </div>
      </div>
    )
  }

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Script id="luma-checkout" src="https://embed.lu.ma/checkout-button.js" async />
      <div className="relative w-full border-terracota border-b-8">
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
          <h1 className="px-4 text-6xl font-bold tracking-wide md:font-light md:text-9xl text-terracota font-chal text-center">
            Gundo Book Club
          </h1>
          <p className="px-4 text-2xl md:text-3xl text-terracota font-cinzel text-center mt-1">
            Saturday, 5:00 PM
          </p>
          <p className="px-4 text-md md:text-3xl text-terracota font-cinzel text-center">
            Blue Butterfly Coffee
          </p>
          <p className="px-4 text-md md:text-xl text-terracota font-cin text-center bottom-0">
            Next Meeting - <Countdown date={new Date('2024-07-13T17:00:00')} renderer={
              ({days, hours, minutes, seconds, completed}) => {
                let daysString = "days";
                if (days == 0) {
                  daysString = "day";
                }
                if (completed) {
                  return <span>Today</span>
                } else {
                  return <span>{days > 0 ? `${days+1} Days`: "Tomorrow"}</span>
                }
              }
            
            } >
              <span/>
            </Countdown>
          </p>
        </div>
      </div>
      <div className="bg-gradient-to-br from-marble to-clay w-full text-terracota border-b-8 border-double border-terracota">
        <div className="text-center my-40 mx-8">
          <div className="font-chal text-5xl">
            Currently Reading
          </div>
          <div className="font-cin text-md mb-8">
            06/22 - 07/13
          </div>
          <div className="font-bold font-cinzel text-xl">
            Narcissus and Goldmund
          </div>
          <div className="font-cin text-sm">
            Hermann Hesse
          </div>
          <div className="w-1/2 md:w-40 mx-auto mt-4 border-4 rounded-sm border-terracota">
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
            ( Previous Selections )
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:mx-[15%]">
            <Book title="Die With Zero" author="Bill Perkins" image="/img/dw0.jpg" />
            <Book title="Selective Breeding and the Birth of Philosophy" author="Costin Alamariu" image="/img/sb.jpg" />
            <Book title="Hamilton vs. Wall Street" author="Nancy Spannaus" image="/img/hws.jpg" />
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-clay to-clay w-full text-terracota border-b-8 border-double border-terracota">
        <div className="text-center my-40 mx-8">
          <div className="font-chal text-5xl">
            The Forum
          </div>
          <div className="font-bold font-cinzel text-xl underline text-salmon hover:text-terracota">
            <a href="https://twitter.com/search?q=%23gundobookclub" target="_blank" rel="noreferrer" className="bg-clay pb-10 md:pb-0 md:px-[35%] px-[calc(40%-5rem)] md:pt-4 z-20 relative">
              #gundobookclub
            </a>
            <div className="relative md:-top-10">
              <iframe src="https://widget.tagembed.com/154655?view" className="w-3/4 md:w-1/2 mx-auto h-[50rem] z-10 iframe1" frameBorder="0" allowtransparency="true"></iframe>
            </div>
            <div className="bg-clay px-[calc(40%-5rem)] pt-6 z-20 relative -top-[.75rem] md:-top-[3.5rem]"/>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-marble to-clay w-full text-terracota border-b-8 border-double border-terracota">
        <div className="text-center my-40 mx-8">
          <div className="font-chal text-5xl">
            Contact
          </div>
          <div className="font-bold font-cinzel text-xl">
            {/* To join, message <span className="underline text-salmon inline hover:text-terracota"><a href="https://twitter.com/kaeladair" target="_blank" rel="noreferrer">@kaeladair</a></span> on X, or RSVP below. */}
            To join, message <span className="underline text-salmon inline hover:text-terracota">@kaeladair</span> on X
          </div>
          {/* <button
            class="luma-checkout--button"
            type="button"
            data-luma-action="checkout"
            data-luma-event-id="TODO-eventID"
            className="bg-terracota text-marble font-bold py-2 px-4 rounded mt-4"
          >
            Register for Event
          </button> */}
        </div>
      </div>
    </main>
  );
}