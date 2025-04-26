import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../../../AuthContext';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const { userData, profileData } = useContext(AuthContext);
  const navigation = useNavigation();
  const profileInfo = profileData.User_Info;

  const handleEdit = () => {
    navigation.navigate('Edit')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: profileInfo.User_Image || 'https://via.placeholder.com/120' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>{profileInfo.Full_Name}</Text>
        <Text style={styles.role}>{profileInfo.work_category_id}</Text>
      </View>

      {/* About Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team Objective</Text>
        <Text style={styles.sectionContent}>
          {profileInfo.team_objective}</Text>
      </View>

      {/* Contact Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoValue}>{profileInfo.Email_Id}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Phone:</Text>
          <Text style={styles.infoValue}>{profileInfo.Phone}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoValue}>{profileInfo.City}, {profileInfo.Country}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>{profileInfo.Address}</Text>
        </View>
      </View>

      {/* Personal Details */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Date of Birth:</Text>
          <Text style={styles.infoValue}>{profileInfo.Date_Of_Birth}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Age:</Text>
          <Text style={styles.infoValue}>{profileInfo.Age}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Gender:</Text>
          <Text style={styles.infoValue}>{profileInfo.Gender}</Text>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Interested In Projects</Text>
        <Text style={styles.sectionContent}>{profileInfo.Intrusted_In_Project.join(', ')}</Text>
      </View>

      {/* Team Info */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Team Information</Text>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Team Guide:</Text>
          <Text style={styles.infoValue}>{profileInfo.team_guide}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Team Name:</Text>
          <Text style={styles.infoValue}>{profileInfo.team_name}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Assigned Projects:</Text>
          <Text style={styles.infoValue}>{profileInfo.Assigned_project.join(', ')}</Text>
        </View>
      </View>

      {/* Settings Button */}
      <TouchableOpacity style={styles.settingsButton} onPress = {handleEdit}>
        <Text style={styles.settingsButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    
    padding: 20,
    
    
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  section: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#6200EE',
  },
  sectionContent: {
    fontSize: 14,
    color: 'gray',
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
  },
  infoValue: {
    fontSize: 14,
    color: '#333',
  },
  settingsButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  settingsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
