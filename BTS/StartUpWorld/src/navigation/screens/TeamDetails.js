import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, ActivityIndicator, ToastAndroid } from 'react-native';
import axios from 'axios';
import { AuthContext } from '../../../AuthContext'; // Adjust path accordingly
import { useNavigation } from '@react-navigation/native';

export default function AssignTaskScreen({navigation }) {
  const { userData } = useContext(AuthContext);
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [taskDescription, setTaskDescription] = useState('');
  const [taskTitle, setTaskTitle] = useState('');
  const [loading, setLoading] = useState(true);
  const [assigning, setAssigning] = useState(false);
//  const navigation = useNavigation();
  useEffect(() => {
    fetchTeamDetails();
  }, []);

  const fetchTeamDetails = async () => {
    const apiKey = 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u';
    const teamLeaderId = userData.User_Details[0].id; // Ensure correct ID

    const requestBody = {
      api_key: apiKey,
      team_leader_id: teamLeaderId,
    };

    try {
      const response = await axios.post('https://startupworld.in/Webservices/api3.php?action=Team_Details', requestBody);
      
      if (response.data.responseStatus === 200) {
        setStudents(response.data.Team_Details);
        setFilteredStudents(response.data.Team_Details);
      } else {
        ToastAndroid.show('Failed to load team members!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("API Error:", error);
      ToastAndroid.show('API request failed!', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter(student =>
        student.student_name.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredStudents(filtered);
    }
  };

  const assignTask = async () => {
    if (!selectedStudent || taskDescription.trim() === '') {
      ToastAndroid.show('Please select a student and enter a task description!', ToastAndroid.SHORT);
      return;
    }

    setAssigning(true);
    const requestBody = {
      api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
      title:taskTitle,
      student_id: selectedStudent.student_id,
      task_desc: taskDescription,
      assigner_type: "Team Leader",
      assigner_id: userData.User_Details[0].id,
    };

    try {
      const response = await axios.post('https://startupworld.in/Webservices/api3.php?action=assign_task', requestBody);

      if (response.data.responseStatus === 200) {
        ToastAndroid.show('Task assigned successfully!', ToastAndroid.SHORT);
        setTaskDescription('');
        setSelectedStudent(null);
      } else {
        ToastAndroid.show('Failed to assign task!', ToastAndroid.SHORT);
      }
    } catch (error) {
      console.error("API Error:", error);
      ToastAndroid.show('API request failed!', ToastAndroid.SHORT);
    } finally {
      setAssigning(false);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={[styles.studentItem, selectedStudent?.student_id === item.student_id && styles.selectedStudent]} 
      onPress={() => setSelectedStudent(item)}
    >
      <Text style={styles.studentName}>{item.student_name}</Text>
      <Text style={styles.studentEmail}>{item.student_email}</Text>
      <Text style={styles.studentCollege}>{item.student_college}</Text>

      <TouchableOpacity
        style={styles.viewTasksButton}
        onPress={() => navigation.navigate('ViewPrevTask', { selectedPerson: item })}
      >
        <Text style={styles.buttonText}>View Tasks</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Assign Task</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by student name..."
        value={searchQuery}
        onChangeText={handleSearch}
        placeholderTextColor={"#c5c5c5"}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={filteredStudents}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.noStudents}>No team members found.</Text>}
          removeClippedSubviews={false}
        />
      )}

      {selectedStudent && (
        <View style={styles.taskContainer}>
          <Text style={styles.selectedStudentText}>Assigning to: {selectedStudent.student_name}</Text>
          <TextInput
            style={styles.taskTitle}
            placeholder="Enter task Title"
            multiline
            value={taskTitle}
            onChangeText={setTaskTitle}
            placeholderTextColor={"#c5c5c5"}
          />
          <TextInput
            style={styles.taskInput}
            placeholder="Enter task description..."
            multiline
            value={taskDescription}
            onChangeText={setTaskDescription}
            placeholderTextColor={"#c5c5c5"}
          />
          <TouchableOpacity style={styles.assignButton} onPress={assignTask} disabled={assigning}>
            <Text style={styles.assignButtonText}>{assigning ? 'Assigning...' : 'Assign Task'}</Text>
          </TouchableOpacity>
        </View>
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
  searchInput: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#DDD',
  },
  studentItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  selectedStudent: {
    backgroundColor: '#E3DFFD',
    borderColor: '#6200EE',
    borderWidth: 1,
  },
  studentName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  studentEmail: {
    fontSize: 14,
    color: '#555',
  },
  studentCollege: {
    fontSize: 12,
    color: '#888',
  },
  noStudents: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
    marginTop: 20,
  },
  taskContainer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    elevation: 3,
  },
  selectedStudentText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  taskTitle:{
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    height: 40,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  taskInput: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
    height: 80,
    textAlignVertical: 'top',
    marginBottom: 10,
  },
  assignButton: {
    backgroundColor: '#6200EE',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  assignButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewTasksButton: {
    marginTop: 10,
    backgroundColor: '#6200EE',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

