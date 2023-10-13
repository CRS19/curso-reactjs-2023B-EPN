import { useState, useEffect } from "react";
import { VistaContador } from "./VistaContador";

export interface contador {
  valor: number;
}

export const Contador = () => {
  const [contador, setContador] = useState<contador>({ valor: 0 });

  useEffect(() => {
    console.log("contador", contador);
  }, [contador]);

  return (
    <div style={{ backgroundColor: "#f2f2f2", border: "1px solid black" }}>
      <VistaContador contador={contador.valor} setContador={setContador} />
    </div>
  );
};
