import React from 'react';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { TipoDeFolhaList } from './pages/tipoDeFolha/tipoDeFolhaList';
import 'bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <TipoDeFolhaList />, 
	},
]);

export default function App(): React.ReactNode {
	return <RouterProvider router={router} />;
}
