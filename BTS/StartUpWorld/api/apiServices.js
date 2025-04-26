import { apiClient } from './apiClient';

const ApiService = {
    // Error Logging
    logError: (data) => apiClient.post('error_log_ws.php', data),

    // Team Details
    getTeamStatus: (data) => apiClient.post('Webservices/api3.php?action=Team_Details', data),

    // Role List
    getRoleList: (data) => apiClient.post('Webservices/api3.php?action=Role_List', data),

    // Team List
    getTeamList: (data) => apiClient.post('Webservices/api3.php?action=Team_List', data),

    // Employee Registration
    registerEmployee: (data) => apiClient.post('api2/api2.php?x=addEmployeeProfile', data),

    // Sponsorer Registration
    registerSponsorer: (data) => apiClient.post('api2/api2.php?x=interns_profile_api', data),

    // Student Profile
    showStudentProfile: (data) => apiClient.post('Webservices/api3.php?action=student_profile_show', data),

    // Forgot Password
    forgotPassword: (data) => apiClient.post('api2/api2.php?action=forgot_password', data),

    // Student Login
    studentLogin: (data) => apiClient.post('Webservices/api3.php?action=student_login', data),

    // Get Project List
    getProjectList: (data) => apiClient.post('Webservices/api3.php?action=Master_List', data),

    // Student Registration
    registerStudent: (data) => apiClient.post('Webservices/api3.php?action=student_registration', data),

    // Add Task
    addTask: (data) => apiClient.post('Webservices/api3.php?action=Add_Update_Task', data),

    // Work Type List
    getWorkTypeList: (data) => apiClient.post('/Webservices/api3.php?action=Work_Type_List', data),

    // Validate College ID
    validateCollegeID: (data) => apiClient.post('Webservices/api3.php?action=Validate_CollegeID', data),

    // Teacher Registration
    registerTeacher: (data) => apiClient.post('/Webservices/api3.php?action=teacher_registration', data),

    // Staff Login
    staffLogin: (data) => apiClient.post('Webservices/api3.php?action=staff_login', data),

    // Get Student List
    getStudentList: (data) => apiClient.post('Webservices/api3.php?action=show_student_list', data),

    // Student CRM
    getStudentCRM: (data) => apiClient.post('Webservices/api3.php?action=create_crm', data),

    // Teacher CRM
    getTeacherCRM: (data) => apiClient.post('Webservices/api3.php?action=create_crm', data),

    // Search Student CRM
    searchStudent: (data) => apiClient.post('Webservices/api3.php?action=search_in_crm', data),

    // Search Teacher CRM
    searchTeacher: (data) => apiClient.post('Webservices/api3.php?action=search_in_crm', data),

    // Get Student Task List
    getTaskList: (data) => apiClient.post('Webservices/api3.php?action=student_task_list', data),

    // Assign Task
    assignTask: (data) => apiClient.post('Webservices/api3.php?action=Assign_Task', data),

    // View Previous Task List
    viewPreviousTasks: (data) => apiClient.post('Webservices/api3.php?action=assigned_task_list', data),

    // Edit Profile
    updateProfile: (data) => apiClient.post('Webservices/api3.php?action=student_profile_update', data),

    // Student Team Project Details
    setStudentTeam: (data) => apiClient.post('Webservices/api3.php?action=student_team_proj_details', data),

    // Send OTP
    sendOTP: (data) => apiClient.post('api2/api2.php?action=send_otp', data),

    // Verify OTP
    verifyOTP: (data) => apiClient.post('api2/api2.php?x=varify_otp', data),

    // Forgot Password OTP
    sendForgotPasswordOTP: (data) => apiClient.post('Version1/Forgot_password.php?x=send_otp', data),

    // Verify Forgot Password OTP
    verifyForgotPasswordOTP: (data) => apiClient.post('Version1/Forgot_password.php?x=varify_otp', data)
};

export default ApiService;
