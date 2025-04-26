import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
  TextInput,
  Modal,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

export default function StaffScreen() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await axios.post(
        'https://startupworld.in/Webservices/api3.php?action=show_student_list',
        {
          api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
          SL_search: '1',
        }
      );

      if (response.data && response.data.Staff_Details) {
        setStudents(response.data.Staff_Details);
        setFilteredStudents(response.data.Staff_Details);
      } else {
        console.error('Invalid API response:', response.data);
      }
    } catch (error) {
      console.error('Error fetching students:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCall = (phone) => {
    Linking.openURL(`tel:${phone}`);
  };

  const openModal = (student) => {
    setSelectedStudent(student);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedStudent(null);
  };

  const renderStudent = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.studentName}>{item.student_name}</Text>
      <Text style={styles.info}>Email: {item.std_email}</Text>
      <Text style={styles.info}>College: {item.college_name}</Text>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={() => openModal(item)}>
          <Text style={styles.buttonText}>View Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleCall(item.std_mobile)}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    const filtered = students.filter((student) =>
      student.student_name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchText, students]);

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Staff Dashboard</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by Student Name"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <FlatList
        data={filteredStudents}
        keyExtractor={(item) => item.uid}
        renderItem={renderStudent}
        contentContainerStyle={styles.listContainer}
      />

      {/* Modal */}
      {selectedStudent && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedStudent.student_name}</Text>
              <Text style={styles.modalInfo}>Email: {selectedStudent.std_email}</Text>
              <Text style={styles.modalInfo}>Phone: {selectedStudent.std_mobile}</Text>
              <Text style={styles.modalInfo}>College: {selectedStudent.college_name}</Text>
              <Text style={styles.modalInfo}>City: {selectedStudent.city}</Text>
              <Text style={styles.modalInfo}>State: {selectedStudent.state}</Text>
              <Text style={styles.modalInfo}>Hobbies: {selectedStudent.hobbies}</Text>
              <Text style={styles.modalInfo}>Project ID: {selectedStudent.project_id}</Text>

              <Pressable style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginVertical: 20, color: '#6200EE' },
  searchBar: { backgroundColor: '#fff', padding: 10, marginHorizontal: 15, borderRadius: 8, marginBottom: 10, elevation: 2 },
  listContainer: { paddingHorizontal: 15 },
  card: { backgroundColor: '#fff', borderRadius: 10, padding: 15, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 5, elevation: 3 },
  studentName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  info: { fontSize: 14, color: 'gray', marginTop: 2 },
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 15 },
  button: { backgroundColor: '#6200EE', padding: 10, borderRadius: 8, flex: 1, alignItems: 'center', marginHorizontal: 5 },
  buttonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  loaderContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  // Modal styles
  modalContainer: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', alignItems: 'center' },
  modalContent: { backgroundColor: '#fff', borderRadius: 10, padding: 20, width: '80%', elevation: 5 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#6200EE' },
  modalInfo: { fontSize: 14, color: '#333', marginBottom: 5 },
  closeButton: { backgroundColor: '#6200EE', padding: 10, borderRadius: 8, marginTop: 15, alignItems: 'center' },
  closeButtonText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
});
