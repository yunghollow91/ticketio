import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getEventInfo } from "../lib/DataQueries";
import { IEventInfo, ITickets } from "../dto/EventInfo";

function createDefaultTickets(
  barcode: string,
  firstName: string,
  lastName: string
) {
  return { barcode, firstName, lastName };
}

function createDefaultEvent(
  eventTitle: string,
  eventDate: Date,
  eventCity: string,
  tickets: ITickets[]
) {
  return { eventTitle, eventDate, eventCity, tickets };
}

// const eventDate = new Date("July 18, 1975 23:15:30");
// const dummyData = [
//   createDefaultEvent("Money Boy", eventDate, "Köln", [
//     createDefaultTickets("234", "344", "3434"),
//   ]),
// ];

// const formatResponse = (response: Promise<Response>) => {
//   const formattedData: EventInfo = {...response};
//   return formattedData;
// }

const BasicTable = () => {
  const [eventData, setEventData] = useState<IEventInfo[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function getData() {
      const data = await getEventInfo();
      setEventData(data);
    }
    getData();
  },[ ]);

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {eventData?.map((event) => {
              return (
                <>
                  <TableCell>{event.eventTitle}</TableCell>
                  <TableCell>{event.eventDate.toString()}</TableCell>
                  <TableCell>{event.eventCity}</TableCell>
                  {/* Ticket List */}
                  <TableRow>
                    <TableCell>Barcode</TableCell>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                  </TableRow>
                  {event["tickets"]?.map((ticket) => {
                    return (
                      <>
                        <TableRow>
                          <TableCell>{ticket.barcode}</TableCell>
                          <TableCell>{ticket.firstName}</TableCell>
                          <TableCell>{ticket.lastName}</TableCell>
                        </TableRow>
                      </>
                    );
                  })}
                </>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default BasicTable;
