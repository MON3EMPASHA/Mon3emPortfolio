const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-[#030014] flex items-center justify-center">
      <div className="relative">
        {/* Background Gradient */}
        <div className="absolute -inset-4 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded-full opacity-20 blur-2xl animate-pulse"></div>

        {/* Loading Spinner and Text */}
        <div className="relative flex flex-col items-center gap-4 p-8">
          {/* Spinner */}
          <div className="w-12 h-12 rounded-full border-4 border-t-transparent border-[#1e3a8a] animate-spin"></div>

          {/* Loading Text */}
          <div className="relative">
            {/* Text Gradient Background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] rounded blur opacity-20"></div>
            <span className="relative text-gray-200 text-sm">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
