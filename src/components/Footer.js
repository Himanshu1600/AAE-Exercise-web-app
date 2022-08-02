import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-2.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#e6f9ff">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '100px', height: '80px' }} />
      <Typography color="#1667e0" fontWeight="600" fontSize="26px" textAlign="center" className="footer">AAE- All About Exercises</Typography>
    </Stack>
    <Typography sx={{ fontSize: { lg: '15px', xs: '18px' } }} mt="41px" textAlign="center" pb="40px">All copyrights &#169; are reserved &#174;</Typography>
  </Box>
);

export default Footer;
