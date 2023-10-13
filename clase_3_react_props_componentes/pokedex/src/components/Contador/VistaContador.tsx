import { contador } from "./Contador";

interface IVistaContadorProps {
  contador: number;
  setContador: React.Dispatch<React.SetStateAction<contador>>;
}

export const VistaContador = ({
  contador,
  setContador,
}: IVistaContadorProps) => {
  const sumar = () => {
    setContador({ valor: contador + 1 });
  };

  const rest = () => {
    setContador({ valor: contador - 1 });
  };

  return (
    <>
      <h2>La cuenta esta en: {contador}</h2>
      <button onClick={sumar}>+</button>
      <button onClick={rest}>-</button>
    </>
  );
};
