import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Welcome to the</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://miro.medium.com/v2/resize:fit:1200/1*SPYhnNnAFNDdZ-Z5cQWmdw.jpeg"
        alt=""
      />
    </div>
  );
}
