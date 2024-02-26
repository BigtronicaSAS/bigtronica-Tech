import { useContext } from 'react'
import UnitContext from '../Context/UnitProvider'

const useUnit = () => {
    return useContext(UnitContext)
}

export default useUnit;