import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you're using Expo for vector icons
import { useNavigation } from '@react-navigation/native'; // Navigation hook
import { ProgressBar } from 'react-native-paper';

const ProfileScreen = () => {
  const navigation = useNavigation(); // Navigation hook

  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  const handleSettings = () => {
    // Navigate to settings screen or implement settings logic here
  };

  const handleAddCourse = () => {
    navigation.navigate('CourseContent'); // Navigate to CourseContentScreen
  };

  const handleViewContent = (content) => {
    // Navigate to CourseContentScreen passing the content
    navigation.navigate('CourseContent', { content });
  };

  // Sample data for courses and their progress
  const courses = [
    { 
      id: '1', 
      title: 'HTML', 
      progress: 0.6, 
      description: 'This is the description for Course 1.', 
      content: 'Course content for Course 1. This could be a long text describing the course content in detail.',
      image: require('../assets/course1.png')
    },
    { 
      id: '2', 
      title: 'CSS', 
      progress: 0.3, 
      description: 'This is the description for Course 2.', 
      content: 'Course content for Course 2. This could be a long text describing the course content in detail.',
      image: require('../assets/course2.png')
    },

    // Add more courses as needed
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sidebarIcon} onPress={toggleSidebar}>
        <MaterialIcons name={sidebarVisible ? 'menu-open' : 'menu'} size={24} color="black" />
      </TouchableOpacity>
      {sidebarVisible && (
        <View style={styles.sidebar}>
          <Image source={require('../assets/profile.jpg')} style={styles.profileImage} />
          <Text style={styles.profileTitle}>John Doe</Text>
          <TouchableOpacity style={styles.sidebarButton} onPress={handleSettings}>
            <MaterialIcons name="settings" size={24} color="black" />
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sidebarButton} onPress={handleLogout}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.content}>
        <Text style={styles.title}>My Courses</Text>
        {courses.map(course => (
          <View key={course.id} style={styles.courseItem}>
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseTitle}>{course.title}</Text>
            <ProgressBar progress={course.progress} color={'blue'} style={styles.progressBar} />
            <Text style={styles.courseDescription}>{course.description}</Text>
            <Button title="View Content" onPress={() => handleViewContent(course.content)} />
          </View>
        ))}
        <TouchableOpacity style={styles.addButton} onPress={handleAddCourse}>
          <Text style={styles.addButtonLabel}>Add Another Course</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebarIcon: {
    padding: 10,
  },
  sidebar: {
    width: 200,
    backgroundColor: '#F0F8FF', // Cyan color
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    marginBottom: 10,
    borderRadius: 40, // Make it round
  },
  profileTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sidebarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    marginLeft: 10,
  },
  courseItem: {
    marginBottom: 20,
  },
  courseTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  courseDescription: {
    marginBottom: 10,
  },
  progressBar: {
    height: 10,
    marginBottom: 10,
  },
  courseImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonLabel: {
    color: 'white',
    fontSize: 16,
  },
});

export default ProfileScreen;