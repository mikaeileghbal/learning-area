import React, { useState } from "react";
import "./styles.css";
import { v4 } from "uuid";

const TimerDashboard = () => {
  const state = {
    timers: [
      {
        title: "Practice squat",
        project: "Gym Chores",
        id: v4(),
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: "Bake squash",
        project: "Kitchen Chores",
        id: v4(),
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };

  return (
    <>
      <div>
        <EditableTimerList timers={state.timers} />
        <ToggleableTimerForm />
      </div>
    </>
  );
};

const EditableTimerList = ({ timers }) => {
  const timersComp = timers.map((timer) => {
    return (
      <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningsince={timer.runningSince}
      />
    );
  });
  return <div id="timer">{timersComp}</div>;
};

const ToggleableTimerForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormOpen = (e) => {
    setIsOpen(true);
  };

  if (isOpen) {
    return <TimerForm />;
  } else {
    return (
      <div className="content">
        <button className="button icon" onClick={() => handleFormOpen()}>
          <i className="fa fa-plus"></i>
        </button>
      </div>
    );
  }
};

const EditableTimer = ({ id, title, project, elapsed, runningsince }) => {
  const [editFormOpen, setEditFormOpen] = useState(false);

  const handleEditTimer = (e) => {
    setEditFormOpen(true);
  };
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  } else {
    return (
      <Timer
        id={id}
        title={title}
        project={project}
        elapsed={elapsed}
        runningsince={runningsince}
        onEditTimer={handleEditTimer}
      />
    );
  }
};

const TimerForm = ({ title, project }) => {
  return (
    <div className="card border">
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

const Timer = ({ title, project, elapsed, runningsince, onEditTimer }) => {
  const elapsedTime = elapsed;
  return (
    <div className="content card border">
      <div className="timer">
        <div className="header main">{title}</div>
        <div className="header sub">{project}</div>
        <div className="center">
          <h3>{elapsedTime}</h3>
        </div>
        <div className="right floated">
          <span>
            <i className="fa fa-edit" onClick={() => onEditTimer()}></i>
          </span>
          <span>
            <i className="fa fa-trash"></i>
          </span>
        </div>
      </div>
      <div>
        <button className="button blue start">Start</button>
      </div>
    </div>
  );
};
export default TimerDashboard;
