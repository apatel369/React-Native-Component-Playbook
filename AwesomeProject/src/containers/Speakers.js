import React, {useState} from 'react';
import {View, FlatList, Text, Image, Pressable} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {speakers} from '../data/speakers.json';

import styles from './styles/sharedStyles.js';

function Speakers() {
  const [filteredSpeakers, setFilteredSpeakers] = useState(speakers);

  function getSearchText(text) {
    let fileredSpeakersList = speakers.filter((value) =>
      value.sessions[0].name.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredSpeakers(fileredSpeakersList);
  }

  return (
    <View>
      <SearchSessions getSearchText={getSearchText} />
      <FlatList
        data={filteredSpeakers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={SeparatorComponent}
        ListHeaderComponent={HeaderComponent}
        ListFooterComponent={FooterComponent}
        keyboardDismissMode={'on-drag'}
        keyboardShouldPersistTaps={'always'}
      />
    </View>
  );
}

function SearchSessions(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = (text) => {
    setSearchText(text);
    props.getSearchText(text);
  };

  const clearSearch = () => {
    this.textInput.clear();
    props.getSearchText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        ref={(ref) => {
          this.textInput = ref;
        }}
        style={styles.searchInput}
        value={searchText}
        onChangeText={(text) => handleSearch(text)}
        placeholder={'Search Sessions'}
        returnKeyType={'go'}
        autoCorrect={false}
        autoFocus
      />
      <Pressable onPress={clearSearch} style={styles.clearContainer}>
        <Image
          style={styles.clearImage}
          source={require('../images/multiply-1_Orange.png')}
        />
      </Pressable>
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
