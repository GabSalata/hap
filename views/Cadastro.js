import React, { useEffect, useReducer } from 'react';
import { Alert, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { estilo } from '../assets/css/Css.js'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import Login from './Login';

function Teste() {
  Alert.alert('Mensagem de Teste', 'Funcionou!!!')
}

export default function Cadastro({ navigation }) {

  const [fontsLoaded] = useFonts({
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  //Inicio Front-End
  return (
    <LinearGradient
      colors={['#FFFFFF', '#00FFF0']}
      style={estilo.linearGradient}>

      <View style={estilo.container}>
        <Text style={estilo.titulo}>
          Cadastro
        </Text>

        <Text style={estilo.paragrafo}
        >
          Escolha o tipo de usuário que você deseja para se registrar
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate(Login)}>
          <View style={estilo.caixaGrande}>
            <Text style={estilo.titulo}>
              Cliente
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(Login)}>
          <View style={estilo.caixaGrande}>
            <Text style={estilo.titulo}>
              Funcionário
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}
