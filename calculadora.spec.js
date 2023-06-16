const calc = require('./calculadora')

describe('Teste para a calculadora', () => {
    test('soma 2 e 2 deve resultar em 4', () => {
        const minhaSoma = calc.soma(2, 2)
        expect(minhaSoma).toBe(4)
    
    })
    
    test('multiplicação 3 com 3 deve resultar em 9', () =>{
        const minhaMultipluicacao = calc.multiplicacao(3 ,3)
        expect(minhaMultipluicacao).toBe(9)
    })
})
