const CalculadoradeFuncionarios = require ('../lib/atividade 3');

describe('Atividade 3 ex1', () =>{
    test('Verificar Salario desenvolvedor senior >= 3.000,00', () => {
        let nome = "Jorel";
        let email = "jorel@gmail.com";
        let salariobase = 3000;
        let cargo = "Desenvolvedor"

        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Desenvolvedor senior");
        expect(res.verifica).toBe(true);
    });

    test('Verificar Salario desenvolvedor junior < 3.000,00', () => {
        let nome = "Jorel";
        let email = "jorel@gmail.com";
        let salariobase = 2000;
        let cargo = "Desenvolvedor"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Desenvolvedor junior");
        expect(res.verifica).toBe(false);
    });

    test('Verificar Salario DBA senior >= 2.000,00', () => {
        let nome = "Maria";
        let email = "Maria@gmail.com";
        let salariobase = 3500;
        let cargo = "DBA"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("DBA senior");
        expect(res.verifica).toBe(true);
    });

    test('Verificar Salario DBA junior < 2.000,00', () => {
        let nome = "Gustavo";
        let email = "gustavo@gmail.com";
        let salariobase = 1600;
        let cargo = "DBA"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("DBA junior");
        expect(res.verifica).toBe(false);
    });

    test('Verificar Salario Testador senior>= 2.000,00', () => {
        let nome = "Carlos";
        let email = "Carlos@gmail.com";
        let salariobase = 3000;
        let cargo = "Testador"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Testador senior");
        expect(res.verifica).toBe(true);
    });

    test('Verificar Salario Testador junior< 2.000,00', () => {
        let nome = "Marcos";
        let email = "Marcos@gmail.com";
        let salariobase = 1500;
        let cargo = "Testador"
        
        const res = CalculadoradeFuncionarios(nome, email, salariobase, cargo);
        
        expect(res.cargo).toBe("Testador junior");
        expect(res.verifica).toBe(false);
    });
});