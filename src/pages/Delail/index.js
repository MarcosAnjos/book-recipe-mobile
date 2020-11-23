import React from 'react'
import { View, TouchableOpacity, Image, Text, Linking } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer'

import logoImg from '../../assets/logo.png'

import styles from './styles'

export default function Recipes() {
  const navigation = useNavigation()
  const message = 'Ola teste receita...'

  function navigateBack() {
    navigation.goBack()
  }

  // email & whatsapp
  function sendMail() {
    MailComposer.composeAsync({
      subject: 'Receita: Bolo de chocolate',
      recipients: [],
      body: message,
    })
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?text=${message}`)
  }

  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack} >
          <Feather name="arrow-left" size={28} color='#e82041' />
        </TouchableOpacity>
      </View>

      <View style={styles.recipe}>
        <Text style={[styles.recipeProperties, { marginTop: 0 }]}>Receita:</Text>
        <Text style={styles.recipeValue}>Bolo Chocolate</Text>

        <Text style={styles.recipeProperties}>Ingredientes:</Text>
        <Text style={styles.recipeValue}>
          250gr de Farinha de trigo,
          2 conher de manteiga...
            </Text>

        <Text style={styles.recipeProperties}>Modo de fazer:</Text>
        <Text style={styles.recipeValue}>
          Num recepiente adicionar um farinha de trigo,
          Chocolate, leite...
        </Text>
      </View>


      <View style={styles.contactBox}>
        <Text style={styles.bookTitle}>Salve o Dia</Text>
        <Text style={styles.bookTitle}>Faça uma receita deliciosa!</Text>

        <Text style={styles.bookDescription}>Compartilhe esta receita</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>



  )

}