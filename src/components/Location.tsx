import { useState } from "react";
import GymMap from "./GymMap";

function Location() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div id="#blog" className="grid-location">
      <div className="location-desc">
        <h3>
          SIGNUP OUR NEWSLETTER TO GET UPDATE INFORMATION, INSIGHT OR NEWS.
        </h3>

        <div className="form-group">
          <input type="email" placeholder="Email..." />
          <button>Subscribe</button>
          <p>
            We respect your privacy. Your information is sale and will never be
            shared.
          </p>
        </div>
      </div>
      <div className="location-map">
        <GymMap
          lat={19.432608}
          lng={-99.133209}
          name="Iron Gym Central"
          address="Av. Reforma 123, CDMX"
        />
      </div>
      <footer></footer>
    </div>
  );
}

export default Location;
