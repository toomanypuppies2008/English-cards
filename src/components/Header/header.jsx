import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header_logo"></div>
      <div className="header_title">
        <h1>You can easily learn English with Us!</h1>
      </div>
      <div className="header_logIn">
        <p>Log In</p>
      </div>
      <div className="header_signUp">
        <p>Sign up</p>
      </div>
    </header>
  );
}
