import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import CategoriesContext from "../context";

const TicketPage = () => {
  const { categories, setCategories } = useContext(CategoriesContext);
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
    title: "New Task",
    owner: "",
    avatar: "",
    category: "",
    priority: 0,
    description: "",
  });
  const editMode = false;

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!editMode) {
      const response = await axios.post("http://localhost:8000/tickets", {
        formData,
      });
      console.log(response);
      const success = response.status === 200;
      if (success) {
        navigate("/");
      }
    }
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="ticket">
      <h1>{editMode ? "Update your ticket!" : "Create a Ticket"}</h1>
      <div className="ticket-container">
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.title}
            />
            <label htmlFor="description">Description</label>
            <input
              id="description"
              name="description"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.description}
            />
            <label>Category</label>
            <select
              name="category"
              value={formData.category || categories[0]}
              onChange={handleChange}
            >
              {categories?.map((category, _index) => (
                <option key={_index} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <label htmlFor="new-category">New Category</label>
            <input
              id="new-category"
              name="category"
              type="text"
              onChange={handleChange}
              value={formData.category}
            />
            <label>Priority</label>
            <div className="multiple-input-container">
              {Array.from({ length: 5 }, (_, index) => {
                const priority = index + 1;
                return (
                  <div key={`priority-${priority}`}>
                    <input
                      id={`priority-${priority}`}
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={priority}
                      checked={parseInt(formData.priority) === priority}
                    />
                    <label htmlFor={`priority-${priority}`}>{priority}</label>
                  </div>
                );
              })}
            </div>
            {editMode && (
              <>
                <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  onChange={handleChange}
                  min="0"
                  max="100"
                />
                <label htmlFor="progress">Progress</label>

                <label>Status</label>
                <select
                  id="status"
                  name="status"
                  onChange={handleChange}
                  value={formData.status}
                >
                  <option value="done" selected={formData.status === "done"}>
                    Done
                  </option>
                  <option
                    value="in progress"
                    selected={formData.status === "in progress"}
                  >
                    In Progress
                  </option>
                  <option value="to-do" selected={formData.status === "to-do"}>
                    to-do
                  </option>
                </select>
              </>
            )}
            <input type="submit" />
          </section>
          <section>
            <label htmlFor="owner">Owner</label>
            <input
              id="owner"
              name="owner"
              type="text"
              onChange={handleChange}
              required={true}
              value={formData.owner}
            />
            <label htmlFor="avatar">Avatar</label>
            <input
              id="avatar"
              name="avatar"
              type="url"
              onChange={handleChange}
              required={true}
              value={formData.avatar}
            />
            <div className="img-preview">
              {formData.avatar && (
                <img src={formData.avatar} alt="image_preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};

export default TicketPage;
