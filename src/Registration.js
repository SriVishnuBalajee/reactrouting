function Registration(props){
    return(
        <div align="center" >
            <h1>Registration</h1>
   
        <form>
            FirstName:<input type="text" placeholder="Enter First Name"/>
            LastName:<input type="text" placeholder="Enter Last Name"/>,
            Email:<input type="email" placeholder="Enter Email" />,
            <input type="submit" value="Save"/>
        </form>
        </div>
    )
}
export default Registration;