export function Hero() {
    return (
      <div className="relative min-h-screen" id="home">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("assets/banner.jpg")',
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
  
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome To Elite Forums
          </h1>
          <p className="text-xl md:text-2xl">
            Empowering Your IT Potential
          </p>
        </div>
  
        {/* Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0,32L60,42.7C120,53,240,75,360,74.7C480,75,600,53,720,48C840,43,960,53,1080,58.7C1200,64,1320,64,1380,64L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    )
  }
  
  