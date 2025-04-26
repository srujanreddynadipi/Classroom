import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, ToastAndroid, TouchableOpacity } from 'react-native';
import DatePicker from 'react-native-date-picker';
import axios from 'axios';

export default function ViewStudentActivityScreen({ route }) {
  const { selectedPerson } = route.params;
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [showFromDatePicker, setShowFromDatePicker] = useState(false);
  const [showToDatePicker, setShowToDatePicker] = useState(false);
  
  useEffect(() => {
    if (selectedPerson) {
      fetchStudentTasks(selectedPerson.student_id);
    }
  }, [selectedPerson]);

  const fetchStudentTasks = async (studentId) => {
    setLoading(true);
    const apiKey = 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u';
    
    const formatDate = (date) => {
      let day = date.getDate().toString().padStart(2, '0');
      let month = (date.getMonth() + 1).toString().padStart(2, '0');
      let year = date.getFullYear();
      return `${day}/${month}/${year}`;
    };
    
    const requestBody = {
      api_key: apiKey,
      student_id: studentId,
      from_date: formatDate(fromDate),
      to_date: formatDate(toDate),
    };

    try {
      const response = await axios.post('https://startupworld.in/Webservices/api3.php?action=student_task_list', requestBody);
      if (response.data.responseStatus === 200) {
        setTasks(response.data.posts);
      } else {
        ToastAndroid.show('No tasks found!', ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show('Failed to fetch tasks!', ToastAndroid.SHORT);
    } finally {
      setLoading(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.taskItem}>
      <Text style={styles.taskTitle}>{item.task_title}</Text>
      <Text style={styles.taskDetails}>Project: {item.project_name}</Text>
      <Text style={styles.taskDetails}>Status: {item.activity_status}</Text>
      <Text style={styles.taskDetails}>Remark: {item.remark}</Text>
      <Text style={styles.taskDetails}>Time Spent: {item.time_spent || 'N/A'}</Text>
      <Text style={styles.taskDate}>Date: {item.created_date}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Task History of {selectedPerson?.student_name}</Text>
      <View style={styles.dateFilterContainer}>
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowFromDatePicker(true)}>
          <Text style={styles.dateText}>From: {fromDate.toDateString()}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowToDatePicker(true)}>
          <Text style={styles.dateText}>To: {toDate.toDateString()}</Text>
        </TouchableOpacity>
      </View>
      {showFromDatePicker && (
        <DatePicker
          modal
          open={showFromDatePicker}
          date={fromDate}
          mode="date"
          onConfirm={(selectedDate) => {
            setShowFromDatePicker(false);
            setFromDate(selectedDate);
          }}
          onCancel={() => setShowFromDatePicker(false)}
        />
      )}
      {showToDatePicker && (
        <DatePicker
          modal
          open={showToDatePicker}
          date={toDate}
          mode="date"
          onConfirm={(selectedDate) => {
            setShowToDatePicker(false);
            setToDate(selectedDate);
          }}
          onCancel={() => setShowToDatePicker(false)}
        />
      )}
      <TouchableOpacity style={styles.filterButton} onPress={() => fetchStudentTasks(selectedPerson.student_id)}>
        <Text style={styles.filterButtonText}>Filter</Text>
      </TouchableOpacity>
      {loading ? (
        <ActivityIndicator size="large" color="#6200EE" />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.noTasks}>No tasks found.</Text>}
          removeClippedSubviews={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFC',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#6200EE',
    textAlign: 'center',
  },
  dateFilterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  dateButton: {
    backgroundColor: '#EEE',
    padding: 10,
    borderRadius: 5,
  },
  dateText: {
    fontSize: 14,
    color: '#333',
  },
  filterButton: {
    backgroundColor: '#6200EE',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 15,
  },
  filterButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
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
