import axios from 'axios';


const API = axios.create({ baseURL: 'https://api-hr-stack.xyz' });

// const API = axios.create({ baseURL: 'http://localhost:4000' });
export const signIn = (formData) => API.post('/signin', formData);
export const fetchEmployeeData = (id) => API.get('/fetchEmployeeData?id='+id);
export const getTimeSheet = (id)=> API.get("/get-timesheet?id="+id)
export const timeIn = (id)=> API.post("/timeIn", id)
export const timeOut = (id)=> API.post("/timeOut",id)
export const timeInStats =(id)=> API.get("/timeInStats?id="+id)
export const timeOutStats =(id)=> API.get("/timeOutStats?id="+id)
export const getEvents = ()=> API.get('/getEvents')
export const leaveApprove = (formData)=> API.post('/leaveApprove', formData)
export const leaveDecline = (data)=> API.post('/leaveDecline',data)
export const submitLeave = (form)=> API.post('/submitLeave',form)
export const getLeaveRequest=()=> API.get('/getLeaveRequest')
export const submitTicket = (form)=> API.post('/submitTicket', form)
export const activeTickets = ()=> API.get('/activeTickets')
export const myTickets = (id)=> API.get('/myTickets?userID='+id)
export const setPriority = (form)=>API.post('/setPriority', form)
export const submitLearningRequest = (form) => API.post('/submitLearningRequest', form)
export const getMyLearnings = (id)=> API.get('/getMyLearnings?id='+id)
export const submitAddress = (form)=> API.patch('/submitAddress', form)
export const submitPersonalInfo =(form)=> API.patch('/submitPersonalInfo', form)
export const submitSkills = (form)=> API.post('/submitSkills', form)
export const getMyskills = (id) => API.get('/getMyskills?id='+id)
export const getAnnouncements = ()=> API.get('/getAnnouncements')
export const getLearningRequest = ()=>API.get('/hr/getLearningRequest')
export const submitProfilePhoto =(form)=>API.patch('/submitProfilePhoto', form)
export const submitAssetReq =(form)=>API.post('/submitAssetReq', form)
export const getMyassets = (id) => API.get('/getMyassets?id='+id)
export const getAssetRequest = ()=>API.get('/getAssetRequest')
export const getCabRequest = ()=>API.get('/hr/getCabRequest')
export const checkLeaveStatus = (id)=> API.get('/checkLeaveStatus?id='+id)
export const submitCabRequest = (form)=> API.post('/submitCabRequest', form)
export const checkCabStatus = (id)=> API.get('/checkCabStatus?id='+id)
export const myCabs = (id)=> API.get('/myCabs?id='+id)
export const submitSeperation= (form) => API.post('/submitSeperation', form)
export const getSeperationInfo = (id)=> API.get('/getSeperationInfo?id='+id)
export const submitTransfer= (form) => API.post('/submitTransfer', form)
export const getTransferInfo = (id)=> API.get('/getTransferInfo?id='+id)
export const getPerformer = ()=> API.get('/getPerformer')
export const getMonths = ()=> API.get('/getMonths')
export const getNotification = (id) => API.get('/getNotification?id='+id)
export const getHoliday = ()=> API.get('/getHoliday')
// todo

export const setAssetReqPriority = (form)=>API.post('/setAssetReqPriority', form)


