import './App.css';
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';
import { addReservation } from './features/reservationsSlice';

function App() {
  const [reservationNameInput, setReservationNameInput] = useState("")

  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customers.value)

  const dispatch = useDispatch()
  const handleAddReservations = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput("")
  }
  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => {
                return <ReservationCard
                  key={index} name={name} index={index}
                />
              })}
            </div>
          </div>
          <div className="reservation-input-container">
            <form onSubmit={handleAddReservations}>
              <input
                value={reservationNameInput}
                onChange={(e) => setReservationNameInput(e.target.value)}
                className="input"/>
              <input className="button" type="submit" value="Add"/>
            </form>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer, index) => {
              return <CustomerCard
                id={customer.id}
                name={customer.name}
                food={customer.food}
                key={index}/>
            })}
        </div>
      </div>
    </div>
  )
}

export default App;
