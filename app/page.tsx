"use client"

import { cn } from "@/lib/utils"
import { DotPattern } from "@/components/ui/dot-pattern"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 relative flex items-center justify-center">
      {/* Background Pattern */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]"
        )}
      />
      
      {/* Diagonal Lines */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20">
        <div className="w-full h-px bg-gray-400 transform rotate-45 origin-top-right"></div>
        <div className="w-full h-px bg-gray-400 transform rotate-45 origin-top-right mt-4"></div>
        <div className="w-full h-px bg-gray-400 transform rotate-45 origin-top-right mt-8"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20">
        <div className="w-full h-px bg-gray-400 transform -rotate-45 origin-bottom-left"></div>
        <div className="w-full h-px bg-gray-400 transform -rotate-45 origin-bottom-left mt-4"></div>
        <div className="w-full h-px bg-gray-400 transform -rotate-45 origin-bottom-left mt-8"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl text-gray-800 mb-6 leading-tight" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
          Store Everything<br />
          You Need
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
          Master AI implementation through our structured 28-day challenge or get personalized consulting for your business
        </p>
        
        {/* CTA Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg  px-8 py-4 rounded-xl transition-colors duration-200 mb-12" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
          Join the 28-Day Challenge
        </button>
        
        {/* Social Proof Section */}
        <div className="flex items-center justify-center gap-8">
          <div className="text-gray-500 text-lg" style={{ fontFamily: 'Cal Sans, sans-serif' }}>
            Join Over<br />
            <span className="font-semibold">10,000 Creatives</span>
          </div>
          
          {/* Profile Avatars */}
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-blue-200 flex items-center justify-center text-white font-semibold text-sm"
                style={{ fontFamily: 'Cal Sans, sans-serif' }}
              >
                {i}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}