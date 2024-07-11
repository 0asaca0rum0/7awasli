import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { MaterialIcons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Octicons from '@expo/vector-icons/Octicons';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function Worker2({ item }) {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatarText}>
            {item.username.charAt(0).toUpperCase() +
              item.username.charAt(item.username.indexOf(' ') + 1).toUpperCase()}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.nameRatingContainer}>
            <Text style={styles.textName} numberOfLines={1}>
              {item.username}
            </Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.textRating}>{item.rating}</Text>
              <Ionicons name="star" color="#FFA500" size={14} />
            </View>
          </View>
          <Text style={styles.textEmail} numberOfLines={1}>
            {item.email}
          </Text>
          <Text style={styles.textPhone}>{item.number}</Text>
        </View>
      </View>

      <View style={styles.actionsContainer}>
        <Pressable style={styles.actionButton} onPress={() => router.push(`/chat/${item.id}`)}>
          <Ionicons name="chatbox-outline" size={24} color="#069E2D" />
          <Text style={styles.actionText}>{t('message')}</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => console.log('Locate pressed')}>
          <Octicons name="location" size={24} color="#069E2D" />
          <Text style={styles.actionText}>{t('locate')}</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => router.push(`/profile/${item.id}`)}>
          <FontAwesome5 name="user" size={22} color="#069E2D" style={styles.actionIcon} />
          <Text style={styles.actionText}>{t('see_user')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginHorizontal: 6,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatarContainer: {
    backgroundColor: '#069E2D',
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginRight: 16,
  },
  avatarText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  nameRatingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  textName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    flex: 1,
    marginRight: 8,
  },
  textRating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 4,
  },
  textEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  textPhone: {
    fontSize: 14,
    color: '#666',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginHorizontal: 4,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
    paddingVertical: 8,
    borderRadius: 8,
    marginHorizontal: 4,
  },
  link: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    fontSize: 12,
    color: '#333',
    marginLeft: 8,
  },
});
