// Creating a layout for whole app to use (can be just the part of the app, but in this app it'll be whole app)

import Sidebar from '../components/sidebar';
import { ReactNode } from 'react';

// Creating a type for layout props
interface layoutProps {children: ReactNode}

// declaring the layout component ('props' is type of 'layoutProps')
export default function Layout({children}: layoutProps) {

	return (
		<>
			<Sidebar />
			<div style={{marginLeft: 100, marginTop: 50}}>
			  {children}
		  </div>
		</>

	)
}

