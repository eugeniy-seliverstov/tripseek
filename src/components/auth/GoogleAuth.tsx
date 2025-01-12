import { auth, provider } from '../../libs/firebase.ts'
import { signInWithPopup } from 'firebase/auth'

function GoogleAuth() {
  const signInWithGoogle = async() => {
    const results = await signInWithPopup(auth, provider)
    const token = await results.user.getIdToken()

    const authInfo = {
      token,
      userId: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
    }

    localStorage.setItem('authToken', JSON.stringify(authInfo))
  }

  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  )
}

export default GoogleAuth