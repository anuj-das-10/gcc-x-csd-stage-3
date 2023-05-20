import Head from 'next/head'
import Image from 'next/image'
import { EventTimeLine } from '@/components'
import { LatestBlogs } from '@/components'
import mongoose from 'mongoose'
import UpcomingEvents from '@/model/UpcomingEvents'
import { CTA_Resources, CTA_Section, FeaturedSection, Hero, ContactForm, MeetDevelopers, FAQSection } from '@/sections'
import Cookies from 'js-cookie'



export default function Home({ upcoming_events }) {

  return (
    <>
      <Head>
        <title>GCC x CSD</title>
        <meta name="description" content="Official website of the Department of Computer Science - Gurucharan University, Silchar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='main h-auto bg-gradient-to-br from-black via-indigo-950 to-sky-950'>
      {/* <SubHeader text={`< WELCOME TO GCC-X-CSD />`} /> */}
      {/* <ImageSlider imagesArray={homeSliderImages} /> */}

      <div className='w-full flex flex-col'>
      <Image unoptimized 
            src='/GClogo.png'
            alt='logo'
            width={120}
            height={120}
            className="self-center"
      />
      </div>
     
      <Hero />
      <CTA_Resources />
      <FeaturedSection />
      <CTA_Section />
      
         
         
{/* Upcoming Events & Latest Blogs Section - (Dynamic) */}

          <div className='flex justify-around flex-wrap bg-gray-950/70 mt-28 px-16'>
              <div className=' max-w-xl w-full py-12 mb-20'>
                <h1 className='text-5xl font-extrabold text-white mb-4 mt-8'>Upcoming Events.</h1>
                <p className='text-gray-500 text-lg font-medium mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odit illum sequi quasi iure nobis?</p>
                <EventTimeLine UpcomingEvents_DB={upcoming_events} /> 
              </div>

              <div className=' max-w-xl w-full py-12 mb-20'>
                <h1 className='text-5xl font-extrabold text-white mb-4 mt-8'>Latest Blogs.</h1>
                <p className='text-gray-500 text-lg font-medium mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ratione obcaecati deleniti rem debitis maxime.</p>
                <LatestBlogs />
              </div>
          </div>
        <FAQSection />
        <MeetDevelopers />
{/* -------------------------------------------------- */}

        <ContactForm />
         
      </div>
    </>
  )
}


export async function getServerSideProps(ctx) {

  
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_DB_URI);
  }
  let upcoming_events = await UpcomingEvents.find();

  // These will be passed to the page component as props
  return {
    props: {
      upcoming_events: JSON.parse(JSON.stringify(upcoming_events)),
    }, 
  };
}