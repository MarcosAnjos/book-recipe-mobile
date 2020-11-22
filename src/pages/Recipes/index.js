import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Recipes() {
  const navigation = useNavigation()

  function navigateToDetails() {
    navigation.navigate('Details')
  }

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
        data={[1, 2, 3, 4, 5, 6]}
        styles={styles.recipesList}
        keyExtractor={recipes => String(recipes)}
        showsVerticalScrollIndicator={false}
        renderItem={() => (
          <View style={styles.recipes}>
            <Text style={styles.recipesProperties}>Receita:</Text>
            <Text style={styles.recipesValue}>Bolo Chocolate</Text>

            <Text style={styles.recipesProperties}>Ingredientes:</Text>
            <Text style={styles.recipesValue}>
              250gr de Farinha de trigo,
              2 conher de manteiga...
            </Text>

            <Text style={styles.recipesProperties}>Modo de fazer:</Text>
            <Text style={styles.recipesValue}>
              Num recepiente adicionar um farinha de trigo,
              Chocolate, leite...
            </Text>

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