import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  price: {
    fontSize: 18,
    marginBottom: 8,
    color: 'green',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  favoriteButton: {
    backgroundColor: 'green', // Alterada para verde
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 16,
  },
  favoriteButtonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export function Tela2() {
  
  const route = useRoute();
  const { titulo, preco, descricao, imagem } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: imagem }}
        style={styles.image}
      />
      <Text style={styles.title}>{titulo}</Text>
      <Text style={styles.price}>{preco}</Text>
      <Text style={styles.description}>{descricao}</Text>
      <TouchableOpacity
        style={[styles.favoriteButton, { backgroundColor: isFavorite ? 'red' : 'green' }]}
        onPress={toggleFavorite}
      >
        <Text style={styles.favoriteButtonText}>
          {isFavorite ? 'Remover dos Favoritos' : 'Salvar nos Favoritos'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
