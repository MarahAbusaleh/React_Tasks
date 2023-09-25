import { Component } from "react";

class ToDoClass extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [],
            inputValue: ""
        }
    }

    handleInputChange = (event) => {
        this.setState({ inputValue: event.target.value });
    }

    addTask = () => {
        const newTasks = [...this.state.tasks, this.state.inputValue];
        this.setState({ tasks: newTasks, inputValue: "" });
    }

    deleteTask = (index) => {
        const updatedTasks = [...this.state.tasks];
        updatedTasks.splice(index, 1); // Remove the task at the specified index
        this.setState({ tasks: updatedTasks });
    };


    render() {
        return (
            <div>
                <h1>To-Do List</h1>
                <input
                    type="text"
                    name="task"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.addTask}>Add</button>

                <br></br>
                <br></br>

                <ul>
                    {this.state.tasks.map((task, index) => (
                        <div>
                            <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                                <li>{task}</li>&nbsp;&nbsp;&nbsp;
                                <button onClick={() => this.deleteTask(index)}>Delete</button>
                            </div>
                            <br></br>
                        </div>

                    ))}
                </ul>
            </div>
        );
    }
}

export default ToDoClass;