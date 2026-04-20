import React from "react";

const FinorixMainDisplay: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] bg-[#0A2205] flex flex-col items-center justify-end overflow-hidden font-sans">
      {/* Dynamic Grid Background */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none animate-pulse-slow"
        style={{
          backgroundImage: `radial-gradient(#C1FF72 0.5px, transparent 0.5px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative w-full max-w-[1200px] flex justify-center items-end h-[600px]">
        {/* Animated Background Rings */}
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] border border-[#C1FF72]/20 rounded-full pointer-events-none z-0 animate-ring-grow"></div>
        <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] md:w-[1100px] md:h-[1100px] border border-[#C1FF72]/10 rounded-full pointer-events-none z-0 animate-ring-grow-delayed"></div>

        {/* Center Main Card: Entrance Slide Up */}
        <div className="relative z-20 w-[280px] md:w-[340px] rounded-t-[55px] overflow-hidden shadow-[0_-20px_60px_rgba(193,255,114,0.15)] translate-y-10 animate-slide-up">
          <img
            src="two.png"
            alt="Investment Statistic UI"
            className="w-full h-auto block"
          />
        </div>

        {/* Right Card: Float + Rotate + Glow */}
        <div className="absolute bottom-[40%] right-[2%] md:right-[10%] lg:right-[15%] z-30 w-[200px] md:w-[300px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-float-complex">
          <div className="absolute inset-0 bg-[#C1FF72]/5 blur-3xl rounded-full"></div>
          <img
            src="three.png"
            alt="Main Balance Statistic Card"
            className="w-full h-auto rounded-[24px] md:rounded-[32px] relative z-10"
          />
        </div>

        {/* Left Card: Float + Counter-Rotate + Glow */}
        <div className="absolute bottom-[15%] left-[2%] md:left-[10%] lg:left-[15%] z-30 w-[180px] md:w-[280px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-float-complex-delayed">
          <div className="absolute inset-0 bg-[#C1FF72]/5 blur-3xl rounded-full"></div>
          <img
            src="one.png"
            alt="Quick Transaction List Card"
            className="w-full h-auto rounded-[24px] md:rounded-[32px] relative z-10"
          />
        </div>
      </div>

      <style>{`
        /* Smooth Entrance for the whole scene */
        @keyframes slideUp {
          from { transform: translateY(100px); opacity: 0; }
          to { transform: translateY(40px); opacity: 1; }
        }

        /* Complex Float: Combines Y-axis movement and subtle Z-axis rotation */
        @keyframes floatComplex {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-25px) rotate(2deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }

        /* Sonar Ring Animation */
        @keyframes ringGrow {
          0% { transform: translate(-50%, 0) scale(0.9); opacity: 0; }
          50% { opacity: 0.5; }
          100% { transform: translate(-50%, 0) scale(1.1); opacity: 0; }
        }

        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .animate-float-complex {
          animation: floatComplex 8s ease-in-out infinite;
        }

        .animate-float-complex-delayed {
          animation: floatComplex 9s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-ring-grow {
          animation: ringGrow 4s ease-out infinite;
        }

        .animate-ring-grow-delayed {
          animation: ringGrow 4s ease-out infinite;
          animation-delay: 2s;
        }

        .animate-pulse-slow {
          animation: pulse 6s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};

export default FinorixMainDisplay;
