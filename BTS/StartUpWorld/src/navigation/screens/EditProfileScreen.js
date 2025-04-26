import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { AuthContext } from '../../../AuthContext';
import { Picker } from '@react-native-picker/picker';
import ApiService from '../../../api/apiServices';

export default function EditProfileScreen() {
  
  const { userData, profileData } = useContext(AuthContext);
  const profileInfo = profileData.User_Info;

  const [formData, setFormData] = useState({
    Full_Name: profileInfo.Full_Name,
    Gender: profileInfo.Gender,
    Address: profileInfo.Address,
    City: profileInfo.City,
    State: profileInfo.State,
    Country: profileInfo.Country,
    work_category_id: profileInfo.work_category_id,
    work_type: profileInfo.work_type,
    user_id:userData.User_Details[0].id,
    api_key:"efc10cqkr4Ta29EIYolGsAxRiwOBVmDgn3X9e5ZMKzyC8bsv7u"
  });

  const workCategories = [
    'Android Development', 'Campus TV', 'Campus Radio', 'Content Writer', 'CRS', 'Coordination', 'KDataScience',
    'Design SMC', 'Designer', 'Digital Marketing', 'Gaming', 'KManagement', 'Operation', 'Masscom',
    'Product Design', 'Software Testing', 'Telemarketing', 'Web Development'
  ];

  const workTypes = [
    'Android', 'PHP', 'iOS', 'WordPress', 'Data Science', '.NET', 'Networking', 'Web Development', 'Python', 'Android Apps'
  ];

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSave = async () => {
    try {
      const response = await ApiService.updateProfile(formData)
      console.log(JSON.stringify(formData))
      
      const result = await response.json();
      console.log(response)
      if (result.responseStatus === 200) {
        updateProfile(formData);
        Alert.alert('Success', 'Profile updated successfully!');
      } else {
        Alert.alert('Error', result.message || 'Failed to update profile');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: profileInfo.User_Image || 'https://via.placeholder.com/120' }}
          style={styles.profileImage}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Edit Profile</Text>
        <TextInput style={styles.input} value={formData.Full_Name} onChangeText={(text) => handleChange('Full_Name', text)} placeholder="Full Name" />
        <TextInput style={styles.input} value={formData.Gender} onChangeText={(text) => handleChange('Gender', text)} placeholder="Gender" />
        <TextInput style={styles.input} value={formData.Address} onChangeText={(text) => handleChange('Address', text)} placeholder="Address" />
        <TextInput style={styles.input} value={formData.City} onChangeText={(text) => handleChange('City', text)} placeholder="City" />
        <TextInput style={styles.input} value={formData.State} onChangeText={(text) => handleChange('State', text)} placeholder="State" />
        <TextInput style={styles.input} value={formData.Country} onChangeText={(text) => handleChange('Country', text)} placeholder="Country" />
        
        <Text style={styles.label}>Work Category</Text>
        <Picker selectedValue={formData.work_category_id} onValueChange={(value) => handleChange('work_category_id', value)}>
          {workCategories.map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>

        <Text style={styles.label}>Work Type</Text>
        <Picker selectedValue={formData.work_type} onValueChange={(value) => handleChange('work_type', value)}>
          {workTypes.map((type) => (
            <Picker.Item key={type} label={type} value={type} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save Changes</Text>
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
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
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
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 14,
    color: '#333',
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
  },
  saveButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
