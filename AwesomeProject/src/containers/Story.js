import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import styles from './styles/sharedStyles.js';

function Story() {
  return (
    <ScrollView style={styles.storyContainer} contentContainerStyle={styles.storyInnerContainer}>
      <Image
        style={styles.storyImage}
        source={require('../images/shutterstock_211091626.png')}
      />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitleStory}>Our Story</Text>
          <Text style={styles.sectionDescriptionStory}>
            Conference by nerds for nerds!
          </Text>
        </View>
        <View>
          <Text style={styles.sectionDescriptionStory}>
            This is going to be a lengthy
          </Text>
          <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, illum nemo dolorem libero minima ullam neque provident, aliquam sunt, enim quod totam voluptas assumenda doloremque quibusdam! Molestias, facere. Quia, itaque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam explicabo ad facere doloribus maxime commodi consequatur rerum nostrum, mollitia minus magni? Illum quam adipisci quas iusto exercitationem animi quibusdam unde!
          Dolore earum quas hic in assumenda deserunt temporibus cupiditate quod, inventore provident mollitia sit consectetur maxime debitis, ipsam impedit voluptatum harum modi labore vitae quae magnam iusto rem suscipit. Officia?
          Est minus nam vitae culpa quos nobis voluptatum fuga esse quidem totam beatae voluptatem error, exercitationem earum illum. Debitis numquam in adipisci consectetur unde, accusantium earum voluptatum veritatis molestias quae.
          Eos, porro dolor. Amet corporis quaerat placeat in voluptas enim impedit, eaque velit doloremque dolorum ipsam blanditiis, quis perferendis cupiditate dignissimos minus hic corrupti labore quo incidunt rerum molestias obcaecati.
          Vitae architecto aut placeat blanditiis deleniti beatae totam ab quaerat libero itaque tempore nemo quas nulla obcaecati ad, a quibusdam neque eius voluptatem, odio delectus accusamus! Cumque, blanditiis quos. Nemo.
          Fugit sed pariatur numquam aspernatur architecto, doloribus deleniti molestias sapiente ducimus, inventore saepe, adipisci sit ratione. Eos accusantium mollitia non, error laboriosam corrupti? Sint nam et nesciunt? Dolor, consequuntur. Magni.
          Voluptatum, fugiat nemo. Modi facere molestiae distinctio odit culpa eveniet voluptatem blanditiis, facilis adipisci exercitationem cumque aliquam non quod expedita dolor velit. Ullam nam, ea praesentium quam non illum corporis?
          Harum eveniet fuga, vitae quasi mollitia obcaecati quam magnam dolor laboriosam blanditiis, dolore iste, iure accusantium. Aliquid facilis, accusantium architecto at recusandae sint voluptate laboriosam doloremque. Obcaecati reiciendis laudantium totam.
          Quos, accusamus error! Soluta est optio nobis alias officiis. Adipisci voluptatum quo assumenda alias ullam eligendi esse maxime voluptates saepe veniam. Quasi, voluptates nam eum facere voluptatibus est pariatur quas.
          Itaque maxime repudiandae nihil eligendi! Iusto laboriosam rerum tempora laborum, sed facilis molestias officia, accusantium deserunt accusamus, eos a? Sit odit cupiditate delectus at velit labore reiciendis adipisci ex fugit.
          </Text>
    
          <Text style={styles.sectionDescriptionStory}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, illum nemo dolorem libero minima ullam neque provident, aliquam sunt, enim quod totam voluptas assumenda doloremque quibusdam! Molestias, facere. Quia, itaque.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam explicabo ad facere doloribus maxime commodi consequatur rerum nostrum, mollitia minus magni? Illum quam adipisci quas iusto exercitationem animi quibusdam unde!
          Dolore earum quas hic in assumenda deserunt temporibus cupiditate quod, inventore provident mollitia sit consectetur maxime debitis, ipsam impedit voluptatum harum modi labore vitae quae magnam iusto rem suscipit. Officia?
          Est minus nam vitae culpa quos nobis voluptatum fuga esse quidem totam beatae voluptatem error, exercitationem earum illum. Debitis numquam in adipisci consectetur unde, accusantium earum voluptatum veritatis molestias quae.
          Eos, porro dolor. Amet corporis quaerat placeat in voluptas enim impedit, eaque velit doloremque dolorum ipsam blanditiis, quis perferendis cupiditate dignissimos minus hic corrupti labore quo incidunt rerum molestias obcaecati.
          Vitae architecto aut placeat blanditiis deleniti beatae totam ab quaerat libero itaque tempore nemo quas nulla obcaecati ad, a quibusdam neque eius voluptatem, odio delectus accusamus! Cumque, blanditiis quos. Nemo.
          Fugit sed pariatur numquam aspernatur architecto, doloribus deleniti molestias sapiente ducimus, inventore saepe, adipisci sit ratione. Eos accusantium mollitia non, error laboriosam corrupti? Sint nam et nesciunt? Dolor, consequuntur. Magni.
          Voluptatum, fugiat nemo. Modi facere molestiae distinctio odit culpa eveniet voluptatem blanditiis, facilis adipisci exercitationem cumque aliquam non quod expedita dolor velit. Ullam nam, ea praesentium quam non illum corporis?
          Harum eveniet fuga, vitae quasi mollitia obcaecati quam magnam dolor laboriosam blanditiis, dolore iste, iure accusantium. Aliquid facilis, accusantium architecto at recusandae sint voluptate laboriosam doloremque. Obcaecati reiciendis laudantium totam.
          Quos, accusamus error! Soluta est optio nobis alias officiis. Adipisci voluptatum quo assumenda alias ullam eligendi esse maxime voluptates saepe veniam. Quasi, voluptates nam eum facere voluptatibus est pariatur quas.
          Itaque maxime repudiandae nihil eligendi! Iusto laboriosam rerum tempora laborum, sed facilis molestias officia, accusantium deserunt accusamus, eos a? Sit odit cupiditate delectus at velit labore reiciendis adipisci ex fugit.
          </Text>
        </View>
        
      </View>
    </ScrollView>
  );
}

export default Story;
