import React from "react";
import EventCard from "./EventCard";

const Cards = () => {
    return (
        <div className="event-table-container">
            <table className="event-table">
                <tbody>
                    <tr>
                        <EventCard event="Assistance For Homeless Veterans" location="Lilburn, GA" date="June 16, 2025" time="11:00AM - 3:00PM" image="	https://cdn.goldenvolunteer.com/images-prod/2bec748a4fb0e85d60b3b5bb19d55f39_md.JPG" />
                        <EventCard event="Reflections of Trinity Food Pantry Weekly Grocery Prep 2025" location="Powder Springs, GA" date="June 9, 2025" time="10:00AM - 2:00PM" image="https://cdn.goldenvolunteer.com/images-prod/ba54e6ae1cde6d37383d4eaa51b5dcb7_md.JPG" />
                        <EventCard event="City Bridges Pantry Food Distributions" location="Fairburn, GA" date="June 14, 2025" time="1:30PM - 4:00PM" image="https://cdn.goldenvolunteer.com/images-prod/3da19129b18b5b3e316151c6bb5b7803_md.jpeg" />
                        <EventCard event="Springbrook Park Beautification" location="Decatur, GA" date="June 12, 2025" time="9:00AM - 11:00AM" image="	https://cdn.goldenvolunteer.com/images-prod/8b1bf7c4e226ad8816eafc15b0d2eb61_md.jpeg" />
                    </tr>
                    <tr>
                        <EventCard event="Pick Up & Pitch In for Piedmont Park" location="Atlanta, GA" date="June 9, 2025" time="7:30PM - 9:30PM" image="https://cdn.goldenvolunteer.com/images-prod/3a1d6389bc860c07b543e5c0de2a6103_md.jpg" />
                        <EventCard event="Tapestry Community Garden Workday" location="Atlanta, GA" date="June 9, 2025" time="9:00AM - 12:00PM" image="https://cdn.goldenvolunteer.com/images-prod/fe0829c39831f21ae7155c8fbeda3f75_md.jpeg" />
                        <EventCard event="Summer Camp" location="Stockbridge, GA" date="June 9, 2025" time="9:25AM - 3:30PM" image="https://cdn.goldenvolunteer.com/images-prod/1eb26c61396d9b2ef3af19e612c19c77_md.jpg" />
                        <EventCard event="Meal Delivery to Seniors" location="Atlanta, GA" date="June 9, 2025" time="10:00AM - 1:30PM" image="https://cdn.goldenvolunteer.com/images-prod/35035e5edd9047bf92741e493ef61cdd_md.png" />
                    </tr>
                    <tr>
                        <EventCard event="Hawk Hollow Garden" location="Atlanta, GA" date="June 11, 2025" time="5:00PM - 7:00PM" image="https://cdn.goldenvolunteer.com/images-prod/b9e3625d7aa5058ab583c4b8503b6eb7_md.jpg" />
                        <EventCard event="Grady Food as Medicine" location="Atlanta, GA" date="June 18, 2025" time="9:00AM - 1:00PM" image="https://cdn.goldenvolunteer.com/images-prod/dcabb9e0ca00d974e07bf01e174cc9d4_md.png" />
                        <EventCard event="Habitat Rehabilitatior" location="Smyrna, GA" date="June 27, 2025" time="9:00AM - 11:00AM" image="https://cdn.goldenvolunteer.com/images-prod/d39394425a2c9569fba0cc69a05f69ba_md.JPG" />
                        <EventCard event="community Cleanup in Smyrna" location="Smyrna, GA" date="June 23, 2025" time="9:00AM - 10:30AM" image="https://cdn.goldenvolunteer.com/images-prod/e3be5a1e48244cf7399747640cd67bc5_lg.JPEG" />
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cards;