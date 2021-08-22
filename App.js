import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
} from "react-native";

export default function App() {
  const moedas = [require("./img/m1.jpg"), require("./img/m3.jpg")];

  let iMoeda = 0;

  const maxGiros = 20;

  const [moedaAtual, setMoedaAtual] = useState(moedas[iMoeda]);

  async function espera(tmp) {
    function tempo(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    await tempo(tmp);
  }

  async function girarMoeda() {
    iMoeda = 2;
    for (let i = 0; i < maxGiros * 2; i++) {
      iMoeda++;
      if (iMoeda > 3) {
        iMoeda = 2;
      }
      setMoedaAtual(moedas[iMoeda]);
      await espera(10);
    }
    let res=Math.floor(Math.random()*10)+1;
    if(res <= 5)
    res = 0
    else 
    res=1
    setMoedaAtual(moedas[res])
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Cara ou Coroa</Text>
      <Image style={styles.img} source={moedaAtual} />
      <Button title="Girar" onPress={() => {girarMoeda()}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  titulo: {
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 24,
  },
  img: {
    width: 250,
    height: 250,
    borderRadius: 50,
    padding: 20,
    marginBottom: 10,
  },
});
