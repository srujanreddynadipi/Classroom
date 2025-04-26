import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { AuthContext } from '../../../AuthContext'; // Adjust the path as needed
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const { userData, profileData } = useContext(AuthContext);
  const navigation = useNavigation();

  if (!userData || !profileData) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const userDetails = userData.User_Details[0]; // First API data
  const isTeamLead = userData.User_Details[0].team_leader;
  console.log(isTeamLead)
  const profileInfo = profileData.User_Info; // Second API data

  const handleViewAssignedTask = () => {
    navigation.navigate('AssignedTasklist');
  }
  const handleAssignTask = () => {
    navigation.navigate('TeamDetails')
  }

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.title}>Welcome, {profileInfo.Full_Name}</Text>
        <Image
          source={{ uri: profileInfo.User_Image || 'https://via.placeholder.com/80' }}
          style={styles.profileImage}
        />
      </View>

      {/* Cards Section */}
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Assigned Project</Text>
          <Text style={styles.cardSubtitle}>
            {profileInfo.Assigned_project?.join(', ')}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Team Objective</Text>
          <Text style={styles.cardSubtitle}>
            {profileInfo.team_objective}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Guide</Text>
          <Text style={styles.cardSubtitle}>{profileInfo.team_guide}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>Team Name</Text>
          <Text style={styles.cardSubtitle}>{profileInfo.team_name}</Text>
        </TouchableOpacity>
      </View>

      {/* Task Progress */}
      {/* <View style={styles.taskProgress}>
        <Text style={styles.sectionTitle}>Task Progress</Text>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.progressText}>70% Completed</Text>
      </View> */}

      {/* Quick Actions */}
      <View style={styles.actionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleViewAssignedTask}>
            <Text style={styles.actionText}>View Assigned Tasks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => {
            if (profileInfo.team_lead === true) {
              handleAssignTask();
            } else {
              Alert.alert("Access Denied", "Only the team lead can assign task.");
            }
          }}>
            <Text style={styles.actionText}>Assign Task</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#6200EE',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#fff',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200EE',
  },
  cardSubtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
  },
  taskProgress: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
    marginBottom: 5,
  },
  progress: {
    height: '100%',
    width: '70%',
    backgroundColor: '#6200EE',
  },
  progressText: {
    fontSize: 14,
    color: 'gray',
  },
  actionsContainer: {
    marginBottom: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});