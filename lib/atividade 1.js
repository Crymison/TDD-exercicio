function CalculadoradeFuncionarios(nome, email, salariobase, cargo){

    let aux = 0;
    let CF = {};
    CF.salariofinal = 0;
    CF.cargo = "";
    CF.verifica = false;

    if(cargo === "Desenvolvedor"){
        if(salariobase >= 3000){
            
            aux = (salariobase - (salariobase * 0,20))

            CF.cargo = "Desenvolvedor senior";
            CF.salariofinal = aux;
            CF.verifica = true;

        }else{

            aux = (salariobase - (salariobase * 0,15))

            CF.cargo = "Desenvolvedor junior";
            CF.salariofinal = aux;
            CF.verifica = false;
        }
    }
    return CF;
}

module.exports = CalculadoradeFuncionarios;