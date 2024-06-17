import React from 'react';

const Loader = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
    <style jsx>{`
      .loader {
        border-top-color: #3498db;
        animation: spinner 1.5s linear infinite;
      }
      @keyframes spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

export default Loader;
