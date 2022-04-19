import React, { useEffect } from "react";
import { useData } from "./data-context";
export default function DisplayInfo() {
  const { userData, setUserData } = useData();

  const getData = (ip = "192.174.212.101") => {
    const req = fetch(
      `https://api.ipgeolocation.io/ipgeo?apiKey=38be1efef67941d18d520e449460aed9&ip=${ip}`
    );
    req
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData({
          ip: data.ip,
          location: `${data.city}, ${data.country_name}, ${data.geoname_id}`,
          timezone: data.time_zone.offset,
          isp: data.isp,
          lat: data.latitude,
          lng: data.longitude,
        });
      });
  };

  useEffect(() => {
    console.log(userData.ip);
    getData(userData.ip);
  }, [userData.ip]);
  return (
    <div className="display_info">
      <div className="info_border">
        <p>IP Address </p>
        <h3> {userData.ip}</h3>
      </div>
      <div className="info_border">
        <p>Location </p>
        <h3>{userData.location}</h3>
      </div>
      <div className="info_border">
        <p> Timezone</p>
        <h3>
          {" "}
          UTC -
          {userData.timezone > 10 ? userData.timezone : `0${userData.timezone}`}
          :00
        </h3>
      </div>
      <div className="info_border">
        <p> ISP </p>
        <h3> {userData.isp}</h3>
      </div>
    </div>
  );
}
