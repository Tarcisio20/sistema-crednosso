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
    console.log(valueA)
    if (valueA == "") valueA = 0;
    if (valueB == "") valueB = 0;
    if (valueC == "") valueC = 0;
    if (valueD == "") valueD = 0;
    return (
      (parseInt(valueA)*10) + (parseInt(valueB)*20) + (parseInt(valueC)*50) + (parseInt(valueD)*100)
    );
  },
});
