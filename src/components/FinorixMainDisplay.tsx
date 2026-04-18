import React from "react";

const FinorixMainDisplay: React.FC = () => {
  return (
    <div className="relative w-full min-h-[800px] bg-[#0A2205] flex flex-col items-center justify-end overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#C1FF72 0.5px, transparent 0.5px)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="relative w-full max-w-[1200px] flex justify-center items-end h-[600px]">
        <div className="absolute bottom-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] md:w-[850px] md:h-[850px] border border-[#C1FF72]/20 rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] md:w-[1100px] md:h-[1100px] border border-[#C1FF72]/10 rounded-full pointer-events-none z-0"></div>

        <div className="relative z-20 w-[280px] md:w-[340px] rounded-t-[55px] overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.5)] translate-y-10">
          <img
            src="two.png"
            alt="Investment Statistic UI"
            className="w-full h-auto block"
          />
        </div>

        <div className="absolute bottom-[40%] right-[2%] md:right-[10%] lg:right-[15%] z-30 w-[200px] md:w-[300px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-float">
          <img
            src="three.png"
            alt="Main Balance Statistic Card"
            className="w-full h-auto rounded-[24px] md:rounded-[32px]"
          />
        </div>

        <div className="absolute bottom-[15%] left-[2%] md:left-[10%] lg:left-[15%] z-30 w-[180px] md:w-[280px] drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)] animate-float-delayed">
          <img
            src="one.png"
            alt="Quick Transaction List Card"
            className="w-full h-auto rounded-[24px] md:rounded-[32px]"
          />
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};

export default FinorixMainDisplay;
