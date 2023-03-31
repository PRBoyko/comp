import AccordionPage from './components/Pages/AccordionPage/AccordionPage';
import ButtonPage from './components/Pages/ButtonPage/ButtonPage';
import CounterPage from './components/Pages/CounterPage/CounterPage';
import DropdownPage from './components/Pages/DropdownPage/DropdownPage';
import ModalPage from './components/Pages/ModalPage/ModalPage';
import TablePage from './components/Pages/TablePage/TablePage';
import Route from "./components/Route/Route";
import SideBar from "./components/SideBar/SideBar";

function App() {

  return (
    <div className='container mx-auto grid grid-cols-6 gap-4 mt-4'>
      <SideBar />
      <div>
        <Route path='/accordion'>
          <AccordionPage />
        </Route>
        <Route path='/'>
          <DropdownPage />
        </Route>
        <Route path='/button'>
          <ButtonPage />
        </Route>
        <Route path='/modal'>
          <ModalPage />
        </Route>
        <Route path='/table'>
          <TablePage />
        </Route>
        <Route path='/count'>
          <CounterPage initialCount={0} />
        </Route>
      </div>

    </div>

  )

}
export default App;
