function AboutUs(props){
    return(<center>
        <div> 
        <b>Company Name: </b>{props.companyName}<br></br>
        <b>Address: </b>{props.address}
        <a href="https://teams.microsoft.com/_#/conversations/19:52466cf0-47e2-4e0c-a74d-159be5c6b86d_a7c0a708-686f-47a3-9799-cbc0c9df6fe3@unq.gbl.spaces?ctx=chat">AboutUs</a>
        </div>
        </center>
    );
}
export default AboutUs;