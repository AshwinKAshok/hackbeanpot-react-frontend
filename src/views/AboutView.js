import { Button, CssBaseline, Typography } from "@material-ui/core"

import { makeStyles } from '@material-ui/core/styles';

const style = makeStyles((theme) => ({
    center: {
        textAlign: 'center'
    },

    spacing: {
        margin: theme.spacing(3, 0, 2)   
    }

}));

const AboutView = (props) => {
    const styles = style
    return(
        <CssBaseline>
            <div className={styles.center}>
                <Typography component="h1" variant="h5">
                    About Us
                </Typography>
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

    );
}

export default AboutView;