const myStyle ={
    parag : {    
        color: "blue",
        fontSize: "2rem",
        fontWeight: "bolder"
    },

    div:{
        backgroundColor: "grey",
        fontSize: "3.2rem"
    }

}

const Inline = () => {
  return (
    <>
    <div style={{backgroundColor: "red", color: "#fff"}}>
        <h1> Hello from Inline CSS</h1>
        <div style={myStyle.div}>
            <p style={myStyle.parag}>Lorem ipsum dolor sit amet.</p>
        </div>
    </div>
    </>
  )
}

export default Inline
