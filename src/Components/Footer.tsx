import { IoLogoFacebook } from "react-icons/io";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div style={{ margin: "112px 0" }}>
      {" "}
      {/* Equivalent to `my-28` */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px", // Equivalent to `gap-5`
          fontSize: "48px", // Equivalent to `text-5xl`
        }}
      >
        <IoLogoFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaLinkedin />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "16px 0", // Equivalent to `my-4`
          fontSize: "16px",
          color: "#000", // Adjust if you want a specific color for text
        }}
      >
        Copyright ©2020 All rights reserved
      </div>
    </div>
  );
}
