import { useState } from "react";

const TicketPage = () => {
  const [formData, setFormData] = useState({
    status: "not started",
    progress: 0,
    timestamp: new Date().toISOString(),
    title: "",
  });
  const editMode = false;

  const categories = ["test1", "test2"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    console.log(value); // Log the updated value instead of formData.priority
  };

  return (
    <div>
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
              value={formData.category}
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
              required={true}
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
