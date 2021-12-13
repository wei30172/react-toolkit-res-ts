import { useDispatch } from 'react-redux';
import { removeReservation } from '../features/reservationsSlice';
import { addCustomer } from '../features/customerSlice';
import { v4 as uuid } from 'uuid'

interface ReservationCardType {
  name: string;
  index: number
}

function ReservationCard({ name, index }: ReservationCardType) {
  const dispatch = useDispatch()
  return (
    <div onClick={() => {
      dispatch(addCustomer({
        id: uuid(),
        name,
        food: []
      }))
      dispatch(removeReservation(index))
    }} className="reservation-card-container">{ name }</div>
  )
}

export default ReservationCard;
