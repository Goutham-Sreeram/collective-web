"use client"

import React from "react"
import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"
import Image from "next/image"
import { TextReveal } from "@/components/ui/text-reveal"
import { TextAnimate } from "@/components/ui/text-animate"
import { FooterComponent } from "@/components/ui/footer"
import { isMobile } from "react-device-detect"
import { Preloader } from "@/components/preloader"

export default function Home() {
  const [mounted, setMounted] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 4500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* Preloader overlay */}
      <Preloader isLoading={!mounted && loading} onFinish={() => setMounted(true)} />

      {/* Main content */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          transitionDelay: "0.1s",
        }}
      >
        <main className="min-h-screen bg-gray-100 relative flex items-center justify-center">
          {/* Background Pattern */}
          <DotPattern
            className={cn("mask-[radial-gradient(700px_circle_at_center,white,transparent)]")}
          />
          {/* Overlay GIF */}
          <div className="absolute inset-0 z-20 flex items-center justify-end pr-6 md:pr-10 pointer-events-none">
            <Image
              src="/main.gif"
              alt="Animated preview"
              width={600}
              height={600}
              priority
              unoptimized
              className="w-[500px] md:w-[60vw] h-auto animate-fade-in"
            />
          </div>

          {/* Main Heading + CTA */}
          {mounted && !isMobile ? (
            <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
              <h1
                className="text-9xl md:text-9xl mb-6"
                style={{ fontFamily: "Cal Sans, sans-serif", lineHeight: "0.8" }}
              >
                <span className="text-blue-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    Never switch
                  </TextAnimate>
                </span>
                <br />
                <span className="text-blue-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    tabs
                  </TextAnimate>
                </span>{" "}
                <span className="text-gray-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    to
                  </TextAnimate>
                </span>
                <br />
                <span className="text-gray-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    reference again.
                  </TextAnimate>
                </span>
              </h1>
              <p
                className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
              >
                Collective is your creative command dock — a lightweight desktop app that gathers
                references and ideas that powers your work
              </p>
              <div
  className="flex justify-center gap-6 mt-4 mb-12 font-[CalSans]"
  style={{ fontFamily: "Cal Sans, sans-serif" }}
>
  {/* Linux Button */}
  <div className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-900 rounded-xl border border-green-300 shadow-sm hover:shadow-lg hover:bg-green-100 transition-all duration-200 cursor-pointer">
    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
    <span className="text-base">Linux</span>
  </div>

  {/* Windows Button */}
  <div className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-300 shadow-sm hover:shadow-lg hover:bg-blue-100 transition-all duration-200 cursor-pointer">
    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
    <span className="text-base">Windows</span>
  </div>
</div>
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200 border-2 border-blue-700"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
                onClick={() => window.open("https://collective01.gumroad.com/l/collective", "_blank")}
              >
                Download Now
              </button>
            </div>
          ) : (
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
              <h1
                className="text-6xl mb-6"
                style={{ fontFamily: "Cal Sans, sans-serif", lineHeight: "0.8" }}
              >
                <span className="text-blue-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    Never switch
                  </TextAnimate>
                  <br />
                </span>

                <span className="text-blue-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    tabs
                  </TextAnimate>
                  <br />
                </span>{" "}
                <span className="text-gray-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    to
                  </TextAnimate>
                  <br />
                </span>
                <span className="text-gray-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    reference
                  </TextAnimate>
                  <br />
                </span>
                <span className="text-gray-600">
                  <TextAnimate as="span" animation="blurInUp" by="character" once>
                    again.
                  </TextAnimate>
                </span>
              </h1>
              <p
                className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
              >
                Collective is your creative command dock — a lightweight desktop app that gathers
                references and ideas that powers your work
              </p>
              <div
  className="flex justify-center gap-6 mt-4 mb-12 font-[CalSans]"
  style={{ fontFamily: "Cal Sans, sans-serif" }}
>
  {/* Linux Button */}
  <div className="flex items-center gap-2 px-6 py-3 bg-green-50 text-green-900 rounded-xl border border-green-300 shadow-sm hover:shadow-lg hover:bg-green-100 transition-all duration-200 cursor-pointer">
    <div className="w-2.5 h-2.5 bg-green-600 rounded-full"></div>
    <span className="text-base">Linux</span>
  </div>

  {/* Windows Button */}
  <div className="flex items-center gap-2 px-6 py-3 bg-blue-50 text-blue-900 rounded-xl border border-blue-300 shadow-sm hover:shadow-lg hover:bg-blue-100 transition-all duration-200 cursor-pointer">
    <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>
    <span className="text-base">Windows</span>
  </div>
</div>

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl transition-colors duration-200 border-2 border-blue-700"
                style={{ fontFamily: "Cal Sans, sans-serif" }}
                onClick={() => window.open("https://collective01.gumroad.com/l/collective", "_blank")}
              >
                Download Now
              </button>
            </div>
          )}
        </main>

        {/* About Section */}
        {mounted && !isMobile ? (
          <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            <DotPattern
              className={cn("mask-[radial-gradient(600px_circle_at_center,white,transparent)]", "opacity-40")}
            />
            <div className="max-w-6xl mx-auto px-6 relative z-10">
              <div className="grid grid-cols-2 gap-16 items-center">
                {/* Left: Text Content */}
                <div style={{ fontFamily: "Cal Sans, sans-serif" }}>
                  <h2 className="text-7xl text-gray-900 mb-6 leading-tight">
                    <TextAnimate animation="blurInUp" by="word" once>
                      Your Creative Universe, Organized
                    </TextAnimate>
                  </h2>
                  <div className="space-y-4 text-xl text-gray-600 leading-relaxed">
                    <p>
                      Collective transforms how you capture and organize inspiration. Whether it's images, gifs, links, everything lives in one seamless workspace.
                    </p>
                    <p>
                      Built for designers, artists, and creators who need their references at their fingertips without the clutter. No more scattered tabs or forgotten screenshots.
                    </p>
                    <p className="text-blue-600 font-medium">
                      Just pure, focused creativity.
                    </p>
                  </div>
                </div>

                {/* Right: Visual Element */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                  <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-200">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center text-white text-2xl">
                          🎨
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Visual References</h3>
                          <p className="text-sm text-gray-600">Collect and organize inspiration</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center text-white text-2xl">
                          ⚡
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Quick Access</h3>
                          <p className="text-sm text-gray-600">Command dock for instant retrieval</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm">
                        <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center text-white text-2xl">
                          👆🏻
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Drag to workspace</h3>
                          <p className="text-sm text-gray-600">Take anything from the dock to your tools </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <section className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
            <div className="max-w-lg mx-auto" style={{ fontFamily: "Cal Sans, sans-serif" }}>
              <h2 className="text-4xl text-gray-900 mb-6 text-center leading-tight">
                Your Creative Universe, Organized
              </h2>
              <div className="space-y-3 text-base text-gray-600 leading-relaxed mb-10 text-center">
                <p>
                  Collective transforms how you capture and organize inspiration. Everything lives in one seamless workspace.
                </p>
                <p>
                  Built for creators who need their references at their fingertips without the clutter.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-blue-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Visual References</h3>
                    <p className="text-sm text-gray-600">Collect inspiration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-purple-50 rounded-2xl p-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-purple-500 rounded-xl flex items-center justify-center text-white text-xl">
                    ⚡
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Quick Access</h3>
                    <p className="text-sm text-gray-600">Instant retrieval</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-yellow-50 rounded-2xl p-4">
                  <div className="w-12 h-12 flex-shrink-0 bg-yellow-500 rounded-xl flex items-center justify-center text-white text-xl">
                    🖱️
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base">Smart Search</h3>
                    <p className="text-sm text-gray-600">Find anything fast</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 🎥 Video Section */}
        {mounted && !isMobile ? (
          <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 pt-20 pb-20">
            <div
              className="max-w-5xl w-full px-6 flex flex-col items-center"
              style={{ fontFamily: "Cal Sans, sans-serif" }}
            >
              {/* YouTube Embed */}
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-gray-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/n10T62hh9O0?rel=0&autoplay=0&mute=0"
                  title="Collective Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Text below video */}
              <div className="text-center mt-10">
                <h2 className="text-6xl text-gray-900 mb-4">See Collective in Action</h2>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                  Take a quick look at how Collective brings together your inspiration, references,
                  and ideas — all in one clean workspace.
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section className="min-h-[80vh] flex flex-col items-center justify-center bg-gray-100 pt-16 pb-16 px-4">
            <div className="w-full max-w-md" style={{ fontFamily: "Cal Sans, sans-serif" }}>
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-gray-300">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/n10T62hh9O0?rel=0&autoplay=0&mute=0"
                  title="Collective Walkthrough"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="text-center mt-8">
                <h2 className="text-4xl text-gray-900 mb-3">See Collective in Action</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                  Watch how Collective helps you organize your creative flow effortlessly.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Second Section with dark background and centered GIF */}
        {mounted && !isMobile ? (
          <section
            className="min-h-screen flex flex-col items-center justify-center pt-50"
            style={{ backgroundColor: "#222222" }}
          >
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
              <Image src="/dock.png" alt="Dock Icon" width={250} height={250} priority unoptimized />
            </div>

            <div className="mt-[-100]" style={{ fontFamily: "Cal Sans, sans-serif" }}>
              <span>
                <TextReveal className="text-8xl md:text-8xl text-center text-white">
                  Find Your Items
                </TextReveal>
              </span>
              <span>
                <TextReveal className="text-8xl md:text-8xl text-center text-white mt-[-300]">
                  With Ease (Coming soon)
                </TextReveal>
              </span>
            </div>
          </section>
        ) : (
          <section
            className="min-h-screen flex flex-col items-center justify-center pt-20 px-4"
            style={{ backgroundColor: "#222222" }}
          >
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

            <div style={{ fontFamily: "Cal Sans, sans-serif" }}>
              <span>
                <TextReveal className="text-5xl text-center text-white">Find Your Items</TextReveal>
              </span>
              <span>
                <TextReveal className="text-5xl text-center text-white mt-[-300]">
                  With Ease (Coming soon)
                </TextReveal>
              </span>
            </div>
          </section>
        )}
        {mounted && !isMobile ? (
          <section>
            <div className="min-h-screen bg-gray-100 p-8" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
              <div className="max-w-7xl mt-30 mx-auto grid grid-cols-6 grid-rows-6 gap-4 h-[800px]">

                {/* Switch Workspaces - Top Left */}
                <div className="col-span-2 row-span-3 bg-linear-to-br from-purple-300 to-purple-400 rounded-3xl p-8 flex flex-col justify-between overflow-hidden relative">
                  <div>
                    <h2 className="text-3xl  text-purple-900 mb-3"> <span>Switch<br />Workspaces</span></h2>
                    <p className="text-purple-800"><span>Easily switch <br /> between different <br /> workspaces or <br />  sessions.</span></p>
                  </div>
                  <div className="absolute bottom-0 right-4">
                    <Image
                      src="/Scene-1.gif"
                      alt="Sample Image 1"
                      width={800}
                      height={800}>
                    </Image>
                  </div>
                </div>

                {/* Image Manipulation - Center Large */}
                <div className="col-span-2 row-span-6 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-3xl p-4 flex flex-col items-center justify-between">
                  <div className="text-center mt-20">
                    <h2 className="text-5xl  text-yellow-900 mb-2">Image<br />Manipulation</h2>
                    <p className="text-yellow-800 text-lg">Do flips, inverts, mirrors and<br />rotate on added files to<br />compliment your workflow</p>
                  </div>
                  <div>
                    <Image
                      src="/Scene-1 (4).gif"
                      alt="Sample Image 1"
                      width={1000}
                      height={1000}>
                    </Image>
                  </div>
                </div>

                {/* Control Opacity - Top Right */}
                <div className="col-span-2 row-span-2 bg-white rounded-3xl p-8 flex items-start justify-between">
                  <div>
                    <h2 className="text-3xl  text-gray-900 mb-2">Control<br />Opacity</h2>
                    <p className="text-gray-700">Adjust transparency<br />of layers and<br />objects with ease</p>
                  </div>
                  <div>
                    <Image
                      src="/gif2.gif"
                      alt="Sample Image 1"
                      width={800}
                      height={800}
                      style={{
                        clipPath: 'inset(0 0 15% 0)',
                        marginBottom: '-20px'
                      }}>
                    </Image>
                  </div>
                </div>

                {/* Lock & Play - Bottom Right */}
                <div className="col-span-2 row-span-4 bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h2 className="text-4xl  text-orange-900">Lock &<br />Play</h2>
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
                <div className="col-span-2 row-span-3 bg-gradient-to-br from-lime-200 to-lime-300 rounded-3xl p-2 relative overflow-hidden flex flex-row gap-2 items-center">
                  <div className="max-w-[200px] max-h-[200px] "> {/* moved left by 8rem */}
                    <Image
                      src="music-player.gif"
                      alt="Sample Image 1"
                      width={400}
                      height={400}
                    />
                  </div>


                  <div className="relative z-10 mr-6 flex flex-col gap-2">
                    <h2 className="text-4xl  text-lime-900 leading-tight">
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
            <div className="min-h-screen bg-gray-100 p-4" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
              <div className="max-w-md mt-10 mx-auto flex flex-col gap-4">

                {/* Switch Workspaces */}
                <div className="bg-gradient-to-br from-purple-300 to-purple-400 rounded-3xl pt-6 pr-6 pl-6 flex flex-col justify-between overflow-hidden relative min-h-[350px]">
                  <div>
                    <h2 className="text-2xl text-purple-900 mb-2">Switch Workspaces</h2>
                    <p className="text-purple-800">Easily switch between different workspaces or sessions.</p>
                  </div>
                  <div className="  mt-4">
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
                  <h2 className="text-3xl text-yellow-900 mb-2">Image Manipulation</h2>
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
                  <h2 className="text-2xl  text-gray-900 mb-2">Control Opacity</h2>
                  <p className="text-gray-700">Adjust transparency of layers and objects with ease</p>
                  <div className="self-center mt-4">
                    <Image
                      src="/gif2.gif"
                      alt="Control Opacity"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>

                {/* Lock & Play */}
                <div className="bg-gradient-to-br from-orange-300 to-orange-400 rounded-3xl p-6 flex flex-col">
                  <h2 className="text-3xl  text-orange-900">Lock & Play</h2>
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
                  <h2 className="text-3xl  text-lime-900 leading-tight">Tunes to work to</h2>
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
            <div className="mt-[-70] relative z-10 " style={{ fontFamily: 'Cal Sans, sans-serif' }}>
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
                  width={700}
                  height={700}
                  priority
                  unoptimized>

                </Image>
              </div>

              <div className=" relative z-0 flex items-center justify-center mt-[-45] pb-10">
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200 border-2 border-blue-700" style={{ fontFamily: 'Cal Sans, sans-serif' }} onClick={() => window.open("https://collective01.gumroad.com/l/collective", "_blank")}>
                  Download Now
                </button>
              </div>
            </div>
          </section>) : (
          <section>
            <div className="relative z-10 " style={{ fontFamily: 'Cal Sans, sans-serif' }}>
              <span><TextReveal className="text-5xl text-center " >
                Made For You,
              </TextReveal></span>
              <span><TextReveal className="text-5xl text-center  mt-[-300]" >
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
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl transition-colors duration-200 border-2 border-blue-700" style={{ fontFamily: 'Cal Sans, sans-serif' }} onClick={() => window.open("https://collective01.gumroad.com/l/collective", "_blank")}>
                  Download Now
                </button>
              </div>
            </div>
          </section>
        )}
        {/* Footer */}
        <FooterComponent />
      </div>
    </>
  )
}