

const AllTask = ( {task} ) => {
    const{_id, title, description, deadline, priority, status} = task;
console.log(_id, title, description, deadline, priority, status);
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
  <button className="btn btn-error">Delete</button>
  <button className="btn btn-primary">Update</button>
</div>
</div>
</div>
    </div>
    );
};

export default AllTask;