import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
  // Use the state hook to store the username
  const [username, setUsername] = useState("");

  // Handle the input change event
  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle the form submit event
  const handleSubmit = (event) => {
    event.preventDefault();
    // Do something with the username, e.g. fetch data from GitHub API
  };
  return (
    <div className="Github">
      {/* Use responsive font size classes for the h1 element */}
      <h1 className="lg:text-3xl text-2xl md:text-4xl lg:mb-12 md:mb-10 mb-2 mt-20 font-bold text-center" style={{ fontFamily: "Parkinsans, serif", fontWeight: 400 }}>
        My GitHub Contributions
      </h1>
      {/* <form onSubmit={handleSubmit}>
        <label htmlFor="username">Enter your GitHub username:</label>
        <input id="username" type="text" value={username} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form> */}
      {/* Render the GitHub calendar component with the username prop */}
      {/* Use responsive padding classes for the div element */}
      <div className="lg:px-48  md:px-24 px-8">
        <GitHubCalendar
          className="w-96"
          username="TalhaT298"
          apiUrl="https://github.com/TalhaT298"
        />
      </div>
    </div>
  )
}

export default Github
