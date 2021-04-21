import React from 'react';
import {SectionList, Text, View} from 'react-native';
import {sessions} from '../data/sessions.json';
import styles from './styles/sharedStyles';

function Sessions() {
  return (
    <View>
      <SectionList
        sections={sessions}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(index) => index}
        stickySectionHeadersEnabled></SectionList>
    </View>
  );
}

const renderSectionHeader = ({section}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerTitle}>{section.title}</Text>
    </View>
  );
};

const renderItem = ({item, index}) => {
  return (
    <View>
      <SessionsList
        id={index}
        name={item.title}
        desc={item.description}
        speaker={item.speakers[0].name}></SessionsList>
    </View>
  );
};

const SessionsList = ({id, name, speaker, desc}) => {
  return (
    <View key={id} style={styles.sectionContainer}>
      <Text style={styles.sectionDescription}>{'Session :' + name}</Text>
      <Text style={styles.sectionDescription}>{'Details :' + desc}</Text>
      <Text style={styles.sectionDescription}>{'Speaker :' + speaker}</Text>
    </View>
  );
};

export default Sessions;
