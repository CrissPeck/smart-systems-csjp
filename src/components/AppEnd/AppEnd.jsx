import React from 'react'
import { Grid } from '@mui/material'
import { Typography } from "@mui/material";

function AppEnd() {
  return (
    <div>
        <div className="append">
          <Grid
            item
            container
            xs={12}
            alignItems="center"
          >
            <Grid
              item
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Typography variant="h5" color="white">
                Smart Systems
              </Typography>
            </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default AppEnd
