"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import Image from "next/image"

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
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#222222' }}>
      <Image
        src="/Main-UI.gif"
        alt="Main UI preview"
        width={900}
        height={900}
        priority
        unoptimized
        className="w-[40vw] max-w-[1000px] h-auto"
      />
    </section>
    </>
  )
}