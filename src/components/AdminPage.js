import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('David', 159, 6.0, 24, 4.0),
  createData('John', 237, 9.0, 37, 4.0),
  createData('Allen', 262, 16.0, 24, 6.0),
  createData('Mark', 305, 3.7, 67, 4.0),
  createData('Alex', 356, 16.0, 49, 3.0),
];

export default function AdminPage() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} style={{maxWidth:"80%",margin:"0 auto",marginTop:"80px"}}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead style={{background:"black"}}>
          <TableRow>
            <TableCell style={{color:"white"}}>User Name</TableCell>
            <TableCell align="right" style={{color:"white"}}>Data usage</TableCell>
            <TableCell align="right" style={{color:"white"}}>online</TableCell>
            <TableCell align="right" style={{color:"white"}}>offline</TableCell>
            <TableCell align="right" style={{color:"white"}}>Notifications</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories} MB</TableCell>
              <TableCell align="right">{row.fat} hours</TableCell>
              <TableCell align="right">{row.carbs} hours</TableCell>
              <TableCell align="right">{row.protein} /day</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}