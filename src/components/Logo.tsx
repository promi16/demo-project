import React from "react";

const Logo: React.FC = () => {
  return (
    <section className="bg-white pt-16 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#1A3015] text-[15px] font-medium mb-10 tracking-tight">
            Trusted by innovative companies
          </p>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center md:ml-10 gap-8 lg:gap-10">
          <div className="flex shrink-0">
            <p className="text-black pt-2 font-bold">logo</p>{" "}
            <img src="Vector (1).png" alt="" />{" "}
            <p className="text-black font-bold pt-2">ipsum</p>
          </div>
          <div className="flex shrink-0">
            <img src="Vector (2).png" alt="" />
            <p className="text-black pt-2 font-bold">Logoipsum</p>
          </div>
          <div className="flex shrink-0">
            <img src="Vector (3).png" alt="" />
            <p className="text-black pt-2 font-bold">Logoipsum</p>
          </div>
          <div className="flex shrink-0">
            <img src="Vector (4).png" alt="" />
            <p className="text-black pt-2 font-bold">Logoipsum</p>
          </div>
          <div className="flex shrink-0">
            <img src="Vector (5).png" alt="" />
            <p className="text-black p-2 font-bold">Logoipsum</p>
          </div>
          <div className="flex shrink-0">
            <img src="Vector (6).png" alt="" />
            <p className="text-black p-2 font-bold">Logoipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Logo;
