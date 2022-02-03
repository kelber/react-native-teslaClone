import { Dimensions, StyleSheet } from "react-native";




const styles = StyleSheet.create({
    cartContainer: {
        width: '100%',
        // height: '100%',
        // qdo era isolado funcionava bem o height, qdo usou no FlatList nao ficou certo. Só tirar 
        height: Dimensions.get('window').height,
      },
      titles: {
        marginTop: '30%',
        width: '100%',
        alignItems: 'center',
    
      },
      title: {
        fontSize: 40,
        fontweight: 'bold',
      },
      subtitle: { 
        fontSize: 16,
        color: '#5c5e62',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',

      },
      image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
      },

      
    
  });
  

  export default styles;