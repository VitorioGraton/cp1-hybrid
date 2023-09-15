import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', // Cor de fundo cinza claro
  },
  itemContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white', // Cor de fundo branca
    elevation: 2, // Efeito de sombra no Android
    shadowColor: 'rgba(0, 0, 0, 0.1)', // Cor da sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    fontSize: 16,
    color: 'green',
  },
  descricao: {
    fontSize: 14,
    color: '#555', // Cor de texto cinza escuro
  },
  imagem: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export function Tela1() {
  const [lista, setLista] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const getLista = () => {
      try {
        fetch('https://run.mocky.io/v3/8810362d-ffa4-4635-9180-dfefa47242f4')
          .then((response) => response.json())
          .then((resultado) => {
            setLista(resultado);
          });
      } catch (error) {
        console.log('error: ', error);
      }
    };

    getLista();
  }, []);

  const navegar = (item) => {
    navigation.navigate('Tela2', {
      titulo: item.titulo,
      preco: item.preco,
      descricao: item.itemDesc,
      imagem: item.imagem,
    });
  };

  const renderItem = ({ item }) => (
    <Pressable style={styles.itemContainer} onPress={() => navegar(item)}>
      <Image
        source={{ uri: item.imagem }}
        style={styles.imagem}
      />
      <View style={styles.itemTextContainer}>
        <Text style={styles.titulo} numberOfLines={1}>{item.titulo}</Text>
        <Text style={styles.preco}>{item.preco}</Text>
        <Text style={styles.descricao} numberOfLines={2}>{item.itemDesc}</Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lista}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
