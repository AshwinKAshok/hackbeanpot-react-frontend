import { Button, Container, CssBaseline, Typography } from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    center: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    },

    spacing: {
        margin: theme.spacing(2)  
    }

}));

const AboutView = (props) => {
    const styles = style
    return(
        <Container component="main" maxWidth="xs">
            <CssBaseline>
                <div className={styles.center}>
                    <Typography component="h1" variant="h5" Style='color: white; font-size: 3rem;'>
                        About Us
                    </Typography>

                    <div Style='color: white; font-size: 1rem'>
                        <p>
                            CampfireQueue is the project made by team Panic! at the Pinto at HackBeanPot 2021. Inspired by the campfire theme, this website focuses on the idea of being together, in this case, through music. 
                        </p>

                        <p>
                            Members on team Panic! at the Pinto:
                        </p>
                        <li>
                            Ashwin Ashok, graudate computer science student at Northeastern University
                        </li>
                        <li>
                            Hayden DeAngelis, third-year computer science and mathematics major at Northeastern University
                        </li>
                        <li>
                            Esteban Espinoza, third-year computer science and music technology major at Northeastern University
                        </li>
                        <li>
                            Danish Farooq, third-year computer science and mathematics major at Northeastern University
                        </li>
                        <li>
                            Ben Henderson, third-year computer science major at Northeastern University
                        </li>
                    </div>
                </div>
                <div class="Back Button" className={styles.spacing}>
                    <Button 
                    variant="contained"
                    color="primary"
                    onClick={()=> {props.LandingHandler()}}
                    >
                    Back To Landing Page
                    </Button>
                </div>
            </CssBaseline>
        </Container>
    );
}

export default AboutView;