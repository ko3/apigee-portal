import React from "react";
// icons
import { Icon } from '@iconify/react';
// @mui
import { Box } from '@mui/material';

interface IconifyProps {
    icon?: any;
    sx?: any;
    [key: string]: any;
}

const Iconify = ({ icon, sx, ...other } : IconifyProps) => {
  return <Box component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

export default Iconify;