import React from "react";
import "./styles.css";

const TimerDashboard = () => {
  return (
    <>
      <div>
        <EditableTimerList />
        <ToggleableTimerForm isOpen={false} />
      </div>
    </>
  );
};

const EditableTimerList = () => {
  return (
    <div id="timer">
      <EditableTimer
        title="Learn React"
        peoject="Project1"
        elapsed="89866300"
        runningsince={null}
        editFormOpen={true}
      />
      <EditableTimer
        title="Learn React"
        project="Project2"
        elapsed="89866300"
        runningsince={null}
        editFormOpen={false}
      />
    </div>
  );
};

const ToggleableTimerForm = ({ isOpen = true }) => {
  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <div className="content">
        <button className="button icon">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    );
  }
};

const EditableTimer = ({
  title,
  project,
  elapsed,
  runningsince,
  editFormOpen = false,
}) => {
  if (editFormOpen) {
    return <TimerForm title={title} project={project} />;
  } else {
    return (
      <Timer
        title={title}
        project={project}
        elapsed={elapsed}
        runningsince={runningsince}
      />
    );
  }
};

const TimerForm = ({ title, project }) => {
  return (
    <div className="card">
      <div className="content">
        <div className="form">
          <div className="field">
            <label>Title</label>
            <input type="text" defaultValue={title} />
          </div>
          <div className="field">
            <label>Project</label>
            <input type="text" defaultValue={project} />
          </div>
          <div className="button-container">
            <button className="button blue">Update</button>
            <button className="button red">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Timer = ({ title, project, elapsed, runningsince }) => {
  const elapsedTime = elapsed;
  return (
    <div className="content card">
      <div className="card">
        <div className="header">{title}</div>
        <div className="meta">{project}</div>
        <div className="center">
          <h3>{elapsedTime}</h3>
        </div>
        <div className="right floated">
          <span>
            <i className="fa fa-edit"></i>
          </span>
          <span>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </div>
      <div>
        <button className="button blue">Start</button>
      </div>
    </div>
  );
};
export default TimerDashboard;
