import { rest } from 'msw'
import todos from './todos.json';

let todoDataInitial = todos.todos

const rI = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
export const handlers = [
    // Handles a POST /login request
    rest.get('/imageList/', (req, res, ctx) => {
        // Check if the user is authenticated in this session
        const data = {
            message: 'ok',
            imageList: [{
                name: 'Schuhe',
                src: 'https://picsum.photos/id/21/100/100'
            },
                {
                    name: 'Gabel',
                    src: 'https://picsum.photos/id/23/100/100'
                },
                {
                    name: 'Buch',
                    src: 'https://picsum.photos/id/24/100/100'
                }
            ]}
        const randomNumber = 2
        if(randomNumber === 3) {
            return res(
                ctx.status(400),
                ctx.json({
                    error: 'Hier kommt ein Fehler aus dem Backend ¯\\_(ツ)_/¯'
                }),
                ctx.delay(2000)
            )
        }

        return res(
            ctx.status(200),
            ctx.json(data),
            ctx.delay(2000)
        )
    }),
    rest.get('/todos/', (req, res, ctx) => {
        // Check if the user is authenticated in this session



        return res(
            ctx.status(200),
            ctx.json(todoDataInitial),
            ctx.delay(2000)
        )
    }),
    rest.post('/postTodos/', async(req, res, ctx) => {
        const { id, completed } = await req.json();
        
        todoDataInitial.map((item) => {
            if(item.id === id) {
                item.completed = completed
            }
            return item
        })
        return res(
            ctx.status(200),
            ctx.json({
                message: 'ok'
            }),
            ctx.delay(1)
        )
    }),
    rest.get('/urls/', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                {
                    result: {
                        "urlToGetUserData": "/getUser/",
                        "urlTodos": '/todos/'
                    }
                }
            ),
            ctx.delay(2000)
        )
    }),
]