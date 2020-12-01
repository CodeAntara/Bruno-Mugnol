import { goToLoginPage } from "../routes/coordinator"

const { useEffect } = require("react")
const { useHistory } = require("react-router-dom")
const { default: useFetchToken } = require("./useFetchToken")

const useRequireLogin = () => {
    const token = useFetchToken()
    const history = useHistory()

    useEffect(() => {
        if(!token) {
            goToLoginPage(history)
        }
    }, [token, history])
}

export default useRequireLogin