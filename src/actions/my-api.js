
export const getTodos = async() => {
    return await fetch('/todos/').then(
        (r) => r.json(),
      )   
}

export const getUrls = async() => {
    return await fetch('/urls/').then(
        (r) => r.json(),
      )   
}
export const postTodo = async(data) => {
    return await fetch('/postTodos/', {
        method: 'POST',
        body: JSON.stringify(data)
    }).then(
        (r) => r.json(),
    )   
}