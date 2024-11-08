import Link from "next/link";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        gap: "20px",
        padding: "24px 40px",
        fontSize: "20px",
      }}
    >
      <div
        style={{
          padding: "8px 16px",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FB923C"; // orange-500
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "inherit";
        }}
      >
        <Link href="/work">Work</Link>
      </div>

      <div
        style={{
          padding: "8px 16px",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FB923C";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "inherit";
        }}
      >
        <Link href="/blog">Blog</Link>
      </div>

      <div
        style={{
          padding: "8px 16px",
          transition: "background-color 0.3s, color 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#FB923C";
          e.currentTarget.style.color = "white";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "transparent";
          e.currentTarget.style.color = "inherit";
        }}
      >
        Contact
      </div>
    </div>
  );
};

export default Navbar;
