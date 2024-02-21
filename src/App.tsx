import React from 'react';

import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
const router = createBrowserRouter([
	{
		path: '/',
		element: <div>Hello world!</div>, 
	},
]);

export default function App(): React.ReactNode {
	return <RouterProvider router={router} />;
}
