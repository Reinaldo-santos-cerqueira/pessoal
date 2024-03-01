import React, { useState } from 'react';
import { Menu } from '../menu/menu';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import {
	Menu as HamburgerMenu
} from '@mui/icons-material';

export function TopBar(): React.ReactNode {
	const [open, setOpen] = useState(false);
	
	const changeOpen = () =>{
		setOpen(!open);
	};
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='relative' color='primary' style={{ paddingLeft: open ? 250 : 0, transition:'all 1s'}}>
				<Toolbar>
					<IconButton onClick={changeOpen}>
						<HamburgerMenu style={{color: 'white'}} />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Menu open={open} />

		</Box>
	);
}	