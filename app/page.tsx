"use client"

import React from "react"
import { isMobile } from "react-device-detect"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import Image from "next/image"
import { TextReveal } from "@/components/ui/text-reveal"
import { TextAnimate } from "@/components/ui/text-animate"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  return (
    <>
    <main className="min-h-screen bg-gray-100 relative flex items-center justify-center">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "mask-[radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />

      {/* Overlay GIF on main content */}
      {mounted && !isMobile ? <div className="absolute inset-0 z-20 flex items-center justify-end pr-6 md:pr-10 pointer-events-none">
        <Image
          src="/main.gif"
          alt="Animated preview"
          width={900}
          height={900}
          priority
          unoptimized
          className="animate-fade-in"
        />
      </div> : (
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-50">
            <Image
                src="/main.gif"
                alt="Animated preview"
                width={600}
                height={600}
                priority
                unoptimized
                className="animate-fade-in"
            />
        </div>
      )}


      {/* Main Content */}
      {mounted && !isMobile ? <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
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
      </div> : (
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Main Heading */}
          <h1
            className="text-6xl mb-6"
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
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
            Keep your references close and your ideas closer
          </p>
          {/* CTA Button */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl transition-colors duration-200 border-2 border-blue-700" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
            See Features and wishlist
          </button>
        </div>
      )}
    </main>

    {/* Second Section with dark background and centered GIF */}
    {mounted && !isMobile ? (
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
    </section>) : (
      <section className="min-h-screen flex flex-col items-center justify-center pt-20 px-4" style={{ backgroundColor: '#222222' }}>
        <div>
          <Image
            src="/Main-UI.gif"
            alt="Main UI preview"
            width={600}
            height={600}
            priority
            unoptimized
            className="w-[80vw] max-w-[500px] h-auto" 
          />
        </div>
  
        

        <div style={{ fontFamily: 'Cal Sans, sans-serif'}}>
          <span><TextReveal className="text-5xl text-center text-white" >
            Find Your Items
          </TextReveal></span>
          <span><TextReveal className="text-5xl text-center text-white mt-[-300]" >
            With Ease
          </TextReveal></span>
        </div>
      </section>
    )}


    {mounted && !isMobile ? (
      <section>
      <div className="min-h-screen bg-gray-100 p-8" style={{ fontFamily: 'Cal Sans, sans-serif'}}>
      <div className="max-w-7xl mt-30 mx-auto grid grid-cols-6 grid-rows-6 gap-4 h-[800px]">
        
        {/* Switch Workspaces - Top Left */}
        <div className="col-span-2 row-span-3 bg-linear-to-br from-purple-300 to-purple-400 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
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
        <div className="col-span-2 row-span-7 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-8 flex flex-col items-center justify-between">
          <div className="text-center">
            <h2 className="text-5xl font-bold text-yellow-900 mb-2">Image<br />Manipulation</h2>
            <p className="text-yellow-800 text-lg">Do flips, inverts, mirrors and<br />rotate on added files to<br />compliment your workflow</p>
          </div>
          <div>
            <Image
            src="/Scene-1 (4).gif"
            alt="Sample Image 1"
            width={900}
            height={900}>
          </Image>
          </div>
        </div>

        {/* Control Opacity - Top Right */}
        <div className="col-span-2 row-span-2 bg-white rounded-3xl p-8 flex items-start justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Control<br />Opacity</h2>
            <p className="text-gray-700">Adjust transparency<br />of layers and<br />objects with ease</p>
          </div>
          <div>
            <Image
            src="/Scene-1 (4).gif"
            alt="Sample Image 1"
            width={800}
            height={800}>
          </Image>
          </div>
        </div>

        {/* Lock & Play - Bottom Right */}
        <div className="col-span-2 row-span-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h2 className="text-4xl font-bold text-orange-900">Lock &<br />Play</h2>
            <p className="text-orange-800 text-right">Lock your window to do<br />your work without it<br />getting in your way</p>
          </div>
          <div>
            <Image
            src="/Frame-2087326069.gif"
            alt="Sample Image 1"
            width={400}
            height={400}>
          </Image>
          </div>
        </div>

        {/* Tunes to work to - Bottom Left */}
<div className="col-span-2 row-span-5 bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-8 relative overflow-hidden flex items-center">
  <div className="absolute right-30 top-1/2 -translate-y-1/2 z-0">
    <Image
      src="/Scene-1 (1).gif"
      alt="Sample Image 1"
      width={400}
      height={400}
    />
  </div>
  
  <div className="relative z-10 ml-auto mr-8 flex flex-col gap-2">
    <h2 className="text-4xl font-bold text-lime-900 leading-tight">
      Tunes to<br />work to
    </h2>
    <p className="text-lime-800 text-base">
      Play your favourite<br />tracks and videos<br />within collective
    </p>
  </div>
</div>

      </div>
    </div>
    </section>) : (
      <section>
        <div className="min-h-screen bg-gray-100 p-4" style={{ fontFamily: 'Cal Sans, sans-serif'}}>
          <div className="max-w-md mt-10 mx-auto flex flex-col gap-4">
            
            {/* Switch Workspaces */}
            <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-3xl p-6 flex flex-col justify-between overflow-hidden relative min-h-[350px]">
              <div>
                <h2 className="text-2xl font-bold text-purple-900 mb-2">Switch Workspaces</h2>
                <p className="text-purple-800">Easily switch between different workspaces or sessions.</p>
              </div>
              <div className="self-center mt-4">
                <Image
                  src="/Scene-1.gif"
                  alt="Switch Workspaces"
                  width={300}
                  height={300}
                />
              </div>
            </div>
    
            {/* Image Manipulation */}
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-6 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold text-yellow-900 mb-2">Image Manipulation</h2>
              <p className="text-yellow-800">Do flips, inverts, mirrors and rotate on added files to compliment your workflow</p>
              <div className="mt-4">
                <Image
                  src="/Scene-1 (4).gif"
                  alt="Image Manipulation"
                  width={300}
                  height={300}
                />
              </div>
            </div>
    
            {/* Control Opacity */}
            <div className="bg-white rounded-3xl p-6 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Control Opacity</h2>
              <p className="text-gray-700">Adjust transparency of layers and objects with ease</p>
              <div className="self-center mt-4">
                <Image
                  src="/Scene-1 (4).gif"
                  alt="Control Opacity"
                  width={300}
                  height={300}
                />
              </div>
            </div>
    
            {/* Lock & Play */}
            <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-6 flex flex-col">
              <h2 className="text-3xl font-bold text-orange-900">Lock & Play</h2>
              <p className="text-orange-800">Lock your window to do your work without it getting in your way</p>
              <div className="self-center mt-4">
                <Image
                  src="/Frame-2087326069.gif"
                  alt="Lock & Play"
                  width={300}
                  height={300}
                />
              </div>
            </div>
    
            {/* Tunes to work to */}
            <div className="bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-6 flex flex-col">
              <h2 className="text-3xl font-bold text-lime-900 leading-tight">Tunes to work to</h2>
              <p className="text-lime-800">Play your favourite tracks and videos within collective</p>
              <div className="self-center mt-4">
                <Image
                  src="/Scene-1 (1).gif"
                  alt="Tunes to work to"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

    {mounted && !isMobile ? (
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
    </section>) : (
      <section>
        <div className="relative z-10 " style={{ fontFamily: 'Cal Sans, sans-serif'}}>
          <span><TextReveal className="text-5xl text-center text-black" >
            Made For You,
          </TextReveal></span>
          <span><TextReveal className="text-5xl text-center text-black mt-[-300]" >
            Made Around You.
          </TextReveal></span>
  
          <div className="flex items-center justify-center relative z-0 mt-[-150px]">
            <Image
              src="/Group 5.png"
              alt="Devices preview"
              width={400}
              height={400}
              priority
              unoptimized
            />
          </div>
  
          <div className=" relative z-0 flex items-center justify-center mt-[-25px] pb-10">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white text-2xl px-8 py-4 rounded-3xl border-2 border-blue-700"
              style={{ fontFamily: 'Cal Sans, sans-serif' }}
              onClick={() => window.open("https://tally.so/r/m6b0aO", "_blank")}
            >
              Join Wishlist Now
            </button>
          </div>
        </div>
      </section>
    )}
    </>
  )
}