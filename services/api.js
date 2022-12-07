import { AsyncStorage } from "react-native";
class APIService {
  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
      console.log("setted");
    } catch (error) {
      // Error saving data
    }
  }

  async getItem(key) {
    try {
      let token = await AsyncStorage.getItem(key);
      token = JSON.stringify(token).replace('"', "");
      token = token.replace('"', "");
      return token;
    } catch (error) {
      // Error retrieving data
      return -1;
    }
  }

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  }

  async post(url, params) {
    let token = await this.getItem("token");
    const data = JSON.stringify(params);
    return fetch(`http://13.37.110.92:8000/api/v1${url}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log("mzk", err);
      });
  }
  async get(url) {
    let token = await this.getItem("token");

    return fetch(`http://13.37.110.92:8000/api/v1${url}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log("mzk", err);
      });
  }
  async delete(url) {
    let token = getItem("Token");

    return fetch(`http://13.37.110.92:8000/api/v1${url}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log("mzk", err);
      });
  }
  async put(url, params) {
    let token = getItem("Token");
    const data = JSON.stringify(params);
    return fetch(`http://13.37.110.92:8000/api/v1${url}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: data,
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((err) => {
        console.log("mzk", err);
      });
  }
}
let API = new APIService();
export { API };
