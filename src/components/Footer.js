import * as React from 'react';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ReactComponent as Logo } from './../assets/svgs/Logo.svg';
import {Link}  from 'react-router-dom';
import './../style/footer.css';


const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#f48782', color: 'grey.700' }}>

      <Container maxWidth="md" sx={{ py: 6}}>
        <Stack spacing={3}>
          <Box>
            <Grid container spacing={4} id='footerGrid' sx={{
              padding:'0px',
            }}>
              <Grid item xs={3} md={3} sx={{
                // mx:'10px',
                backgroundColor:'#fad1cc',
                width:'100%',
                paddingTop:'56px',
                paddingLeft: '5px !important',
                paddingRight: '5px !important',
                paddingBottom:'36px !important'
              }}>
                <Stack spacing={2}>
                <Link to='/'><Logo /></Link>
                  <Typography variant="caption" component="a" href="#" id='logoTxt'>
                  
                  </Typography>
                </Stack>
              </Grid>

              <Grid item xs={3} md={3}>
                <Stack spacing={2}>
                  <Typography variant="h6" component="a" href="#">
                    Follow FanciCharm
                  </Typography>
                  <Typography variant="caption" component="a" href="#">
                      <Box
                        sx={{
                          '& > :not(style)': {
                            m: 0.5,
                          },
                        }}
                      >
                    <FacebookIcon/>
                    <YouTubeIcon/>
                    <TwitterIcon/>
                    <LinkedInIcon/>
                    </Box>
                  </Typography>
                  
                </Stack>
              </Grid>

              <Grid item xs={3} md={3}>
                <Stack spacing={2}>
                  <Typography variant="h6" align="justify" component="a" href="#">
                    Quick Links
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                    Home
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                    Contact Us
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                    About
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                    Login
                  </Typography>
                </Stack>
              </Grid>
              
              <Grid item xs={3} md={3}>
                <Stack spacing={2}>
                  <Typography variant="h6" align="justify" component="a" href="#">
                    Contact
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                  "Piyumi",Anganaketiya,Karandeniya. 
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                  naveesharathnayaka1214@gmail.com
                  </Typography>
                  <Typography variant="caption" align="justify" component="a" href="#">
                  +(94) 76 7123 963
                  </Typography>
                </Stack>
              </Grid>

            </Grid>
          </Box>

        </Stack>
      </Container>

    </Box>
  )
}

export default Footer