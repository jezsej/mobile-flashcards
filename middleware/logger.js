const logger = store => next => action => {
    console.group(action.type)
    console.log(`the action: ${action}`)
    console.log(action)
    const returnValue = next(action)
    console.log(`The new state: ${store.getState()}`)
    console.log(store.getState())
    console.groupEnd()

    return returnValue
}

export default logger