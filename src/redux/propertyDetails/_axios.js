import axios from "axios";

export function addPropertyDetails(data, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  //139.59.36.120
  //localhost:9000
  axios
    .post("http://139.59.36.120/propertyDetail", data, { headers: headers })
    .then(response => callback(response))
    .catch(handleErrors);
}

export function addAssessee(data, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post("http://139.59.36.120/assesseeDetail", data, { headers: headers })
    .then(() => callback())
    .catch(handleErrors);
}

export function addLien(data, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post("http://139.59.36.120/lienDetail", data, { headers: headers })
    .then(() => callback())
    .catch(handleErrors);
}

export function addImportantDate(data, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post("http://139.59.36.120/importantDates", data, { headers: headers })
    .then(() => {
      callback();
    })
    .catch(handleErrors);
}

/* Grid Data Loader */
export function getPropertyData(pageNo = 0, pageSize = 5, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "http://139.59.36.120/propertyDataList",
      {
        pageNo: pageNo,
        pageSize: pageSize
      },
      { headers: headers }
    )
    .then(res => {
      callback(res.data);
    })
    .catch(handleErrors);
}

export function getLienData(pageNo = 0, pageSize = 0, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "http://139.59.36.120/lienDataList",
      {
        pageNo: pageNo,
        pageSize: pageSize
      },
      { headers: headers }
    )
    .then(res => {
      callback(res.data);
    })
    .catch(handleErrors);
}

export function getAssesseeData(pageNo = 0, pageSize = 5, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .post(
      "http://139.59.36.120/assesseeDataList",
      {
        pageNo: pageNo,
        pageSize: pageSize
      },
      { headers: headers }
    )
    .then(res => {
      callback(res.data);
    })
    .catch(handleErrors);
}

/* Get Details */
function getPropertyDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `http://139.59.36.120/propertyRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getLienDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `http://139.59.36.120/lienRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getAssesseeDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `http://139.59.36.120/assesseeRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

function getDateDetails(id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  return axios.get(
    `http://139.59.36.120/DatesRecord/${id}?propertyNumber=${propertyNumber}`,
    { headers: headers }
  );
}

export function getDetails(id, propertyNumber, callback) {
  axios
    .all([
      getPropertyDetails(id, propertyNumber),
      getLienDetails(id, propertyNumber),
      getAssesseeDetails(id, propertyNumber),
      getDateDetails(id, propertyNumber)
    ])
    .then(res => callback(res))
    .catch(handleErrors);
}

/* Edit Requests */
export function editPropertyDetails(data, id, propertyNumber, callback) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `http://139.59.36.120/propertyRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => {
      console.log(response);
      callback("primary");
    })
    .catch(handleErrors);
}

export function editAssessee(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `http://139.59.36.120/assesseeRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(handleErrors);
}

export function editLien(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `http://139.59.36.120/lienRecordUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(handleErrors);
}

export function editImportantDate(data, id, propertyNumber) {
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer " + localStorage.getItem("user_id")
  };
  axios
    .put(
      `http://139.59.36.120/importantDatesUpdate/${id}?propertyNumber=${propertyNumber}`,
      data,
      { headers: headers }
    )
    .then(response => console.log(response))
    .catch(handleErrors);
}

function handleErrors(err) {
  window.location = "/";
  localStorage.removeItem("user_id");
}
