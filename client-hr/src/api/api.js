import axios from 'axios';


const API = axios.create({ baseURL: 'https://api-hr-stack.xyz' });

// const API = axios.create({ baseURL: 'http://localhost:4000' });


export const signIn = (formData) => API.post('/hr/signin', formData);
export const fetchEmployeeData = (id) => API.get('/hr/fetchEmployeeData?id='+id);
export const fetchStats =  () => API.get('/hr/fetchStats');
export const getPendingTimeSheet= ()=> API.get('/hr/getPendingTimeSheet')
export const timeSheetApprove=(data)=>API.post('/hr/timeSheetApprove', data)
export const createEvent=(data)=>API.post('/hr/createEvent', data)
export const addEmployee=  (data) => API.post("/hr/add-employee", data)
export const submitTicket = (form)=> API.post('/submitTicket', form)
export const myTickets = (id)=> API.get('/myTickets?userID='+id)
export const leaveApprove = (formData)=> API.post('/leaveApprove', formData)
export const leaveDecline = (data)=> API.post('/leaveDecline',data)
export const activeTickets = ()=> API.get('/activeTickets')
export const approveLearning = (form)=> API.post('/hr/approveLearning', form)
export const declineLearning = (form)=> API.post('/hr/declineLearning', form)
export const getLeaveRequest=()=> API.get('/hr/getAllLeaveRequest')
export const getAllEmployees=()=> API.get('/hr/getAllEmployees')
export const getLearningRequest = ()=> API.get('/hr/getLearningRequest')
export const fetchCompanyInfo = ()=> API.get('/hr/fetchCompanyInfo')
export const saveProfile = (data)=> API.patch('/hr/saveProfile',data)
export const getSkillsRequest = ()=> API.get('/hr/getSkillsRequest')
export const skillreject = (form)=> API.post('/hr/skillreject', form)
export const skillApprove = (form)=> API.post('/hr/skillApprove', form)
export const createAnnouncement = (form) => API.post('/hr/createAnnouncement', form)
export const getCabRequest = ()=>API.get('/hr/getCabRequest')
export const cabDecline = (form) => API.post('/hr/cabDecline', form)
export const cabApprove = (id)=> API.get('/hr/cabApprove?id='+id)
export const getSperationRequest = ()=>API.get("/hr/getSperationRequest")
export const getTransferRequest = ()=>API.get("/hr/getTransferRequest")
export const approveSeperation = (data)=> API.patch('/hr/approveSeperation',data)
export const declineSeperation = (data)=> API.patch('/hr/declineSeperation',data)
export const approveTransfer = (data)=> API.patch('/hr/approveTransfer',data)
export const declineTransfer = (data)=> API.patch('/hr/declineTransfer',data)
export const getAllEmployeesBySkills=()=> API.get('/hr/getAllEmployeesBySkills')
export const submitAward = (form) => API.post('/hr/submitAward', form)
export const getAllManagers=()=> API.get('/hr/getAllManagers')
export const getPerformer = ()=>API.get("/hr/getPerformer")
export const unsetPerformer = (form) => API.post('/hr/unsetPerformer', form)
export const getAllEmployeesName=()=> API.get('/hr/getAllEmployeesName')
export const getFullData=(id)=> API.get('/hr/getFullData?id='+id)
export const getMonth=()=> API.get('/hr/getMonth')
export const getCurrentMonthTmeSheet = (form) => API.post('/hr/getCurrentMonthTmeSheet', form)
export const submitPayment = (form) => API.post('/hr/submitPayment', form)
export const addDesiginationTo = (form) => API.post('/hr/addDesigination', form)
export const submitProject = (form) => API.post('/hr/submitProject', form)
export const changePostion = (form) => API.post('/hr/changePostion', form)
export const changeProject = (form) => API.post('/hr/changeProject', form)

