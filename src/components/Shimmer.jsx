import React from "react";

const Shimmer = () => {
  return (
    <>
      {/* Shimmer animation style */}
      <style>
        {`
          .animate-shimmer {
            background-size: 200% 100%;
            animation: shimmer 1.5s infinite linear;
          }

          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
        `}
      </style>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
          {Array(4)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-[450px] h-[190px] bg-slate-800 border border-slate-700 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                {/* Top image shimmer */}
                <div className="h-[100px] bg-slate-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                </div>

                {/* Content shimmer */}
                <div className="p-4 flex flex-col justify-between flex-grow space-y-2">
                  {/* Title shimmer */}
                  <div className="h-5 bg-slate-700 rounded w-2/3 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                  </div>

                  {/* Description shimmer lines */}
                  <div className="space-y-1">
                    <div className="h-4 bg-slate-700 rounded w-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                    </div>
                    <div className="h-4 bg-slate-700 rounded w-5/6 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                    </div>
                  </div>

                  {/* Bottom shimmer row */}
                  <div className="flex justify-between items-center pt-2">
                    <div className="h-4 bg-slate-700 rounded w-1/2 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                    </div>
                    <div className="h-6 w-6 bg-slate-700 rounded-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 animate-shimmer" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shimmer;
