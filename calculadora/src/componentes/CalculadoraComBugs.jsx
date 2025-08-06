import React, { useState } from "react";
import './CalculadoraComBugs.css'

export default function CalculadoraComBugs() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const somar = () => {
    // ❌ Bug 1: parseInt ignora casas decimais (use parseFloat ou Number para corrigir)
    const res = parseInt(num1) + parseInt(num2);
    setResultado(res);
  };

  const subtrair = () => {
    // ❌ Bug 2: Operação incorreta (realiza multiplicação em vez de subtração)
    const res = Number(num1) * Number(num2);
    setResultado(res);
  };

  const multiplicar = () => {
    // ❌ Bug 2: Operação incorreta (realiza multiplicação em vez de subtração)
    const res = Number(num1) * Number(num2);
    setResultado(res);
  };

  return (
    <div>
      <h2>Calculadora com Bugs</h2>
      <input
        type="text"
        placeholder="Número 1"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número 2"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={somar}>Somar</button>
      <button onClick={subtrair}>Subtrair</button>
      <button onClick={multiplicar}>Multiplicar</button>
      <h3>Resultado: {resultado}</h3>
    </div>
  );
}
