import React, { useState } from "react";

export default function CourseSelect({ department, course, onChange }) {
  const [state, setState] = useState({
    department: null,
    course: null,
    courses: [],
    _loading: false,
  });

  const onSelectDepartment = (e) => {
    const department = e.target.value;
    const course = null;

    setState({ department, course });
    onChange({ name: "department", value: department });
    onChange({ name: "course", value: course });

    if (department) fetch(department);
  };

  const fetch = (department) => {};
  const renderDepartmentSelect = () => {
    return (
      <select name="department" onChange={onSelectDepartment}>
        <option value="">Which department?</option>
        <option value="core">Core</option>
        <option value="elective">Elective</option>
      </select>
    );
  };

  const renderCourseSelect = () => {};

  return (
    <div>
      {renderDepartmentSelect()}
      <br />
      {renderCourseSelect()}
    </div>
  );
}
