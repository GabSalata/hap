import React, { useState, useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput, ScrollView } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';

export default function CadFunc({ navigation }) {
    //Declaração das variáveis
    const [NOME, setNome] = useState('');
    const [CPF, setCPF] = useState('');
    const [EMAIL, setEmail] = useState('');
    const [NASC, setNasc] = useState('');
    const [PWD, setPWD] = useState('');
    const [CPWD, setCPWD] = useState('');
    const [ENTRADASEGURA, setEntradaSegura] = useState('');
    const [ARQUIVOS, setArquivos] = useState('');

    return (
        <LinearGradient
            colors={['#FFFFFF', '#00FFF0']}
            style={estilo.linearGradient}>
            <View style={estilo.header}>
                <Text style={estilo.titulo}>
                    Funcionário
                </Text>
            </View>
            <ScrollView>
                <View style={estilo.container}>
                    <Text style={estilo.texto}>
                        Nome Completo
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        CPF
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        E-Mail
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        Telefone
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        Data de Nascimento
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        Senha
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        Confirmar Senha
                    </Text>
                    <TextInput
                        style={estilo.caixa}>
                    </TextInput>
                    <Text style={estilo.texto}>
                        Insira os arquivos necessários para validação de cadastro:
                    </Text>
                    



                    <Text style={estilo.texto}>
                        Selecione suas opções de serviço:
                    </Text>



                    <Text style={estilo.texto}>
                        Descreva um pouco sobre você, e a qualidade de seus serviços prestados:
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity
                onPress={() => navigation.navigate(Login)}
                style={estilo.caixa}>
                <Text style={estilo.textoCentro}>
                    Confirmar
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate(Login)}
                style={estilo.caixa}>
                <Text style={estilo.textoCentro}>
                    Ir para Login
                </Text>
            </TouchableOpacity>
        </LinearGradient>
    )
}