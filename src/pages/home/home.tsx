import React from 'react';
import { Box } from '@mui/material';
import { TopBar } from '../../components/topBar/topBar';

export const HomePage = () => {
	return (
		<Box style={{ backgroundColor: '#EDF0F7', minWidth: '100%', minHeight: '100vh' }}>
			<TopBar />
		</Box>
	);
};
