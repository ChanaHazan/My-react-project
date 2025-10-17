const Form = () => {

    const HandleInput = (e) =>{
        console.log("typing.....")
        console.log(e.target.value)
    }
    const HandleSubmit =(e)=>{
        e.preventDefault()
        alert("הטופס נשלח בהצלחה")
    }

    return (
        <>
            <h1>hello form</h1>
            <form>
                <input type="text" placeholder="name" onChange={HandleInput}/>
                <button type="submit" onClick={HandleSubmit}>submit</button>
            </form>
        </>
    )
}

export default Form