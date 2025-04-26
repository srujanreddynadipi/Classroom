import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext'; // Adjust path accordingly

export default function ViewAssignedTaskScreen() {
  const { userData } = useContext(AuthContext);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAssignedTasks();
  }, []);

  const fetchAssignedTasks = async () => {
    const apiKey = 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u'; // Replace with actual API key
    const studentId = userData.User_Details[0].id; // Ensure this is correct

    const requestBody = {
      api_key: apiKey,
      student_id: studentId,
    };

    console.log("Fetching Tasks:", requestBody);

    try {
      const response = await axios.post(
        'https://startupworld.in/Webservices/api3.php?action=assigned_task_list',
        requestBody
      );

      if (response.data.responseStatus === 200) {
        setTasks(response.data['Assigned Tasks Lists']); // Corrected key
      } else {
        ToastAndroid.show('Failed to load tasks!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("API Error:", error);
      ToastAndroid.show('API request failed!', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.assign_task_description}</Text>
      <Text style={styles.taskDetails}>Assigned By: {item.assign_from_name} ({item.assign_from_entity})</Text>
      <Text style={styles.taskDate}>Created On: {item.created_date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assigned Tasks</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.noTasks}>No tasks assigned.</Text>}
          removeClippedSubviews={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#6200EE',
    textAlign: 'center',
  },
  taskItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  taskDetails: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
  taskDate: {
    fontSize: 12,
    color: '#888',
    marginTop: 8,
  },
  noTasks: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
});

