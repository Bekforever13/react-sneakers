import ReactDOM from 'react-dom/client'
import { App } from './App'
import {store} from './redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<BrowserRouter>
		<Provider store={store} >
			<App />
		</Provider>
	</BrowserRouter>
)
