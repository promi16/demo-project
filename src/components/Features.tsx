import React from "react";

const Features: React.FC = () => {
  return (
    <section className="bg-white py-20 px-10 w-full">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-black mb-2 font-bold text-5xl">
          <span className="mb-3">Here are some of our </span> <br /> Cool
          features
        </h1>
        <p className="text-gray-600 text-lg">
          Standout finance features designed to put you in control of your
          money. From smart budgeting to seamless
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1400px] mx-auto">
        <div className="bg-[#F6F8F6] rounded-[32px] p-10 flex-[0.4] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#1A3015] mb-4">
              Balance Check
            </h3>
            <p className="text-gray-600 mb-8">
              Balance Check makes it easy to stay on top of your finances. With
              just a few clicks, you can instantly view
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm flex justify-center items-center">
            <img src="f-26.png" alt="Balance Chart" className="w-full h-auto" />
          </div>
        </div>

        <div className="bg-[#F6F8F6] rounded-[32px] p-10 flex-[0.6] flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-[#1A3015] mb-4">
              Data Analytics For Finance
            </h3>
            <p className="text-gray-600 mb-8 max-w-md">
              Taking control of your personal finances and investments and
              saving more money is the most popular choice
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <img
              src="f-27.png"
              alt="Data Analytics"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
