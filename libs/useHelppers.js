export const useHelppers = () => ({
  handleCalcCassInReject: (cass, valueCass, valueReject) => {
    return (parseInt(valueCass) + parseInt(valueReject)) * parseInt(cass);
  },

  handleTransforInReal: (value) => {
    return value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  },

  handleCalcTotal: (valueA, valueB, valueC, valueD) => {
    if (valueA == "") valueA = 0;
    if (valueB == "") valueB = 0;
    if (valueC == "") valueC = 0;
    if (valueD == "") valueD = 0;
    return (
      parseInt(valueA) + parseInt(valueB) + parseInt(valueC) + parseInt(valueD)
    );
  },
});
