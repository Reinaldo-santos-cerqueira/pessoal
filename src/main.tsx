import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import CssBaseline from '@mui/material/CssBaseline';
import { ScopedCssBaseline } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CssBaseline />
		<ScopedCssBaseline>
			<App />
		</ScopedCssBaseline>
	</React.StrictMode>,
);
