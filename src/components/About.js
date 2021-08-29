import "./vivify.min.css";
import "./Main.css";

const About = () => {

  return (
    <div className="about-wrapper fadeIn">
        <p>
            If you're planning a trip,
            <b>Travel Vision</b> allows you to envision any location around the world by giving you
            the most relevant information before you get there:
        </p>
        <ul>
            <li>Local time</li>
            <li>Local news</li>
            <li>Local weather</li>
            <li>Currency exchange rates</li>
            <li>Health information and travel regulations regarding coronavirus</li>
            <li>You also learn how to say "hello" in the local language!</li>
        </ul>
        <p>
            In the future we plan to implement an interactive map which allows you to check out the
            local hotels, restaurants and places of interest, as well as a login feature in which you
            may keep a list of cities you're interested in and create an itinerary with your favourite
            spots to visit.
        </p> 
        <p>
            We hope you enjoy <b>Travel Vision</b>, enjoy your trip, stay safe and drop us a line
            if you feel like it!
        </p>
        <p className="signature">
            The Travel Vision Team
        </p>
    </div>
  );
};

export default About;