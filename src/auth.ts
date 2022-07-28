import { get } from 'superagent'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const getMyInfo = (token:string) =>
  get('https://api.rlato.icu/auth/@me')
    .set('Authorization', `Bearer ${token}`)

export default async function () {
  const token = cookies.get('token')
  if (!token) {
    return { status: false }
  } else {
    try {
      const me = await getMyInfo(token)
      if (me.status === 200) return { status: true, user: me.body.user, avatar: me.body.avatar }
      else return { status: false }
    } catch {
      return { status: false }
    }
  }
}
