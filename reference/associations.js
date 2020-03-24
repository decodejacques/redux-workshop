const reducer = (state, action) => {

    if (action.type === "set-session-id") {
        return { ...state, sid: action.actionSid }
    }
}

const store = createStore(
    reducer, // reducer
    {}, // initial state (in this case, empty)
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

    const appSid = useSelector(st => st.sid)
    const handleClick = async () => {
        const response = await fetch(
            "http://localhost:4000/login",
            { method: "POST" })
        const responseBody = await response.text()
        const parsed = JSON.parse(responseBody)

        store.dispatch({
            type: "set-session-id",
            actionSid: parsed.generatedSid
        })
    }
    if (appSid !== undefined) {
        return <h1> Your session id {appSid} </h1>
    }
    return <button onClick={handleClick}> log in </button>
}