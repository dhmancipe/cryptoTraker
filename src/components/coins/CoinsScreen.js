import React , {Component} from 'react';
import {View, Text, Pressable, StyleSheet, Image,FlatList, ActivityIndicator} from 'react-native';
import Http from '../../libs/http';
import CoinsItem from './CoinsItem';
import Colors from '../../res/colors';

class CoinsScreen extends Component {

  state = {
    coins:[],
    loading: false
  }

  componentDidMount = async () => {
    this.setState({ loading:true });
    const res = await Http.instance.get("https://api.coinlore.net/api/tickers/");
    this.setState({coins: res.data, loading:false });
  }

  handlePress = () =>{
    console.log("go to detail", this.props);
    this.props.navigation.navigate('CoinDetail');

  }

  


  render () {

    const { coins, loading } = this.state;



    return (
      <View style={styles.container}>
        { loading ?
          <ActivityIndicator
          style={styles.loader}
          color='#fff'
          size ="large" />
          :null
        }
          <FlatList
          data={coins}
          renderItem={({item}) =>
          <View style={styles.contList}>
            <View style={styles.row}>
              <Text style={styles.symbolText}>{item.symbol}</Text>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.priceText}> ${item.price_usd}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.percentText}>{item.percent_change_1h} </Text>

            </View>
          </View>
           }
           />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: Colors.charade,

  },
  btn:{
    padding:8,
    backgroundColor:"red",
    borderRadius: 8,
    margin:16
  },
  btnTxt:{
    color:"#fff",
    textAlign: "center",
  },
  loader:{
    paddingTop: 60,
  },
  contList:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16
  },
  row:{
    flexDirection: "row",
  },
  symbolText:{
    color:'#fff',
    fontWeight: "bold",
    fontSize: 16,
    marginRight: 12
  },
  nameText:{
    color:'#fff',
    fontSize: 14,
    marginRight: 16
  },
  percentText:{
    color:'#fff',
    fontSize: 12
  },
  priceText:{
    color:'#fff',
    fontSize: 14
  }





});

export default CoinsScreen;
