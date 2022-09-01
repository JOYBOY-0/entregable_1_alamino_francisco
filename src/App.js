// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.

import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Item from "./components/Item";
import Listado from "./components/Listado";
import data from "./data/data.json";

function App() {

  const [cartCount, setCartCount] = useState(0);


  return (
    <div className="App">
      <Cabecera cartCount={cartCount} />
      <Listado data={data}>
        {data.map((item, i) => <Item key={i} item={item} onClick={() => setCartCount(cartCount + 1)} />)}
      </Listado>
    </div>
  );
}

export default App;