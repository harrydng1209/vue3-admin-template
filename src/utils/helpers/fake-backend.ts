export { fakeBackend }

function fakeBackend() {
  const users = [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      firstName: 'Harry',
      lastName: 'Nguyen'
    }
  ]
  const realFetch = window.fetch
  window.fetch = function (url: any, opts: any) {
    return new Promise((resolve: any, reject) => {
      setTimeout(handleRoute, 500)

      function handleRoute() {
        switch (true) {
          case url.endsWith('/users/authenticate') && opts.method === 'POST':
            return authenticate()

          case url.endsWith('/users') && opts.method === 'GET':
            return getUsers()

          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error))
        }
      }

      function authenticate() {
        const { username, password } = body()
        const user: any = users.find((x) => x.username === username && x.password === password)

        if (!user) return error('Username or password is incorrect')

        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token'
        })
      }

      function getUsers() {
        if (!isAuthenticated()) return unauthorized()
        return ok(users)
      }

      function ok(body: any) {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' }))
        })
      }

      function error(message: string) {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
      }

      function isAuthenticated() {
        return opts.headers['Authorization'] === 'Bearer fake-jwt-token'
      }

      function body() {
        return opts.body && JSON.parse(opts.body)
      }
    })
  }
}
