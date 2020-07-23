import React, {Component} from 'react';
import {
  Icon,
  Container,
  Content,
  Header,
  Left,
  Body,
  Right,
  Button,
  Thumbnail,
} from 'native-base';

import {View, Text, StyleSheet, Image} from 'react-native';

class HomeTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({tintColor}) => (
      <Icon name="person" style={{color: tintColor}} />
    ),
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <Header style={{backgroundColor: 'white'}}>
          <Left style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 17}}>kyoung_jnn</Text>
            <Icon
              name="caret-down"
              type="FontAwesome"
              style={{paddingLeft: 10, fontSize: 14}}
            />
          </Left>
          <Right style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="dots-vertical"
              type="MaterialCommunityIcons"
              style={{fontSize: 23}}
            />
          </Right>
        </Header>
        <Content>
          <View style={{paddingTop: 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1.2, alignItems: 'center'}}>
                <Thumbnail
                  source={require('../../src/p1.jpg')}
                  style={{width: 100, height: 100, borderRadius: 50, marginLeft:20}}
                />
              </View>
              <View style={{flex: 3}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    marginVertical: 25
                  }}>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>30</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>게시물</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>189</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>팔로워</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>181</Text>
                    <Text style={{fontSize: 12, color: 'gray'}}>팔로잉</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingHorizontal: 20, paddingVertical: 15}}>
              <Text style={{fontWeight: 'bold'}}>노 경진</Text>
              <Text>KWU</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Button
                bordered
                dark
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  height: 30,
                  marginHorizontal: 10,
                  marginTop: 10,
                }}>
                <Text>프로필 수정</Text>
              </Button>
            </View>
          </View>
        </Content>
      </View>
    );
  }
}
export default HomeTab;

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
