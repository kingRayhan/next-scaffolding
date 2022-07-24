import React, { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    fetch("/api/session")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        possimus ipsam laudantium ducimus aspernatur natus, quos unde quibusdam
        mollitia debitis id aperiam est voluptates corrupti, officiis doloribus?
        Repellat, autem deleniti.
      </p>
    </div>
  );
};

export default HomePage;
