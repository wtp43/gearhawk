import { getDB } from '@/db/index'
import { users } from '@/db/schema'
import { Hono } from 'hono'

const app = new Hono().basePath('/api')

app.get('/users', async (c) => {
    const db = getDB()
    return c.json({
        users: await db.select().from(users),
    })
})

app.get('/wild/*/card', (c) => {
    return c.text('GET /wild/*/card')
})

app.get('/user/:name', async (c) => {
    const name = c.req.param('name')
    return c.text(`hello ${name}`)
})
export default app
