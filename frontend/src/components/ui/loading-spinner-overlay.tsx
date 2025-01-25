import React from "react";

const LoadingOverlay: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-zinc-950/50 flex justify-center items-center z-50">
      <div className="w-20 h-20 border-8 border-t-8 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingOverlay;
