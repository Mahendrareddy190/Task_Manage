import React, { useEffect, useState } from "react";
import "./Todo.css";
import swal from "sweetalert";
import Taskitems from "./Taskitems";
import Navbar from "./Navbar";
import {
  createTask,
  deleteTask,
  getallTasks,
  updateTask,
  updateTask_item,
} from "../helpers/backend_helper_methods";
const Todo = () => {
  const [Value, setValue] = useState({
    task_title: "",
  });
  const [reload, setReload] = useState(false);
  const [search, setSearch] = useState("");
  const { task_title } = Value;
  const [todo, setTasks] = useState([]);

  const getAlltasks = async () => {
    let data = await getallTasks();
    setTasks(data);
  };

  useEffect(() => {
    getAlltasks();
  }, [reload]);

  const onDeleteItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this task..!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((value) => {
      if (value) {
        deleteTask(id);
        setReload((prev) => !prev);
        getAlltasks();
      }
    });
  };
  const handlechange = (task) => (event) => {
    setValue({
      ...Value,
      [task]: event.target.value,
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (Value.task_title.trim().length !== 0) {
      createTask(Value);
      setReload((prev) => !prev);
    } else {
      swal("Empty task..!", "😕", "warning");
    }
  };

  const update = (data) => {
    let task_title = prompt("Enter The Value");
    if (task_title && task_title.length !== 0) {
      let data_new = { ...data, task_title };
      updateTask_item(data._id, data_new);
      setReload((prev) => !prev);
      getAlltasks();
    }
  };

  const upadeStatus = (id) => {
    updateTask(id);
    getAlltasks();
    setReload((prev) => !prev);
  };

  return (
    <div className="container-fluid  p-0 m-0 ">
      <div>
        <Navbar setSearch={setSearch} Search={search} />
      </div>
      <div className="row todo">
        <div className="col col-xl-4 col-lg-4 col-md-4 col-sm input-group">
          <form className="d-flex flex-column  w-50 mb-3">
            <input
              className="form-control m-1 h-100"
              type="text"
              placeholder="TASk"
              value={task_title}
              onChange={handlechange("task_title")}
            />
            <button
              onClick={onSubmit}
              className="btn btn-outline-success mt-2  w-100"
            >
              submit
            </button>
          </form>
        </div>
      </div>
      <section className="p-0 mt-5">
        <Taskitems
          todo={todo}
          onDeleteItem={onDeleteItem}
          reload={reload}
          Search={search}
          update={update}
          upadeStatus={upadeStatus}
        />
      </section>
    </div>
  );
};

export default Todo;
