import axios from "../api/axios";
import useAuth from "./AuthProvider";

const useRefreshToken = () => {
    const { setAuth } = useAuth()

    const refresh = async () => {
        const response = await axios.get('/refresh', {
            withCredentials: true
        })
        setAuth(prev => {
            // console.log(prev)
            // console.log(response.data.token)
            return { ...prev, token: response.data.token}
        })
        return response.data.token
    }

    return refresh;
}
 
export default useRefreshToken;