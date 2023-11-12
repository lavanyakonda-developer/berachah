import React from 'react';
import _ from 'lodash';
import { Card } from 'react-bootstrap';

const servicesList = [
  {
    title: 'Children Ministry',
    link: 'https://www.youtube.com/embed/19JXB8J3Tlk',
    text: 'Church is working towards every child having a life-enhancing encounter with the Christian faith and the person of Jesus Christ. Church strives in nurturing a child`s spiritual development based on the principles of Bible. Accordingly it conducts modular training programs with the good set of materials to equip and a child to grow spiritually and socially in the love of Jesus Christ. Children are lead by efficient Sunday school teachers who underwent several training programs and been continuously guided and trained by the Pastor of the Church.',
    timing:
      'Berachah Church conducts Children Club on every Saturday from 5:00 PM to 6:00 PM and Sunday school during Church Worship from 8:30 AM to 11:30 AM.',
  },
  {
    title: 'Youth Ministry',
    link: 'https://www.youtube.com/embed/3gkNcyWTRjI',
    text: 'The purpose of the Youth Ministry is to grow youth in their knowledge of and relationship with Jesus Christ and apply Christianity to every area of life. By using sound biblical teaching principles and discipleship, the ministry seeks to excite, inspire, capture and ignite young people for Jesus Christ. The goal is to connect with and engage young people in an appropriate way, so they understand the relevancy of God today and enable them to become tomorrow`s Christian leaders.',
    timing:
      'Berachah Church conducts Youth Service on every Sunday from 5:30 PM to 7:30 PM',
  },
  {
    title: "Women's Ministry",
    link: 'https://www.youtube.com/embed/hn6Zrq6P6D4',
    text: 'Berachah Church motivates women at every stage of life to gather in God`s presence to be inspired and encouraged by his love for us, support one another and to have joyful moments together at fellowship.',
    timing:
      'Women’s fellowship (cottage prayers) on every Thursday from 12:00 PM to 2:00 PM and Women fasting prayers on every Friday from 12:00 PM to 3:00 PM.',
  },
  {
    title: 'Mens Ministry',
    link: 'https://www.youtube.com/embed/QbZCKkKjHDw',
    text: 'Motivate, Encourage, Promote, Develop and Grow in Christian life are the key foundational aspects of Men`s ministry at BERACHAH Church.',
    timing:
      'Berachah Church conducts Men’s fasting prayers on every Friday from 7:00 PM to 9:00 PM.',
  },
];

const ServiceCard = ({ title, link, text, timing, index }) => {
  return (
    <div className={`card mb-4`} style={{ border: 0 }}>
      <div className='card-body '>
        <div className={`row ${index % 2 === 0 ? ' flex-row-reverse' : ''}`}>
          <div className='col-md-6'>
            <iframe
              title={title}
              width='100%'
              height='315'
              src={link}
              allowFullScreen
            ></iframe>
          </div>
          <div className='col-md-6'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{text}</p>
            <p className='card-text'>
              <strong>{timing}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className='services-container'>
      <h3>Our Services</h3>
      <div className='services-inner-container'>
        <Card
          className='text-center bg-color'
          style={{ maxWidth: 'max-content' }}
        >
          <Card.Body>
            <div className='services-inner-container'>
              <p>
                <strong>Sunday Services</strong> <br />
                <strong>First service:</strong> 7:30 AM <br />
                <strong>Second service:</strong> 10:30 AM <br />
                <strong>Evening service and Youth Meeting:</strong> 05:00 PM
              </p>
              <p>
                <strong>Bible Study:</strong> Tuesday 7:00 PM
              </p>
              <p>
                <strong>Fasting Prayers (Women):</strong> Friday 12:00 PM PM
              </p>
              <p>
                <strong>Fasting Prayers (Men):</strong> Friday 7:00 PM
              </p>
              <p>
                <strong>Children Club:</strong> Second saturday 5:00 PM
              </p>
            </div>
          </Card.Body>
        </Card>
      </div>

      {_.map(servicesList, (service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
};

export default Services;
