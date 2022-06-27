import { useState, useEffect } from "react";
const AssignedSupervisors = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      "https://supervisors1-e9952-default-rtdb.firebaseio.com/supervisors.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const assignedSupervisors = [];

        for (const key in data) {
          const assignedSupervisor = {
            id: key,
            ...data[key],
          };
          assignedSupervisors.push(assignedSupervisor);
        }
        console.log(assignedSupervisors);

        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return <div></div>;
};

export default AssignedSupervisors;
