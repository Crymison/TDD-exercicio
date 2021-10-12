function CalculadoradeFuncionarios(nome, email, salariobase, cargo){

    let auxsalario = 0;
    let CF = {};
    CF.salariofinal = 0;
    CF.cargo = "";
    CF.verifica = false;

    if(cargo === "Desenvolvedor"){
        if(salariobase >= 3000){
            auxsalario = (salariobase - (salariobase * 0,20))

            CF.cargo = "Desenvolvedor senior";
            CF.salariofinal = auxsalario;
            CF.verifica = true;

        }else{
            auxsalario = (salariobase - (salariobase * 0,15))

            CF.cargo = "Desenvolvedor junior";
            CF.salariofinal = auxsalario;
            CF.verifica = false;
        }

    }else if(cargo === "DBA"){
        if(salariobase >= 2000){
            auxsalario = (salariobase - (salariobase * 0,25))

            CF.cargo = "DBA senior";
            CF.salariofinal = auxsalario;
            CF.verifica = true;
        }else{
            auxsalario = (salariobase - (salariobase * 0,15))

            CF.cargo = "DBA junior";
            CF.salariofinal = auxsalario;
            CF.verifica = false;
        }
    }else if(cargo === "Testador"){
        if(salariobase >= 2000){
            aux = (salariobase - (salariobase * 0,25))

            CF.cargo = "Testador senior";
            CF.salariofinal = aux;
            CF.verifica = true;
        }else{
            aux = (salariobase - (salariobase * 0,15))

            CF.cargo = "Testador junior";
            CF.salariofinal = aux;
            CF.verifica = false;
        }
    }else if(cargo === "Gerente"){
        if(salariobase >= 5000){
            aux = (salariobase - (salariobase * 0,30))

            CF.cargo = "Gerente veterano";
            CF.salariofinal = aux;
        }else{
            aux = (salariobase - (salariobase * 0,20))

            CF.cargo = "Gerente novato";
            CF.salariofinal = aux;;
        }
    }
    return CF;
}

module.exports = CalculadoradeFuncionarios;