import { Close, TextSnippet } from '@mui/icons-material';
import { Box, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';

interface props {
	changeOpen: () => void;
}

export function Menu({ changeOpen }: props):React.ReactNode{
	return (
		<>
			<Box
				sx={{ width: 400 }}
				role="presentation"
				height={'100%'}	
			>
				<Box
					className="flex items-center justify-end"
				>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						onClick={changeOpen}

					>
						<Close />
					</IconButton>
				</Box>
				<List>
					<ListItemButton >
						<ListItemIcon>
							<TextSnippet />
						</ListItemIcon>
						<ListItemText primary="Tipo de folha" />
					</ListItemButton>
				</List>
			</Box>
		</>
	);
}