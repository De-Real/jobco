import classes from "./Map.module.css";
import {
  googleMap,
  useLoadScript,
  Marker,
  GoogleMap,
} from "@react-google-maps/api";

import locationIcon from "../../../assets/location.png";

const Map = ({ location, address, email, phone, title }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAexo5W7tQpxqRpwx-swh891CfL5q3ebRM",
    language: "en",
  });

  if (!isLoaded) return <div> Loading...</div>;

  const { lat, long: lng } = location;

  return (
    <section className={classes.map}>
      <div className={classes.info}>
        <h3>
          Department name. {title.slice(0, 15).trim().toUpperCase()} AEX company
        </h3>
        <p className={classes.address}>
          <img src={locationIcon}></img> {address}
        </p>
        <p>{phone},</p>
        <p> {email}</p>
      </div>
      <GoogleMap
        zoom={5}
        center={{ lat, lng }}
        mapContainerClassName={classes["map-container"]}
      >
        <Marker position={{ lat, lng }} />
      </GoogleMap>
    </section>
  );
};

export default Map;
