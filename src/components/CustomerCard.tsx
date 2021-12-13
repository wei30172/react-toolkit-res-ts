import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardType {
  id: string,
  name: string,
  food: string[]
}

function CustomerCard({ id, name, food }: CustomerCardType) {
  const [customerFoodInput, setCustomerFoodInput] = useState("")

  const dispatch = useDispatch()
  const handleAddFoodToCustomer = (e: React.SyntheticEvent) => {
    e.preventDefault()
    if (!customerFoodInput) return
    dispatch(addFoodToCustomer({
      id,
      food: customerFoodInput
    }))
    setCustomerFoodInput("")
  }
  
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food, index) => {
            return <p className="food" key={index}>{food}</p>
          })}
        </div>
        <form className="customer-food-input-container"
          onSubmit={handleAddFoodToCustomer}>
          <input className="input"
            value={customerFoodInput}
            onChange={(e) => setCustomerFoodInput(e.target.value)}
          />
          <input className="button" type="submit" value="Add"/>
        </form>
      </div>
    </div>
  )
}

export default CustomerCard;