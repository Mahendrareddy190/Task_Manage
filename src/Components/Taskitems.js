import React from "react";
import "./Taskitem.css";

const Taskitems = ({ Search, onDeleteItem, todo, update, upadeStatus }) => {
  return (
    <div className="container p-0">
      <div className="row ml-5">
        <div className=" col-12 col-lg-12 col-sm text-dark">
          {todo.length === 0 ? (
            <table className="table table-success table-striped text-center table-hover table-bordered">
              <thead>
                <tr>
                  <th scope="col">Task</th>
                  <th scope="col">Date</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Update</th>
                </tr>
              </thead>
              <tbody style={{ height: "100px" }}>
                <tr>
                  <td colSpan={4} className="font-monospace  pt-4">
                    No tasks available
                  </td>
                </tr>
              </tbody>
            </table>
          ) : (
            <div className="p-3">
              <table className="table table-success table-striped table-hover table-bordered ">
                <thead>
                  <tr>
                    <th scope="col">Task</th>
                    <th scope="col">Date</th>
                    <th scope="col">Delete</th>
                    <th scope="col">Update</th>
                  </tr>
                </thead>
                <tbody>
                  {todo
                    .filter((value) => {
                      if (Search === " ") {
                        return value;
                      } else if (
                        value.task_title
                          .toLowerCase()
                          .includes(Search.toLowerCase())
                      ) {
                        return value;
                      }
                    })
                    .map((value) => (
                      <tr key={value._id}>
                        <td>
                          <input
                            type="checkbox"
                            size={4}
                            onChange={() => upadeStatus(value._id)}
                            checked={value.status}
                          />
                          <span className="m-3 font-monospace">
                            {value.task_title.toUpperCase()}
                          </span>
                        </td>
                        <td>
                          <span className="font-monospace">
                            {value.createdAt.slice(0, 10)}
                          </span>
                        </td>
                        <td>
                          <button
                            onClick={() => onDeleteItem(value._id)}
                            className="btn btn-outline-danger"
                          >
                            Delete
                          </button>
                        </td>
                        <td>
                          <button
                            onClick={() => update(value)}
                            className="btn btn-outline-success"
                          >
                            Update
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Taskitems;
