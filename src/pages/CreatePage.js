import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";



const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#DDDDDD",
    marginTop: "100px",
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  title: {
    marginTop: "20px",
  },
}));

export default function CreatePage() {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <AddressForm />
      </div>
    </Container>
  );
}

function AddressForm() {
  const classes = useStyles();
  const [raisonsosial, setRaisonsosial] = React.useState("");
  const [telephone, setTelephone] = React.useState("");
  const [email , setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [datedebut , setDateDeut] = React.useState(new Date());
  const [datafin  , setDateFin] = React.useState(new Date());
  const [gerantNom , setGerantNom] = React.useState("")
  const [gerantPrenom , setGeranPrenom] = React.useState("")
  const [gerantEmail , setGerantPenom] = React.useState("")
  const [gerantPassword , setGerantPassword] = React.useState("")




  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Abonnement Info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="raisonsosial"
            name="raisonsosial"
            label="raisonsosial"
            value={raisonsosial}
            onChange={(e) => setRaisonsosial(e.target.value)} 
            fullWidth
            autoComplete="given-nom"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="telephone"
            name="telephone"
            label="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)} 
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            fullWidth
            autoComplete="shipping address-line1"
            type="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Datedebut"
            type="date"
            defaultValue="2021-05-24"
            fullWidth
            value={datedebut}
            onChange={(e) => setDateDeut(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="date"
            label="Datafin"
            type="date"
            defaultValue="2021-05-24"
            fullWidth
            value={datafin}
            onChange={ e => setDateFin(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        
      </Grid>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Gerant info
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nom"
            name="nom"
            label="nom"
            value={gerantNom}
            onChange={ e => setGerantNom(e.target.value)}
            fullWidth
            autoComplete="given-nom"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="prenom"
            name="prenom"
            label="prenom"
            fullWidth
            autoComplete="family-prenom"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="email"
            type="email"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="passwprd"
            name="password"
            label="password"
            type="password"
            fullWidth
            autoComplete="password"
          />
        </Grid>
        <Button variant="contained" color="primary">
          Create
        </Button>
      </Grid>
    </React.Fragment>
  );
}
