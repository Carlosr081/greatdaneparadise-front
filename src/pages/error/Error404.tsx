import logo from "../../assets/logo.jpg";

export default function Error404() {
  return (
    <div className="flex text-center gap-2 justify-center items-center flex-col">
      <img className="w-40 h-40" src={logo} alt="App Logo" />
      <p>404</p>
      <p>Disculpe, dirección no encontrada.</p>
      <button className="btn btn-primary" onClick={() => history.go(-1)}>
        Ir a atrás
      </button>
    </div>
  );
}
