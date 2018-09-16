import React, {Component} from 'react';
import { FlatList, ActivityIndicator, Text, View  }  from 'react-native';
//import  HelloWorldApp from './Helloworld'


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://api.jikan.moe/v3/anime/1/episodes')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.episodes,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.title_japanese}</Text>}
          keyExtractor={({episode_id}, index) => episode_id}
        />
      </View>
    );
  }
}
