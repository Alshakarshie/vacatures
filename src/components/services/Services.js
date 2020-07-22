import React, { Component } from 'react';
import './services.scss';
import Title from '../title/Title';
import { FaConnectdevelop } from 'react-icons/fa';
import FadeIn from '../fadeIn/FadeIn';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaConnectdevelop />,
                title: "Front-end developer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            },
            {
                icon: <FaConnectdevelop />,
                title: "Back-end developer",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            },
            {
                icon: <FaConnectdevelop />,
                title: "Front-end consultant",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            },
            {
                icon: <FaConnectdevelop />,
                title: "back-end consultant",
                info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <FadeIn>
                    <Title title="Vacatures" />
                    <div className="services-center">
                        {this.state.services.map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                    </div>
                </FadeIn>
            </section>
        )
    }
}
