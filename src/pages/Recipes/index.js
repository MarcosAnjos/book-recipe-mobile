import React, { useState, useEffect } from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'

import api from '../../services/api'

import styles from './styles'

export default function Recipes() {
  const navigation = useNavigation()
  const [recipes, setrecipes] = useState([])

  function navigateToDetails() {
    navigation.navigate('Details')
  }

  // conectando com api
  async function loadRecipes() {
    const response = await api.get('recipes')

    setrecipes(response.data)
  }

  useEffect(() => {
    loadRecipes()
  }, [])

  return (
    <View styles={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.hederText}>
          Total de <Text style={styles.headerTextBold}>0 receitas</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>Qual vai ser receita de hoje! </Text>
      {/* fim header */}

      {/* list recipes */}
      <FlatList
        data={recipes}
        styles={styles.recipesList}
        keyExtractor={recipes => String(recipes.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: recipe }) => (
          <View style={styles.recipes}>
            <Text style={styles.recipesProperties}>Receita:</Text>
            <Text style={styles.recipesValue}>{recipes.title}</Text>

            <Text style={styles.recipesProperties}>Ingredientes:</Text>
            <Text style={styles.recipesValue}>{recipes.ingredients}</Text>

            <Text style={styles.recipesProperties}>Modo de fazer:</Text>
            <Text style={styles.recipesValue}>{recipes.make}</Text>

            <TouchableOpacity style={styles.detailsButton} onPress={navigateToDetails}>
              <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
              <Feather name={"arrow-right"} size={16} color={'#E02041'} />
            </TouchableOpacity>
          </View>
        )}
      />
      {/* end recipes */}
    </View>
  )
}