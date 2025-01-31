import "./Main.css";

function Main({ children, props }) {
  return (
    <div className="main">
      <p className="main__text"> Here will be main</p>
      {children}
    </div>
  );
}

export default Main;
