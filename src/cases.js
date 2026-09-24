import { total } from "./cart.js";

const eq = (actual, expected) => {
  if (actual !== expected)
    throw new Error(`esperado ${expected}, obtido ${actual}`);
};

const throws = (fn) => {
  try {
    fn();
  } catch {
    return;
  }
  throw new Error("falhou ao lançar exceção");
};

export const cases = [
  { name: "carrinho vazio totaliza 0", test: () => eq(total([]), 0) },
  {
    name: "multiplica preço pela quantidade",
    test: () => eq(total([{ price: 10, qty: 3 }]), 30),
  },
  { name: "quantidade padrão é 1", test: () => eq(total([{ price: 7 }]), 7) },
  {
    name: "soma várias linhas",
    test: () => eq(total([{ price: 10 }, { price: 5, qty: 2 }]), 20),
  },
  {
    name: "aplica desconto percentual",
    test: () => eq(total([{ price: 100 }], 15), 85),
  },
  {
    name: "arredonda para centavos inteiros",
    test: () => eq(total([{ price: 9.99 }], 15), 8.49),
  },
  {
    name: "rejeita desconto acima de 100%",
    test: () => throws(() => total([{ price: 1 }], 120)),
  },
];

export const run = () =>
  cases.map(({ name, test }) => {
    try {
      test();
      return { name, pass: true };
    } catch (e) {
      return { name, pass: false, error: e.message };
    }
  });
