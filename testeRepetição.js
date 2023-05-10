let valor = 0.01;

for (let i = 1; i <= 30; i++) {
  valor = valor * 2;
  console.log(`Valor no dia ${i}: R$ ${valor.toLocaleString('pt-BR', {minimumFractionDigits: 2})}`);
}