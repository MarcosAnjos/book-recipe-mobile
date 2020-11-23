import { StyleSheet } from 'react-native';
import Constants from 'expo-constants'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recipe: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 16
  },

  recipeProperties: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    marginTop: 48,
  },

  recipeValue: {
    margin: 8,
    fontSize: 15,
    color: '#737380',
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#fff',
  },

  bookTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13131a',
    lineHeight: 30
  },

  bookDescription: {
    fontSize: 15,
    color: '#777',
    marginTop: 16
  },

  actions: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: `48%`,
    justifyContent: `center`,
    alignItems: 'center',
  },

  actionText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  }



})