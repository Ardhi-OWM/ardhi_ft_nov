import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-4 fixed bottom-0 mt-auto text-center border-t border-dotted border-gray-300/[.25] ">
      <p className="text-xs ubuntu-mono-regular">
        &copy; {new Date().getFullYear()} Ardhi Analytics
      </p>
    </footer>
  );
};
export default Footer;
