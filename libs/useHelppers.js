export const useHelppers = () => ({
    handleCalcCassInReject :  (cass , valueCass , valueReject ) => {
        return (parseInt(valueCass) + parseInt(valueReject)) * parseInt(cass)
    },

    handleTransforInReal : (value ) => {
        return value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
    },

    handleCalcTotal : (valueA, valueB, valueC, valueD) => {
        return parseInt(valueA) + parseInt(valueB) + parseInt(valueC) + parseInt(valueD)
    }
})