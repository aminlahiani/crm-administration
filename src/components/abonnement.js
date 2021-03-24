import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  all: {
    marginTop: "100px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  containerFluid: {
    backgroundColor: "#dbf6e9",
  },
  table: {
    minWidth: 650,
  },
  Button :{
    borderRadius: "3px",
    position: "relative",
    padding: "12px 30px",
    margin: ".3125rem 1px",
    textTransform: "uppercase",
  }
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function AbonnementTable({abonnements}) {
    console.log("ab" ,abonnements)
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.all}>
        <Link to="/create" style={{ textDecoration: 'none' }}>
        <Button className={classes.Button} variant="contained" color="primary">
          Create Abonnement
        </Button>
        </Link>
        <TableContainer component={Paper} className={classes.containerFluid}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>raisonsosial</TableCell>
                <TableCell align="right">email</TableCell>
                <TableCell align="right">datedebut</TableCell>
                <TableCell align="right">datafin</TableCell>
                <TableCell align="right">Gerant Nom</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {abonnements.map((row) => (
                <TableRow key={row._id}>
                  <TableCell component="th" scope="row">
                    {row.raisonsosial}
                  </TableCell>
                  <TableCell align="right">{row.email}</TableCell>
                  <TableCell align="right">{row.datedebut}</TableCell>
                  <TableCell align="right">{row.datafin}</TableCell>
                  <TableCell align="right">{row.gerant.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>
  );
}
