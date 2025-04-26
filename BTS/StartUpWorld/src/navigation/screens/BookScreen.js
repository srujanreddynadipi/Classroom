import React, { useState, useEffect, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  Button,
  ActivityIndicator,
  Linking ,
  
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import ApiService from '../../../api/apiServices';
import Octicons from "react-native-vector-icons/Octicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { AuthContext } from '../../../AuthContext';

const BookScreen = () => {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskStatus, setTaskStatus] = useState('In Progress');
  const [taskRemark, setTaskRemark] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [expandedTask, setExpandedTask] = useState(null);
  const [editedTaskTitle, setEditedTaskTitle] = useState("");
  const [modalVisible1, setModalVisible1] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const { userData, profileData } = useContext(AuthContext);
  const { userInfo, setUserData } = useContext(AuthContext);
  console.log(userData.User_Details[0].id)
  const profileInfo = profileData.User_Info;
  const name = profileInfo.Full_Name;

// Split the full name into first name and last name
const nameParts = name.split(' ');

// Extract the first letter of the first name and capitalize it
const firstNameInitial = nameParts[0].charAt(0).toUpperCase();

// Extract the first letter of the last name and capitalize it
const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();

// Combine the initials
const initials = firstNameInitial + lastNameInitial;

console.log(initials); // Output: e.g., "JS" for "John Smith"

  // Fetch tasks and projects on component mount
  useEffect(() => {
    fetchTasks();
    fetchProjects();
  }, []);
console.log(profileInfo.User_Info?.user_id)
  // Fetch tasks from the API
  const fetchTasks = async () => {
    try {
      const response = await ApiService.getTaskList({
        api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
       student_id:userData.User_Details[0].id
      });
      console.log(response.data.posts)
      if (response.data.responseStatus === 200) {
        setTasks(response.data.posts);
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  // Fetch projects from the API
  const fetchProjects = async () => {
    try {
      const response = await ApiService.getProjectList({
        api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
       table_name: "project"
      });
      console.log(response.data.posts[0])
      console.log(response.data.count)
      if (response.data && response.data.responseStatus === 200) {
        const posts = response.data.posts; // Extract the posts array
        const count = response.data.count; // Get the count of posts

        // Map the posts array to a format suitable for the Picker
        const projectList = posts.map((post) => ({
          label: post.name, // Use the project name as the label
          value: post.id,   // Use the project ID as the value
        }));
        
        setProjects(projectList);
        if (projectList.length > 0) {
          setSelectedProject(projectList);
          console.log(projectList) // Set the first project as default
        }
      } }catch (error) {
      console.error('Error fetching projects:', error);
    }
  };
  
  const getCurrentTime = () => {
    const now = new Date(); // Get the current date and time
    const hours = now.getHours(); // Get the current hour (0-23)
    const minutes = now.getMinutes(); // Get the current minute (0-59)
  
    // Format the time as HH:mm
    const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  
    console.log('Current Time:', formattedTime);
    return formattedTime;
  };
  
  // Example usage
  const currentTime = getCurrentTime();
  console.log('Formatted Time:', currentTime);

  // Add a new task
  const addTask = async () => {
    console.log(selectedProject)
    
    setLoading(true);
    try {
      const response = await axios.post('https://startupworld.in/Webservices/api3.php?action=Add_Update_Task', {
        api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
        student_id: userData.User_Details[0].id, // Replace with dynamic student ID
        task_title: taskTitle,
        activity_status: taskStatus,
        project: selectedProject,
        remark: taskRemark,
        time_spent: getCurrentTime, // Replace with actual time spent
      });
      if (response.data.responseStatus === 200) {
        setModalVisible(false);
        fetchTasks(); // Refresh the task list
      } else {
        alert(response.data.responseMessage);
      }
    } catch (error) {
      console.error('Error adding task:', error);
    } finally {
      setLoading(false);
    }
  };
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return { backgroundColor: "#4CAF50" }; // Green
      case "pending":
        return { backgroundColor: "#FFC107" }; // Yellow
      case "in progress":
        return { backgroundColor: "#03A9F4" }; // Blue
      default:
        return { backgroundColor: "#9E9E9E" }; // Grey
    }
  };
  const getStatusIcon = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return <MaterialIcons name="check-circle" size={14} color="#FFF" style={styles.statusIcon} />;
      case "pending":
        return <MaterialIcons name="hourglass-empty" size={14} color="#FFF" style={styles.statusIcon} />;
      case "in progress":
        return <MaterialIcons name="sync" size={14} color="#FFF" style={styles.statusIcon} />;
      default:
        return <MaterialIcons name="help-outline" size={14} color="#FFF" style={styles.statusIcon} />;
    }
  };

  const handleEditPress = (task) => {
    setSelectedTask(task);
    setModalVisible1(true);
  };

  const sendViaWhatsApp = () => {
    const message1 = "DAILY REPORT"+"_"+selectedTask?.created_date.substring(0,10).split("T")[0].replace(/-/g, "")+"_"+initials;
    const message = `\nTask Report:\nProject: ${selectedTask?.project_name}\nTask: ${selectedTask?.task_title}\nStatus: ${selectedTask?.activity_status}`;
    const url = `whatsapp://send?text=${encodeURIComponent(message1+message)}`;
    Linking.openURL(url);
    setModalVisible(false);
  };

  const sendViaGmail = () => {
    const subject = "DAILY REPORT"+"_"+selectedTask?.created_date.substring(0,10).split("T")[0].replace(/-/g, "")+"_"+initials ;
    const body = `Project: ${selectedTask?.project_name}\nTask: ${selectedTask?.task_title}\nDetails: ${selectedTask?.remark}\nStatus: ${selectedTask?.activity_status}`;
    const email = "avi@blueplanetsolutions.com";
    const url = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    Linking.openURL(url);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Tasks</Text>
      <FlatList
       data={tasks.filter((_, index) => index % 2 === 0)}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => setExpandedTask(expandedTask === item.id ? null : item.id)}>
          <View style={styles.taskCard}>
            {/* Header Section */}
            <View style={styles.taskHeader}>
              <Text style={styles.projectName}>{item.project_name}</Text>
              <TouchableOpacity onPress={() => handleEditPress(item)}>
                  <Octicons name="paper-airplane" size={22} color="#6200EE" />
                </TouchableOpacity>            </View>

            {/* Task Title & Status */}
            <View style={styles.taskRow}>
              <Text style={styles.label}>Task:</Text>
              <Text style={styles.taskTitle}>{item.task_title}</Text>
            </View>
            <View style={styles.taskRow}>
              <Text style={styles.label}>Status:</Text>
              <View style={[styles.statusBadge, getStatusColor(item.activity_status)]}>
                {getStatusIcon(item.activity_status)}
                <Text style={styles.statusText}>{item.activity_status}</Text>
              </View>
            </View>

            {/* Expandable Section */}
            {expandedTask === item.id && (
              <View>
                <View style={styles.taskRow}>
                  <Text style={styles.label}>Current Task:</Text>
                  <Text style={styles.taskDetail}>{item.current_task}</Text>
                </View>
                <View style={styles.taskRow}>
                  <Text style={styles.label}>Remarks:</Text>
                  <Text style={styles.taskRemark}>{item.remark}</Text>
                </View>
                <View style={styles.taskRow}>
                  <Text style={styles.label}>Date:</Text>
                  <Text style={styles.taskDate}>{item.created_date.substring(0,10).split("T")[0].replace(/-/g, "")}</Text>
                </View>
                <View style={styles.taskRow}>
                  <Text style={styles.label}>Time:</Text>
                  <Text style={styles.taskDate}>{item.created_date.substring(11,19)}</Text>
                </View>
                
              </View>
            )}
          </View>
        </TouchableOpacity>
      )}
      removeClippedSubviews={false}
    />
    <Modal visible={modalVisible1} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Send Task Report Via:</Text>
            <Button title="WhatsApp" onPress={sendViaWhatsApp} />
            <Button title="Gmail" onPress={sendViaGmail} />
            <Button title="Cancel" onPress={() => setModalVisible1(false)} color="red" />
          </View>
        </View>
      </Modal>
      <TouchableOpacity style={styles.addTaskButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addTaskText}>+ Add New Task</Text>
      </TouchableOpacity>

      {/* Add Task Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Task Title"
              value={taskTitle}
              onChangeText={setTaskTitle}
              placeholderTextColor={"#c5c5c5"}
            />
            <Picker
              placeholderTextColor={"#c5c5c5"}
              selectedValue={taskStatus}
              style={styles.picker}
              onValueChange={(itemValue) => {
                console.log("abcs");
                setTaskStatus(itemValue)}}
            >
              <Picker.Item label="In Progress" value="In Progress" />
              <Picker.Item label="Completed" value="Completed" />

            </Picker>
            {console.log(selectedProject)}
            {console.log("xxxxx")}
            <Picker
              selectedValue={selectedProject}
              style={styles.picker}
              onValueChange={(itemValue) => {
                console.log('Selected Project ID:', itemValue);
                setSelectedProject(itemValue);
              }}
            >
              {projects.map((project) => (
  <Picker.Item key={project.value} value={project.label} label={project.label} />
))}
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Remark"
              value={taskRemark}
              onChangeText={setTaskRemark}
              placeholderTextColor={"#c5c5c5"}

            />
            <Button title="Add Task" onPress={addTask} disabled={loading} />
            {loading && <ActivityIndicator size="small" color="#6200EE" />}
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F7FA',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: "#FFF",
    padding: 14,
    marginVertical: 8,
    marginHorizontal: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  taskHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  taskRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
    marginRight: 5,
  },
  projectName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
  },
  taskTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#424242",
    flex: 1,
  },
  taskDetail: {
    fontSize: 14,
    color: "#757575",
    flex: 1,
  },
  statusBadge: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
  statusIcon: {
    marginRight: 5,
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFF",
    textTransform: "uppercase",
  },
  taskRemark: {
    fontSize: 12,
    color: "#616161",
    fontStyle: "italic",
    flex: 1,
  },
  taskDate: {
    fontSize: 12,
    color: "#9E9E9E",
    flex: 1,
  },
  addTaskButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addTaskText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default BookScreen;