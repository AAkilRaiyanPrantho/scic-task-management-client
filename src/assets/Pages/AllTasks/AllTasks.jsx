import { useLoaderData } from "react-router-dom";
import AllTask from "../AllTask/AllTask";
import ToDo from "../ToDo/ToDo";
import OnGoing from "../OnGoing/OnGoing";
import Completed from "../Completed/Completed";

const AllTasks = () => {
  const tasks = useLoaderData();
  // ToDo Filter
  const todos = tasks.filter((task) => task.status === 'To Do');
  const todosLength = todos.length;
  console.log(todos);
  console.log(todosLength);
  // OnGoing Filter
  const onGoings = tasks.filter((task) => task.status === 'On Going');
  const onGoingsLength = onGoings.length;
  console.log(onGoings);
  console.log(onGoingsLength);
  // Completed Filter
  const completeds = tasks.filter((task) => task.status === 'Completed');
  const completedsLength = completeds.length;
  console.log(completeds);
  console.log(completedsLength);

  return (
    <div>
      <div>
      <h1 className="text-center font-bold text-4xl">All Tasks</h1>
      <div className="grid grid-cols-1 justify-center items-center lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
        {
          tasks.map( (task) => <AllTask key={task._id} task={task}></AllTask>
          )
        }
      </div>
      </div>
      <div>
      <h1 className="text-center font-bold text-4xl">Tasks To Do</h1>
      <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
      {
        todos.map( (todo) => <ToDo key={todo._id} todo={todo}></ToDo>)
      }
      </div>

      </div>
      <div>
      <h1 className="text-center font-bold text-4xl">On Going Tasks</h1>
      <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
      {
        onGoings.map( (onGoing) => <OnGoing key={onGoing._id} onGoing={onGoing}></OnGoing> )
      }
      </div>

      </div>
      <div>
      <h1 className="text-center font-bold text-4xl">Completed Tasks</h1>
      <div className="grid grid-cols-1 justify-center items-center  lg:grid-cols-2 p-4 lg:p-10 lg:gap-10">
        {
          completeds.map( (completed) => <Completed key={completed._id} completed={completed}></Completed> )
        }
      </div>
      </div>
      
    </div>
  );
};

export default AllTasks;
