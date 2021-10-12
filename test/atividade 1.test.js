const CalculadoradeFuncionarios = require ('../lib/atividade 3');

describe('Atividade 3 ex1', () =>{
    test('Verificar Salario desenvolvedor >= 3.000,00', () => {

        let nome = "Jorel";
        let email = "jorel@gmail.com";
        let salariobase = 3000;
        let cargo = "Desenvolvedor"

        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Desenvolvedor senior");
        expect(res.verifica).toBe(true);
    });

    test('Verificar Salario desenvolvedor < 3.000,00', () => {
        
        let nome = "Jorel";
        let email = "jorel@gmail.com";
        let salariobase = 2000;
        let cargo = "Desenvolvedor"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Desenvolvedor junior");
        expect(res.verifica).toBe(false);
    });
});