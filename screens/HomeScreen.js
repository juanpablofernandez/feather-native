import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
// import { Icon } from 'native-base';
import { Button } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';

export default class LinksScreen extends React.Component {
    // const icon = <Icon name="ios-settings" style={{ paddingLeft: 10}}/>;
  static navigationOptions = {
    title: 'Feather',
    // headerLeft: <Icon name="ios-settings" style={{ paddingLeft: 10}}/>,
    headerLeft: (
      <Button
        icon={<Ionicons name='ios-settings' size={32} color='black'/>}

        onPress={() => alert('Settings')}
        color="#000"
      />
    ),
    headerRight: (
      <Button
        icon={<Ionicons name='md-settings' size={32} color='black'/>}

        onPress={() => alert('Document Picker')}
        color="#000"
      />
    ),
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
