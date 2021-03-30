import react from 'react';
class ContactUs extends react.Component{
    render(){
        return(
        <div class="contactbody">
           <div class="contactcontainer">
        <div style={{textAlign:"center"}}>
          <h2>Contact Us</h2>
          <p>Swing by for a cup of coffee, or leave us a message:</p>
        </div>
        <div class="row">
          <div class="contactcolumn">
          <div class="mapouter">
              <div class="gmap_canvas" style={{marginLeft:"-14%"}}>
                  <iframe width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=Iacsd%20Akurdi%20pune&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                      </iframe><a href="https://youtube-embed-code.com"></a><br/>
                      
                      <a href="https://www.embedgooglemap.net">google map embed iframe</a>
                      </div>
                      </div>
          </div>
         
          <div class="contactcolumn">
            <form action="/action_page.php">
              <label for="fname">First Name</label>
              <input class="contactinput" type="text" id="fname" name="firstname" placeholder="Your name.."/>
              <label for="lname">Last Name</label>
              <input class="contactinput" type="text" id="lname" name="lastname" placeholder="Your last name.."/>
              <label for="country">Country</label>
              <select id="country" name="country">
                <option value="australia">India</option>
                
              </select>
              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.." style={{height:"170px"}}></textarea>
              <input class="contactinput" type="submit" value="Submit"/>
            </form>

          </div>
        </div>
      </div>
      </div>
      )
    }
}

export default ContactUs;