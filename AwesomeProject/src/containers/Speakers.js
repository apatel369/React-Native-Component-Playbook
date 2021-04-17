import React from 'react';
import {View, FlatList, Text} from 'react-native';
import {speakers} from '../data/speakers.json';

import styles from './styles/sharedStyles.js';

function Speakers() {
  return (
    <View>
      <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

function renderItem({item, index}) {
  return (
    <View>
      <SpeakerList id={index} name={item.name} bio={item.bio} />
    </View>
  );
}

function SpeakerList({id, name, bio}) {
  return (
    <View style={styles.sectionContainer} key={id}>
      <Text style={styles.sectionTitle}>{'Speaker Name: ' + name}</Text>
      <Text style={styles.sectionDescription}>{'Bio: ' + bio}</Text>
    </View>
  );
}

export default Speakers;
