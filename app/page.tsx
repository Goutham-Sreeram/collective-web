"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import Image from "next/image"
import { TextReveal } from "@/components/ui/text-reveal"
import { TextAnimate } from "@/components/ui/text-animate"


export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-gray-100 relative flex items-center justify-center">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Overlay GIF on main content */}
      <div className="absolute inset-0 z-20 flex items-center justify-end pr-6 md:pr-10 pointer-events-none">
        <Image
          src="/main.gif"
          alt="Animated preview"
          width={600}
          height={600}
          priority
          unoptimized
          className="w-[60vw] h-auto animate-fade-in"
        />
      </div>


      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <h1
          className="text-9xl md:text-9xl mb-6"
          style={{ fontFamily: 'Cal Sans, sans-serif', lineHeight: '0.8' }}
        >
          <span className="text-blue-600">
            <TextAnimate as="span" animation="blurInUp" by="character" once>
              pull in the
            </TextAnimate>
          </span>
          <br />
          <span className="text-blue-600">
            <TextAnimate as="span" animation="blurInUp" by="character" once>
              world
            </TextAnimate>
          </span>{' '}
          <span className="text-gray-600">
            <TextAnimate as="span" animation="blurInUp" by="character" once>
              as you
            </TextAnimate>
          </span>
          <br />
          <span className="text-gray-600">
            <TextAnimate as="span" animation="blurInUp" by="character" once>
              work.
            </TextAnimate>
          </span>
        </h1>


        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
          Keep your references close and your ideas closer
        </p>

        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200 border-2 border-blue-700" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
          See Features and wishlist
        </button>
      </div>
    </main>

    {/* Second Section with dark background and centered GIF */}

    <section className="min-h-screen flex flex-col items-center justify-center pt-50" style={{ backgroundColor: '#222222' }}>
      
      <div>
        <Image
          src="/Main-UI.gif"
          alt="Main UI preview"
          width={1200}
          height={1200}
          priority
          unoptimized
          className="w-[50vw] max-w-[1000px] h-auto" 
        />
      </div>

      <div className="absolute right-6 mt-[-220]">
        <Image
          src="/dock.png"
          alt="Dock Icon"
          width={250}
          height={250}
          priority
          unoptimized/>
      </div>

      <div className="mt-[-100]" style={{ fontFamily: 'Cal Sans, sans-serif'}}>
        <span><TextReveal className="text-8xl md:text-8xl text-center text-white" >
          Find Your Items
        </TextReveal></span>
        <span><TextReveal className="text-8xl md:text-8xl text-center text-white mt-[-300]" >
          With Ease
        </TextReveal></span>
      </div>
    </section>


    <section>
      <div className="min-h-screen bg-gray-100 p-8" style={{ fontFamily: 'Cal Sans, sans-serif'}}>
      <div className="max-w-7xl mt-30 mx-auto grid grid-cols-6 grid-rows-6 gap-4 h-[800px]">
        
        {/* Switch Workspaces - Top Left */}
        <div className="col-span-2 row-span-3 bg-gradient-to-br from-purple-300 to-purple-400 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
          <div>
            <h2 className="text-3xl font-bold text-purple-900 mb-3"> <span>Switch<br />Workspaces</span></h2>
            <p className="text-purple-800"><span>Easily switch <br /> between different <br /> workspaces or <br />  sessions.</span></p>
          </div>
          <div className="absolute bottom-4 right-4">
           <Image
            src="/Scene-1.gif"
            alt="Sample Image 1"
            width={800}
            height={800}>
           </Image>
          </div>
        </div>

        {/* Image Manipulation - Center Large */}
        <div className="col-span-2 row-span-7 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 flex flex-col">
         
        </div>

        {/* Control Opacity - Top Right */}
        <div className="col-span-2 row-span-2 bg-white rounded-3xl p-8 flex items-end justify-end">
          
        </div>

        {/* Tunes to work to - Bottom Left */}
        <div className="col-span-2 row-span-5 bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 flex items-center justify-between">
          
        </div>

        {/* Lock & Play - Bottom Right */}
        <div className="col-span-2 row-span-4 bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-8 flex flex-col">
          
        </div>

      </div>
    </div>
    </section>

    <section>

      <div className="mt-[-70] relative z-10 " style={{ fontFamily: 'Cal Sans, sans-serif'}}>
        <span><TextReveal className="text-8xl md:text-8xl text-center text-black" >
          Made For You,
        </TextReveal></span>
        <span><TextReveal className="text-8xl md:text-8xl text-center text-black mt-[-300]" >
          Made Around You.
        </TextReveal></span>

        <div className="flex items-center justify-center relative z-0 mt-[-190]">
        <Image
          src="/Group 5.png"
          alt="Devices preview"
          width={800}
          height={800}
          priority
          unoptimized>

        </Image>
        </div>

        <div className=" relative z-0 flex items-center justify-center mt-[-45] pb-10">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white text-3xl px-9 py-5 rounded-3xl border-2 border-blue-700"
            style={{ fontFamily: 'Cal Sans, sans-serif' }}
            onClick={() =>
              window.open("https://tally.so/r/m6b0aO", "_blank")
            }
          >
          Join Wishlist Now
          </button>
        </div>
      </div>
    </section>
    </>
  )
}