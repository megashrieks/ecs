import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { BookDetailProvider } from './components/context/BookDetails';
import Dashboard from './components/Dashboard'
function App() {
	return (
		<div className="App">
			<BookDetailProvider>
				<Router>
					<Dashboard />
				</Router>
			</BookDetailProvider>
		</div>
	);
}

export default App;
