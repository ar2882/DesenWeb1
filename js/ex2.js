function validar(){
    let cpf = cadastro.cpf.value /*let = variavel local (funciona so neste arquivo) | var = variavel global*/
    let senha = cadastro.senha.value
    let confirm = cadastro.confirm.value

    if(cpf.length != 11){
        alert("CPF invalido")
        cadastro.cpf.focus()
        return false
    }
    if(isNaN(cpf)){ /*validar se o campo cpf eh numero*/
        alert("Informe apenas numeros no campo [CPF]")
        cadastro.cpf.focus()
        return false /*para evitar que ele envie o formulario mesmo com erro (sem que limpe os outros campos)*/
    } 

    if(senha !== confirm){
        alert("Senhas digitadas nao conferem")
        cadastro.confirm.focus()
        return false
    }
    const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{6,10}$/

    // /^ - indica o inicio da regex | $/ - indica o fim da regex
    // (?=.*[A-Z]) - minimo de uma letra maiuscula
    // (?=.*[a-z]) - minimo de uma letra minuscula
    // (?=.*[0-9]) - minimo de um numero
    // (?=.*?[^\w\s]) - minimo de um caractere especial
    // .{6,10} - minimo de 6 e maximo de 10 caracteres

    if(!regex.exec(senha)){ //quando o campo senha nao atender a comparacao da expressao regular em "regex"
        alert("A senha deve estar no padrao de: uma letra maiuscula | uma letra minuscula | um caracter especial | estar entre 6 ou 10 caracteres")
        cadastro.senha.focus()
        return false
    }
}
