import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import Checkbox from '@material-ui/core/Checkbox';

export default function IssueDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ticket Subject
      </Typography>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <TextField
            required
            id="IssueName"
            name="IssueName"
            label="Issue Subject"
            fullWidth
            autoComplete="Demostration Purposes"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="Department"
            name="department"
            label="Concerned Department"
            fullWidth
            autoComplete="Some Department"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
