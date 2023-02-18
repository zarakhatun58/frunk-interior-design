import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import React from 'react';

const Footer = () => {
    return (
        <Grid item xs={12}>
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    backgroundColor: "black",
                    paddingTop: "1rem",
                    paddingBottom: "1rem",
                    color:"white",
                }}
            >
                <Container maxWidth="lg">
                    <Grid  container item xs={12} direction="column" alignItems="center">
                        <Grid item xs={2}>
                           <List>
                            <ListItem>
                                <ListItemText>
                                About Furnko
                                </ListItemText>   
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                About Furnko
                                </ListItemText>   
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Lorem Ipsum
                                </ListItemText>   
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Lorem Ipsum
                                </ListItemText>   
                            </ListItem>

                           </List>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | React | Material UI | React Router`}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | React | Material UI | React Router`}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | React | Material UI | React Router`}
                            </Typography>
                        </Grid>
                        <Grid item xs={2}>
                            <Typography color="textSecondary" variant="subtitle1">
                                {`${new Date().getFullYear()} | React | Material UI | React Router`}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Grid>
    );
};

export default Footer;