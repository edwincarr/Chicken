import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebaseClient';
import { useRouter } from 'next/router';
import useLocationStore from './store/locationStore';

const AddToCart = () => {
  const [user, loading] = useAuthState(auth)
  const orderLocation = useLocationStore((state) => state.orderLocation)

  const { push } = useRouter()
  const authen = () => {
    if(!user){
      push('/login')
    }else{
      if(Object.keys(orderLocation).length === 0 && orderLocation.constructor === Object){
        push('/locations')
      }else{
        console.log(orderLocation)
        console.log('added to cart')
      }
    }
  }
  return (
      <AddShoppingCartIcon className="text-white cursor-pointer hover:text-primary transition-all duration-200 relative top-64 left-2" onClick={() => authen()}/>
  )
}

export default AddToCart
