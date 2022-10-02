import Sidebar from '../components/sidebar';
import {NextPage} from 'next';
import {ReactNode} from 'react';

interface layoutProps {children: ReactNode}

const Layout : NextPage<layoutProps> = ({children}: layoutProps) => {
	return (
		<>
			<Sidebar />
			<div style={{marginLeft: 100, marginTop: 50}}>
<<<<<<< HEAD
			  {children}
=======
			  {props && props.children}
>>>>>>> 7e87ff66a2ac382326b1d07507688ee2001678b9
		  </div>
		</>

	)
}

export default Layout
