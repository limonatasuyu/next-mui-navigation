import Sidebar from '../components/sidebar';
import {NextPage} from 'next';
import {ReactNode} from 'react';

interface props {children?: ReactNode}

const Layout : NextPage = (props) => {
	return (
		<>
			<Sidebar />
			<div style={{marginLeft: 100, marginTop: 50}}>
			  {props.children}
		  </div>
		</>

	)
}

export default Layout
