import {
    Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";


const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const { user, token } = useAuth();
  useEffect(() => {
    const url = `https://safe-headland-20298.herokuapp.com/myOrder/:${user?.email}`;
    fetch(url, {
      headers: {
          'authorization': `Bearer ${token}`
        }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email, token]);
  return (
    <div>
      <h2>Appointments: {orders.length}</h2>
      <TableContainer component={Paper}>
        <Table sx={{}} aria-label="My Orders Table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Model</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow
                key={order?._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {order?.name}
                </TableCell>
                <TableCell align="right">{order?.price}</TableCell>
                <TableCell align="right">{order?.model}</TableCell>
                <TableCell align="right">{order?.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MyOrders;


