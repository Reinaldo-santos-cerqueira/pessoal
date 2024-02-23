import { AppBar, Box, Drawer, IconButton,Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Menu as Hambuguer} from '@mui/icons-material';
import { Menu } from '../menu/menu';

export function TopBar(): React.ReactNode {
	const [open, setOpen] = useState(false);
	
	const changeOpen = () =>{
		setOpen(!open);
	};
	return (
		<Box>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='fixed' style={{ backgroundColor: '#3e578d'}}>
					<Toolbar className='relative flex'>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}
							onClick={changeOpen}
						>
							<Hambuguer />
						</IconButton>
						<div className='flex  items-center justify-center flex-1 '>
							<Typography variant='h5' className='font-bold uppercase'>Modulo pessoal</Typography>
						</div>
					</Toolbar>
				</AppBar>
			</Box>
			<Drawer
				anchor={'left'}
				open={open}
			>
				<Menu changeOpen={changeOpen}/>
			</Drawer>
		</Box>
	);
}	