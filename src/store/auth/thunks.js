import { logIn } from './slice'
import { loginService } from '../../services/auth'

export const logInThunk = (user) => async (dispatch, getState) => {
  try {
    const data = await loginService(user)
  } catch {
    // handle error
  }

  dispatch(logIn(user))
}
