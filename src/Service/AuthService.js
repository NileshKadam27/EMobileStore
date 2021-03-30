import axios from "axios";

const API_URL = "http://localhost:8080/mobilestore/customer";

class AuthService {
  login(email, password) {
    const fd=new FormData();
    fd.append('email',email);
    fd.append('password',password);
    
    return axios.post("http://localhost:8080/mobilestore/customer/login",fd)
      .then(response => {
       
            if (response) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        return response;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(custName, email, password,mobileNo) {
    
    const fd=new FormData();
    fd.append('custName',custName);
    fd.append('email',email);
    fd.append("password",password);
    fd.append("mobileNo",mobileNo);
    
    
    return axios.post("http://localhost:8080/mobilestore/customer/register",fd)
      .then(response => {
       
           
        return response;
      });
  }

  AdminLogin(email, password) {
    const fd=new FormData();
    fd.append('email',email);
    fd.append('password',password);
    
    return axios.post("http://localhost:8080/mobilestore/admin/login",fd)
      .then(response => {
       
            if (response) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
        return response;
      });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();
