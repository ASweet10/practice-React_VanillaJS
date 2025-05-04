import { useAuthContext } from "./useAuthContext"
//import { useWorkoutsContext } from "./useWorkoutsContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    //const { dispatch: workoutsDispatch } = useWorkoutsContext()

    const logout = () => {
        localStorage.removeItem('user') // Remove user from localStorage
        dispatch({type: 'LOGOUT'}) // Dispatch logout action        
        //workoutsDispatch({type: 'SET_WORKOUTS', payload: null}) //Set workouts to null when user logs out
    }
    return { logout }
}