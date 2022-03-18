import React from "react";
import "./Contacts.css";
import call_logo from "../images/call.svg";
import map_img from "../images/map.png";
import location_logo from "../images/location.svg";
import vk from "../images/VK.svg";
import tg from "../images/Telegram.svg";
import insta from "../images/Instagram.svg";
import wt_up from "../images/Whatsapp.svg";

const Contacts = () => {
  return (
    <section className="contacts">
      <div className="container contacts_container">
        <div className="contacts_left">
          <div className="contacts_left_top">
            <p className="office_desc">Наш офис</p>
            <img src={map_img} alt="" className="map" />
            <div className="maps_adress_box">
              <img src={location_logo} alt="" className="location_img" />
              <div className="adress_box">
                <address>Аксай-3а, 62ф, Алматы, Казахстан</address>
                <p className="etaj_kobinent">3 этаж 35 кабинет</p>
              </div>
            </div>
          </div>
          <div className="contacts_left_bottom">
            <img src={call_logo} alt="" className="call_img" />
            <a href="tel:+77777777777" className="tel_number_contacts">
              +7 777 777 77 77
            </a>
          </div>
        </div>
        <div className="contacts_right">
          <div className="messanger_contacts_box">
            <a href="https://www.youtube.com/">
              <img src={wt_up} alt="" width={40} height={40} />
            </a>
          </div>
          <div className="messanger_contacts_box">
            <a href="https://www.youtube.com/">
              <img src={vk} alt="" width={54} height={36} />
            </a>
          </div>
          <div className="messanger_contacts_box">
            <a href="https://www.youtube.com/">
              <img src={insta} alt="" width={40} height={40} />
            </a>
          </div>
          <div className="messanger_contacts_box">
            <a href="https://www.youtube.com/">
              <img src={tg} alt="" width={49} height={49} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
