import React from "react";
import TicketCard from "../components/TicketCard";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

const Dashboard = () => {
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("http://localhost:8000/tickets");

      const dataObject = response.data.data;

      const formattedArray = Object.keys(dataObject).map((key) => {
        const formattedData = { ...dataObject[key] };
        formattedData["documentId"] = key;
        return formattedData;
      });

      setTickets(formattedArray);
    }
    fetchData();
  }, []);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  const uniqueStatus = [...new Set(tickets?.map(({ status }) => status))];

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
