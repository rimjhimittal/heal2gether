
import React, { useState } from "react";

const Createpost = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement the logic to submit the post data to the server
    // send a POST request to an API endpoint with the form data
    // Axios or Fetch for making API requests
    console.log("Submitted data:", { email, title, body, category });
    setEmail("");
    setTitle("");
    setBody("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a New Post</h2>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <label htmlFor="body">Body:</label>
      <textarea
        id="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Select Category</option>
        <option value="Eating Disorders">Eating Disorders</option>
        <option value="Depression">Depression</option>
        <option value="Anxiety">Anxiety</option>
        <option value="Bipolar Disorder">Bipolar Disorder</option>
        <option value="PTSD">PTSD</option>
        {/* Add more options for other categories */}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Createpost;
