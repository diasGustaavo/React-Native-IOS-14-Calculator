import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Botao from './botao'
import Display from './display'

export default props => {
    const [num, setNum] = useState()
    const [num2, setNum2] = useState()
    const [operador, setOperador] = useState();
    const [botaoAtual, setBotaoAtual] = useState(0);
    const [finalDeOperacao, setFinalDeOperacao] = useState(0);
    
    funcaoNumero = (numPassado) => {
        if(operador !== undefined){
            console.log("operator defined")
            if(num2 !== undefined){
                setNum2(num2 + numPassado)
                setBotaoAtual(num2 + numPassado)
            }
            else{
                setNum2(numPassado)
                setBotaoAtual(numPassado)
            }
        }
        else{
            console.log("operator not defined")
            if(num !== undefined){
                setNum(num + numPassado)
                setBotaoAtual(num + numPassado)
            }
            else{
                setNum(numPassado)
                setBotaoAtual(numPassado)
            }
        }
    }
    
    funcaoOperador = (operator) => {
        if(operator !== undefined){
            console.log("final de operacao", finalDeOperacao)
            if(finalDeOperacao){
                setNum(botaoAtual)
                setBotaoAtual(operator)
                setOperador(operator)
            }
    
            if(num !== undefined){
                setBotaoAtual(operator)
                setOperador(operator)
            }
        }

    }

    funcaoIgual = () => {
        if(num2 !== undefined){
            res = 0.0
            switch(operador) {
                case '+':
                    console.log("entrou case +")
                    res = parseFloat(num) + parseFloat(num2)
                    break;
                case '-':
                    res = parseFloat(num) - parseFloat(num2)
                    break;
                case '/':
                    res = parseFloat(num) / parseFloat(num2)
                    break;
                case 'x':
                    res = parseFloat(num) * parseFloat(num2)
                    break;
                default:
            }
            setBotaoAtual(res)
            setOperador()
            setNum()
            setNum2()
            setFinalDeOperacao(1)
            console.log("res in function: ", res)
            return res
        }
    }

    funcaoClean = () => {
        setOperador()
        setNum()
        setNum2()
        setBotaoAtual(0)
    }

    funcaoPolaridade = () => {
        stringBotaoAtual = botaoAtual.toString()
        if (stringBotaoAtual.charAt() != '-'){
            novoBotao = "-" + botaoAtual
            console.log("setando botao atual para", novoBotao)
            setBotaoAtual(novoBotao)

            if(operador !== undefined){
                if(num2 !== undefined){
                    setNum2(novoBotao)
                    console.log("setNum2: ", novoBotao)
                }
            }
            else{
                if(num !== undefined){
                    setNum(novoBotao)
                    console.log("setNum: ", novoBotao)
                }
            }
        }
        else{
            subTexto = botaoAtual.substring(1)
            console.log("setando botao atual para", subTexto)
            setBotaoAtual(botaoAtual.substring(1))

            if(operador !== undefined){
                if(num2 !== undefined){
                    setNum2(subTexto)
                    console.log(subTexto)
                }
            }
            else{
                if(num !== undefined){
                    setNum(subTexto)
                    console.log(subTexto)
                }
            }
        }
    }

    funcaoPorcentagem = () => {
        novoBotao = "0.0" + botaoAtual.replace(".", "")
        setBotaoAtual(novoBotao)
        if(operador !== undefined){
            if(num2 !== undefined){
                setNum2(novoBotao)
                console.log("setNum2: ", novoBotao)
            }
        }
        else{
            if(num !== undefined){
                setNum(novoBotao)
                console.log("setNum: ", novoBotao)
            }
        }
    }

    return(
        <>
            <Display num={botaoAtual}/>
            <View style={style.Container}>
                <Botao content={"C"} funcao={funcaoClean} operadorEsp/>
                <Botao content={"+-"} funcao={funcaoPolaridade} operadorEsp/>
                <Botao content={"%"} funcao={funcaoPorcentagem} operadorEsp/>
                <Botao content={"/"} funcao={funcaoOperador} operador/>
                <Botao content={"7"} funcao={funcaoNumero} />
                <Botao content={"8"} funcao={funcaoNumero} />
                <Botao content={"9"} funcao={funcaoNumero} />
                <Botao content={"x"} funcao={funcaoOperador} operador/>
                <Botao content={"4"} funcao={funcaoNumero} />
                <Botao content={"5"} funcao={funcaoNumero} />
                <Botao content={"6"} funcao={funcaoNumero} />
                <Botao content={"-"} funcao={funcaoOperador} operador/>
                <Botao content={"1"} funcao={funcaoNumero} />
                <Botao content={"2"} funcao={funcaoNumero} />
                <Botao content={"3"} funcao={funcaoNumero} />
                <Botao content={"+"} funcao={funcaoOperador} operador/>
                <Botao content={"0"} funcao={funcaoNumero} largeButton/>
                <Botao content={"."} funcao={funcaoNumero} />
                <Botao content={"="} funcao={funcaoIgual} operador/>
            </View>
        </>
    )
}

const style = StyleSheet.create({
    Container: {
        justifyContent: "space-evenly",
        alignContent: "space-between",
        flexWrap: 'wrap',
        flexDirection: "row",
    },
    Num: {
       color: '#000000',
    },
})