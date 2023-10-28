function ContactUs(props){
    return(
        <div align="center" >
            <h1>Contact Us</h1>
     
        <form>
            FirstName:<input type="text" />
            LastName:<input type="text" />,
            Address:<input type="text" />,
            <input type="submit" value="Save"/>
            </form>
        </div>
    )
}
export default ContactUs;