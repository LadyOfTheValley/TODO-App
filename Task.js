export const Task = (props) => {

    const taskStyle = {
      border: "1px solid transparent",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px 0",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };

    const buttonStyle = {
      height: "5vh",
      width: "5vh",
    };

    return (
      <div
        style={taskStyle}
        className="task"
        >
        <button style={buttonStyle} onClick={() => props.completeTask(props.id)}></button>
        <h1 style={{ textDecoration: props.completed ? "line-through" : "none" }}>{props.taskName}</h1>
        <button style={buttonStyle} onClick={() => props.deleteTask(props.id)}>X</button>
    </div>  
    );
};