/*
  Set the _cbutm cookie
*/
const utm_params = ['utm_campaign', 'utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_coupon']

const base64 = {
  encode: x => Buffer.from(x, 'utf-8').toString('base64'),
  decode: x => Buffer.from(x, 'base64').toString('utf-8')
}

const Indentity = x => x

export default async function ({ route, app: { $cookies } }) {
  try {
    const qp = route.query
    const new_cbutm = Object.keys(qp).reduce((acc, key) => utm_params.includes(key) && qp[key] ? { ...acc, [key]: qp[key] } : acc, {})
    const _cbutmCookie = $cookies.get('_cbutm') || base64.encode('{}')
    const old_cbutm = JSON.parse(base64.decode(_cbutmCookie))

    const _cbutm = base64.encode(JSON.stringify({
      ...old_cbutm,
      ...new_cbutm
    }))

    console.log(qp, old_cbutm, new_cbutm)

    $cookies.set('_cbutm', _cbutm, {
      path: '/',
      encode: Indentity,
      domain: process.env.NODE_ENV === 'development' ? 'test.online' : '.codingblocks.com',
      expires: new Date(new Date().setDate(new Date().getDate() + 7))
    })
  } catch (err) {
    console.error(err)
    return;
  }
}