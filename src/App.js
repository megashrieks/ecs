import React from 'react';
import { BookDetailProvider } from './components/context/BookDetails';
import Dashboard from './components/Dashboard'
function App() {
	return (
		<div className="App">
			<BookDetailProvider>
				<Dashboard/>
			</BookDetailProvider>
		</div>
	);
}

export default App;
