import React from 'react';
import {View, FlatList, Text, Image} from 'react-native';
import {speakers} from '../data/speakers.json';

import styles from './styles/sharedStyles.js';

function Speakers() {
  return (
    <View>
      <FlatList
        data={speakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
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

function SeparatorComponent() {
  return <View style={styles.separatorStyle} />;
}

function HeaderComponent() {
  return (
    <View style={styles.sectionContainer}>
      <Image
        style={styles.headerImage}
        source={require('../images/girl.png')}></Image>
      <Text style={styles.sectionDescription}>Speakers Lineup!</Text>
    </View>
  );
}

function FooterComponent() {
  return (
    <View style={styles.footerContainer}>
      <Image
        style={styles.footerImage}
        source={require('../images/G.png')}></Image>
      <Text style={styles.sectionDescription}>All rights reserved</Text>
    </View>
  );
}

export default Speakers;
