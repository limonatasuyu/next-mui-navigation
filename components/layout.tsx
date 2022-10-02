import Sidebar from '../components/sidebar';
import {NextPage} from 'next';
import {ReactNode} from 'react';

interface layoutProps {children: ReactNode}

const Layout : NextPage<layoutProps> = ({children}: layoutProps) => {
	return (
		<>
			<Sidebar />
			<div style={{marginLeft: 100, marginTop: 50}}>
			  {children}
		  </div>
		</>

	)
}

export default Layout
