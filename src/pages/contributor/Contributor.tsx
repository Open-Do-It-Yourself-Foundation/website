import React from 'react';
import { useHistory } from 'react-router-dom';
import './Contributor.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Contributor(props: any) {
    const { id, name, img, desc } = props.contributor;
    console.log(props.contributor);

    const history = useHistory();
    const profileDetails = (id: any) => {
        const url = `/profile/${id}`;
        history.push(url);
    };

    return (
        <div className="card">
            <img src={img} alt="Person" className="card__image" />
            <p className="card__name">{name}</p>
            <div className="grid-container">
                <div className="grid-child-posts">{desc}</div>
            </div>
            <ul className="social-icons">
                <li>
                    <a href="#">
                        <i>
                            <LinkedInIcon />
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i>
                            <FacebookIcon />
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i>
                            <TwitterIcon />
                        </i>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i>
                            <GitHubIcon />
                        </i>
                    </a>
                </li>
            </ul>

            <button className="btn draw-border" onClick={() => profileDetails(id)}>
                Explore
            </button>
        </div>
    );
}
