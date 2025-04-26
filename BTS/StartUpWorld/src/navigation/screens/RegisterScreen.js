

import React, { useState, } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  useColorScheme,
  View,Clipboard,
  Button,
  FlatList
} from "react-native";

const RegisterScreen = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [collegeName, setCollegeName] = useState('');
  const [collegeList, setCollegeList] = useState([]);
  const [selectedCollegeId, setSelectedCollegeId] = useState('');
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    mobile: "",
    countryCode: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    college_id: "",
  });

  const genderItems = ["Male", "Female", "Other"];
  const roleItem = [
    "Android Development",
    "Campus Radio",
    "Campus TV",
    "Content Writer",
    "Coordination",
    "CSR",
    "Data Science",
    "Design smc",
    "Designer",
    "Digital Marketing",
    "Gaming",
    "Management",
    "Masscom",
    "Operations",
    "Product Design",
    "Software Testing",
    "Telemarketing",
    "Web Development",
  ];

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,14}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async () => {
    const { fullName, gender, mobile, countryCode, email, password, confirmPassword, role, college_id } = formData;
  
    
    if (!fullName || !gender || !mobile || !countryCode || !email || !password || !confirmPassword || !role || !college_id) {
      Alert.alert("Error", "Please fill all fields!");
      console.log(selectedCollegeId);
      console.log(role);
      return;
    }
  
    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must be 8-14 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }
  
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match!");
      return;
    }
  
    const payload = {
      entity: "student",
      full_name: fullName,
      gender,
      country_code: countryCode,
      mobile,
      email,
      pwd: password,
      confirm_pwd: confirmPassword,
      college_id,
      role,
      api_key: "efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u",  // Make sure to use your correct API key
    };
    console.log(JSON.stringify(payload));
  
    try {
      const response = await fetch("https://dev.startupworld.in/Webservices2/api5.php?action=student_registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
  
      const result = await response.json();
  
      if (result.status === "success" || result.responseStatus === 200) {
        const successMessage = result.User_Id 
        ? `You have been successfully registered! Your User ID is: ${result.User_Id}` 
        : "Registration Success";
      
      Alert.alert("Success", successMessage);        
        setFormData({
          fullName: "",
          gender: "",
          mobile: "",
          countryCode: "",
          email: "",
          password: "",
          confirmPassword: "",
          profession: "",
          college_id: "",
        });
      } else {
        Alert.alert("Error", result.message || "Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "Failed to connect to the server.");
    }
  };


  

  const validateCollege = async () => {
    if (!collegeName.trim()) {
      Alert.alert('Error', 'Please enter a college name.');
      return;
    }

    try {
      const response = await fetch(
        'https://startupworld.in/Webservices/api3.php?action=Validate_CollegeID',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_key: 'efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u',
            College_ID: '',
            College_Name: collegeName,
          }),
        }
      );

      const data = await response.json();

      if (data.posts && data.posts.length > 0) {
        setCollegeList(data.posts);
      } else {
        Alert.alert('No Results', 'No colleges found with the entered name.');
        setCollegeList([]);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to fetch college data.');
    }
  };

  const handleCollegeSelection = (collegeId) => {
    setSelectedCollegeId(collegeId);
    formData.college_id = collegeId;
    setCollegeList([]); 
    console.log('Selected College ID:', collegeId);
  };
  


  const styles = createStyles(isDarkMode);

  return (
    <ScrollView
      style={styles.container}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <Image source={{ uri: "https://startupworld.in/image/theme/logo.png" }} style={styles.logo} />
      <Text style={styles.heading}>Registration Form</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
        onChangeText={(text) => setFormData({ ...formData, fullName: text })}
        value={formData.fullName}
      />

      <View style={styles.selector}>
        {genderItems.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.selectorItem, formData.gender === item && styles.selectorItemActive]}
            onPress={() => setFormData({ ...formData, gender: item })}
          >
            <Text style={[styles.selectorText, formData.gender === item && styles.selectorTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", width: "100%", gap: 10 }}>
  {/* Country Code Field */}
  <TextInput
    style={{
      width: "25%", 
      borderWidth: 1,
      borderColor: isDarkMode ? "#333" : "#ccc",
      borderRadius: 10,
      padding: 15,
      marginBottom:20,
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
    }}
    placeholder="+91"
    placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
    keyboardType="phone-pad"
    onChangeText={(text) => setFormData({ ...formData, countryCode: text })}
    value={formData.countryCode}
  />
  
  {/* Mobile Number Field */}
  <TextInput
    style={{
      flex: 1, 
      borderWidth: 1,
      borderColor: isDarkMode ? "#333" : "#ccc",
      borderRadius: 10,
      padding: 15,
      marginBottom:20,
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
    }}
    placeholder="Mobile Number"
    placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
    keyboardType="phone-pad"
    onChangeText={(text) => setFormData({ ...formData, mobile: text })}
    value={formData.mobile}
  />
</View>


      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
        keyboardType="email-address"
        onChangeText={(text) => setFormData({ ...formData, email: text })}
        value={formData.email}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, password: text })}
        value={formData.password}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
        secureTextEntry
        onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
        value={formData.confirmPassword}
      />


<TextInput
        style={styles.input}
        value={collegeName}
        onChangeText={setCollegeName}
        placeholder="College Name"
        placeholderTextColor={isDarkMode ? "#888" : "#aaa"}
      />
      <Button title="Validate" onPress={validateCollege} />
      {collegeList.length > 0 && (
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Select a College:</Text>
          <FlatList
            data={collegeList}
            keyExtractor={(item) => item.college_id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleCollegeSelection(item.college_id)}
              >
                <Text>{item.college_name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
      {selectedCollegeId && (
        <Text style={styles.selectedText}>Selected College ID: {selectedCollegeId}</Text>
      )}







      

      <View style={styles.selector}>
        {roleItem.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.selectorItem, formData.role === item && styles.selectorItemActive]}
            onPress={() => setFormData({ ...formData, role: item })}
          >
            <Text style={[styles.selectorText, formData.role === item && styles.selectorTextActive]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const createStyles = (isDarkMode) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#121212" : "#f9f9f9",
      padding: 20,
    },
    logo: {
      width: 400,
      height: 150,
      alignSelf: "center",
      marginBottom: 20,
    },
    heading: {
      fontSize: 22,
      fontWeight: "bold",
      textAlign: "center",
      color: isDarkMode ? "#fff" : "#333",
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: isDarkMode ? "#333" : "#ccc",
      borderRadius: 10,
      padding: 15,
      marginBottom: 20,
      backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
      color: isDarkMode ? "#fff" : "#333",
    },
    selector: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginBottom: 20,
    },
    selectorItem: {
      padding: 10,
      margin: 5,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: isDarkMode ? "#333" : "#ccc",
    },
    selectorItemActive: {
      backgroundColor: isDarkMode ? "#333" : "#ccc",
    },
    selectorText: {
      color: isDarkMode ? "#fff" : "#333",
    },
    selectorTextActive: {
      fontWeight: "bold",
    },
    button: {
      backgroundColor: "#4CAF50",
      padding: 15,
      borderRadius: 10,
      alignItems: "center",
      marginTop: 10,
    },
    buttonText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    
    dropdownContainer: {
      marginTop: 16,
    },
    dropdownItem: {
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    selectedText: {
      marginTop: 16,
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
    },
  });

export default RegisterScreen;
