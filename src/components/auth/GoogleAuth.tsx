import { auth, provider } from '../../lib/firebase.ts'
import { signInWithPopup } from 'firebase/auth'
import { Button } from "@/components/ui/button"

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
      <Button onClick={signInWithGoogle}>Sign in with Google</Button>
    </div>
  )
}

export default GoogleAuth