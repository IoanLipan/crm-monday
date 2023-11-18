import React from "react";
import TicketCard from "../components/TicketCard";

const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Safety 101 Video",
      owner: "Andrew Stevenson",
      avatar: "https://placehold.co/120x120",
      status: "done",
      priority: 5,
      progress: 40,
      description:
        "Make a video showcasing how to work with nft's safely, including how to know if one's genuine.",
      timestamp: "2022-02-11T07:26:00+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "New Feature Development",
      owner: "John Smith",
      avatar: "https://placehold.co/120x120",
      status: "in-progress",
      priority: 3,
      progress: 20,
      description: "Implement new feature based on customer requirements.",
      timestamp: "2022-04-15T09:15:00+0000",
    },
    {
      category: "Q3 2022",
      color: "green",
      title: "Bug Fixing",
      owner: "Emily Johnson",
      avatar: "https://placehold.co/120x120",
      status: "to-do",
      priority: 2,
      progress: 0,
      description: "Fix reported bugs and improve application stability.",
      timestamp: "2022-07-01T16:30:00+0000",
    },
    {
      category: "Q1 2022",
      color: "orange",
      title: "UI Enhancement",
      owner: "David Thompson",
      avatar: "https://placehold.co/120x120",
      status: "stuck",
      priority: 4,
      progress: 60,
      description:
        "Improve user interface based on feedback and usability testing.",
      timestamp: "2022-02-25T14:45:00+0000",
    },
    {
      category: "Q1 2022",
      color: "red",
      title: "Database Optimization",
      owner: "Sarah Wilson",
      avatar: "https://placehold.co/120x120",
      status: "to-do",
      priority: 4,
      progress: 0,
      description: "Optimize database queries for improved performance.",
      timestamp: "2022-03-10T09:00:00+0000",
    },
    {
      category: "Q2 2022",
      color: "blue",
      title: "Localization Support",
      owner: "Michael Brown",
      avatar: "https://placehold.co/120x120",
      status: "to-do",
      priority: 3,
      progress: 0,
      description: "Add support for multiple languages in the application.",
      timestamp: "2022-04-20T13:30:00+0000",
    },
    {
      category: "Q3 2022",
      color: "green",
      title: "Performance Monitoring",
      owner: "Jennifer Davis",
      avatar: "https://placehold.co/120x120",
      status: "to-do",
      priority: 2,
      progress: 0,
      description: "Implement performance monitoring and error tracking.",
      timestamp: "2022-07-05T11:15:00+0000",
    },
  ];

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  const uniqueStatus = [
    ...new Set(tickets?.map(({ status }) => status)),
  ];

  console.log(uniqueStatus);

  const colors = [
    "rgb(255, 179, 186)",
    "rgb(255, 223, 186)",
    "rgb(255, 255, 186)",
    "rgb(186, 255, 201)",
    "rgb(186, 225, 255)",
  ];

  return (
    <div className="dashboard">
      <h1>My Projects</h1>
      <div className="ticket-container">
        {tickets &&
          uniqueCategories.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets
                .filter((ticket) => ticket.category === uniqueCategory)
                .map((filteredTicket, ticketIndex) => (
                  <TicketCard
                    key={ticketIndex}
                    ticket={filteredTicket}
                    color={colors[categoryIndex] || colors[0]}
                  />
                ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
