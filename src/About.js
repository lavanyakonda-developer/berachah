import React from "react";
import { extractFileIdFromGoogleDriveLink } from "./Utils";

const About = (props) => {
  return (
    <div className="column about-container">
      <h3 style={{ paddingBottom: 8 }}>About us</h3>
      <div className="row">
        <div className="col-md-10 col-lg-8">
          <h6>
            "Greetings in the precious name of our Lord and Saviour Jesus
            Christ, to whom belongs the honor and glory forever and ever"
          </h6>
          <p style={{ fontSize: 14, padding: "12px 0px" }}>
            Pastor K. Sam Babu, accepted Jesus Christ as his personal saviour
            and was baptized at the age of 16 years in the year 1989. He was
            saved under the ministry of God’s servants and Founders of BERACHAH
            Ministries Pastor. P. Yesupadam and Mrs. P. Prabhavathi Yesupadam
            and entered into full time ministry in obedience to God’s calling in
            the year 1992.
            <br />
            Pastor Sam Babu was the eldest son of late K. Satyanarayana and Mrs.
            Mercy Bai. He has a younger sister Mrs. Surya Kumari (Ruth) and a
            younger brother Mr. Shekar Babu (Moses). Initially his family was a
            carnal Christian family. When Pastor Sam Babu was 12 years old, his
            father died because of health problems. While his father was in ill
            condition, his mother Mercy Bai felt its hopeless to live without
            her husband and thought of ending her-life and her kids lives too by
            giving poison. But by the grace of God, as she has been saved before
            her husband promoted to God’s glory, courageously in God’s faith she
            took the complete responsibility of her family and brought up her
            children by doing tailoring work. Because of Mercy Bai, all her
            children turned to God at their early ages. One fine day, God spoke
            to Pastor Sam Babu through the message preached by his spiritual
            father Pastor. P. Yesupadam on topic: <br />
            <br />
            <h6>
              "What happens if you left behind at the time of second coming of
              Jesus Christ....... what happens to you if you die without
              salvation"
            </h6>
            <br />
            This message has taken roots in his heart and made him to attend the
            Church services regularly. When Pastor Sam Babu was studying his
            Intermediate, a particular question inspired him to think seriously
            i.e., "Jesus died for me on the cross in Calvary but in return what
            can I do for Him?" and a confirmed word from his spiritual father
            Pastor. Yesupadam:"God will repay for every small thing we do for
            HIM" made him to surrender himself totally to serve LORD Jesus
            Christ and with great burden and in obedience he has been working
            for God’s kingdom. Though Pastor Sam Babu got an opportunity to join
            in his father’s Government Job (in APSRTC), he rejected that offer
            and submitted himself for the full time ministry.
          </p>
        </div>
        <div
          className="col-md-10 col-lg-4"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <img
            src={extractFileIdFromGoogleDriveLink(
              "https://drive.google.com/file/d/1L4v3Z1Jz4yClJu1-lthNqc47AlWHHqKW/view?usp=sharing",
            )}
            alt=""
            style={{ height: "auto" }}
          />
        </div>
      </div>
      <p style={{ fontSize: 14 }}>
        Actually during this period, the whole family was struggling hard for
        survival with the hard earns income of his mother. For rejecting the job
        offer, his relatives criticized and scolded him and his mother too, but
        his mother encouraged him a lot to continue in the God’s ministry by
        taking all the pains of running her family. Pastor Sam Babu was so
        grateful and praise God for blessing him such a wonderful mother. Nearly
        for 11 years, Pastor. Sam Babu was under the guidance of his spiritual
        parents and had been trained for the ministry. He continued working in
        the God’s ministry as an associate pastor. Pastor Sam Babu got married
        in the year 2001. In the year 2002, along with his wife Mrs. Dhana
        Kumari, moved to Miyapur, Hyderabad to shepherd the BERACHAH Church
        located in the same area. This Church was started by his spiritual
        parents and has given the complete responsibilities to him to shepherd
        the Church. From there on he is continuing in this Church ministry in
        faith by solely depending on God. <br /> <br /> The Church ministry was
        primarily based on the following three promises of God: <br />
        <br />
        1. This was the Lord's doing, and it is marvelous in our eyes. - Mark
        12:11 <br /> 2. He that believeth shall not make haste. - Isaiah 28:16{" "}
        <br />
        3. Arise, shine; for thy light is come, and the glory of the LORD is
        risen upon thee. And the Gentiles shall come to thy light, and kings to
        the brightness of thy rising. - Isaiah 60:1 <br /> <br />3 Amazingly God
        developed and blessed BERACHAH Church by fulfilling these promises. In
        an unexpected and miraculous way, God helped to buy a plot for the
        Church and also helped to build a beautiful Church in it. The amazing
        grace of God and prayers, unity, submission and an abundant faith upon
        the LORD of the Church members are the key factors for the development
        of the Church. In BERACHAH Church, "CHILDREN ministry", "YOUTH
        ministry", "WOMENs ministry" and "MENs ministry" are like four pillars
        of the Church. All glory to God as every ministry is been flourishing
        well according to God’s will. BERACHAH Church conducts regular revival
        meetings in the Church, VBS for children, Family retreats, Youth
        retreats and Annual Gospel Public Meetings in the month of December
        every year, mainly to bring revival in the Church and to spread the
        Gospel of Jesus Christ to those who do not know about Jesus Christ.
        BERACHAH Church started MISSION-VISION activities according to the
        vision given by the LORD in 2006.
        <br />
        <ul>
          <li>Ministry of the church</li>
          <li>Intercession prayers</li>
          <li>Salvation proclamation</li>
          <li>Service to the poor and needy</li>
          <li>Institutions (education, bible school)</li>
          <li>Orphanages and old age homes</li>
          <li>National peace and welfare act</li>
        </ul>
        BERACHAH Church was doing social welfare activities under the banner:
        "BERACHAH HELPING HEART SERVICES", primarily extending help to those who
        are financially poor. BERACHAH Church was conducting these programs with
        FAITH by looking unto heavenly treasures. Please pray for us.
      </p>
    </div>
  );
};

export default About;
