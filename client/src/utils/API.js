import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {

  //----------- USERS -----------//
  createUser: function(userData){
    return axios.post("/api/user", userData);
  },

  updateUser: function(fbUserID, userData){
    return axios.put("/api/user/" + fbUserID, userData);
  },

  getUser: function(fbUserID){
    return axios.get("/api/user" + fbUserID);
  },

  //----------- TESTS-----------//
  createTest: function(testData){
    return axios.post("/api/test", testData);
  },

  //Will need to call the current user to get the current test version, then call this
  //This should also return all questions for that test 
  getTest: function(version){
    return axios.get("/api/test/" + version)
  },

  //----------- QUESTIONS -----------//
  createQuestion: function(testID, questionData){
    return axios.post("/api/question/" + testID, questionData);
  },

  //Need to call the test version first, then you can get an array of questions, then get the individual question info
  //Can be used to know which questions the user got wrong
  getQuestion: function(id){
    return axios.get("/api/question" + id)
  }


};
