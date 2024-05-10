exports.createTask = (p_data) => {
  return fetch(`https://todobackend-c81h.onrender.com/api/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(p_data),
  })
    .then((response) => {
      return new Promise((resolve, reject) => {
        resolve(response.json());
      });
    })

    .catch((err) => console.log(err));
};

exports.getallTasks = () => {
  return fetch(`https://todobackend-c81h.onrender.com/api/tasks`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.deleteTask = (id) => {
  return fetch(`https://todobackend-c81h.onrender.com/api/taskDelete/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.updateTask = (id) => {
  return fetch(`https://todobackend-c81h.onrender.com/api/update/${id}`, {
    method: "PUT",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

exports.updateTask_item = (id, data) => {
  return fetch(`https://todobackend-c81h.onrender.com/api/updateTask/${id}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
