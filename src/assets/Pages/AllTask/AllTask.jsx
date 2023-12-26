
import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Components/AuthProviders/AuthProvider';

const AllTask = ( {task} ) => {
    const{_id, title, description, deadline, priority, status} = task;
console.log(_id, title, description, deadline, priority, status);

const {loading} = useContext(AuthContext);
if(loading){
    return <span className="loading loading-bars loading-lg"></span>
}

const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        console.log('delete confirmed')

        fetch(`http://localhost:5000/tasks/${_id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount > 0){
            Swal.fire({
          title: "Deleted!",
          text: "Task has been deleted. Please Reload the page to see the results",
          icon: "success"
        });
          }
        })
        
      }
    });
    
  }


return (
    <div>
        <div className="card w-96 bg-orange-300 text-primary-content">
<div className="card-body items-center">
<h2 className="card-title">{title}</h2>
<p>{description}</p>
<p>Priority: <span className="font-bold">{priority}</span></p>
<p>Status: <span className="font-bold">{status}</span></p>
<p>Deadline: <span className="font-bold">{deadline}</span></p>
<div className="card-actions justify-end">
  <button onClick={() => handleDelete(_id)} className="btn btn-error">Delete</button>
  <button className="btn btn-primary">Update</button>
</div>
</div>
</div>
    </div>
    );
};

export default AllTask;