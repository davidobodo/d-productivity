const state = {
    titles: {
        111: 'first list',
        222: 'second list',
        333: 'third list'
    },
    tasks: {
        1: {
            id: 1,
            picture: 'some picture',
            content: 'somecontent',
            titleId: 111
        },
        2: {
            id: 2,
            picture: 'some picture',
            content: 'somecontent',
            titleId: 111
        },
        3: {
            id: 2,
            picture: 'some picture',
            content: 'somecontent',
            titleId: 222
        }
    },
}

const task = state.tasks[1]
const title = state.titles[task.titleId]
const composedTask = { ...task, title };