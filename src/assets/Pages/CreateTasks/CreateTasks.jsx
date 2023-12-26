import { useState } from "react";
// import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const CreateTasks = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//   };

  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="hero">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Your Task</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form
                // onSubmit={handleCreateAssignments}
                className="card-body w-96 backdrop-blur-lg"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Name</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="Task Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Task Description"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Priority Level</span>
                  </label>
                  <select
                    id="taskPriorityLevel"
                    name="taskPriorityLevel"
                    className="p-4 border-2 rounded-lg"
                    required
                  >
                    <option value="High">High</option>
                    <option value="Moderate">Moderate</option>
                    <option value="Low">Low</option>
                    
                  </select>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Status</span>
                  </label>
                  <select
                    id="taskStatus"
                    name="taskStatus"
                    className="p-4 border-2 rounded-lg"
                    required
                  >
                    <option value="ToDo">To Do</option>
                    <option value="OnGoing">On Going</option>
                    <option value="Completed">Completed</option>
                    
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Task Deadline</span>
                  </label>
                  <DatePicker name="deadline" className="input input-bordered w-full" selected={selectedDate} onChange={(date) => setSelectedDate(date)} />
                  {/* <input
                    type="text"
                    name="dueDate"
                    placeholder="Assignment Due Date"
                    className="input input-bordered"
                    required
                  /> */}
                </div>

                <div className="form-control mt-6">
                  <button className="btn outline outline-[#ee4747] text-[#ee4747]">
                    Add Task
                  </button>
                </div>
              </form>
              {/* <ToastContainer /> */}
              {/* {signUpError && <p className="text-red-800">{signUpError}</p>} */}
              {/* {signUpSuccess && <p className="text-green-800">{signUpSuccess}</p>} */}
            </div>
  </div>
</div>
  );
};

export default CreateTasks;
