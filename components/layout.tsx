import Sidebar from '../components/sidebar';
import {NextPage} from 'next';
import {ReactNode} from 'react';

interface layoutProps {children: ReactNode}

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

