import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import GithubRepoCard from '../../components/githubRepoCard/GithubRepoCard';
import Button from "../../components/button/Button";
import {Fade} from 'react-reveal';
import {projectsHeader} from '../../portfolio.js';
import ProjectsData from '../../shared/opensource/projects.json';
import './Projects.css';
import ProjectsImg from './ProjectsImg';


class Projects extends Component {
    render(){
		const theme = this.props.theme;
        return (
					<div className="projects-main">
						<Header theme={theme} />
						<div className="basic-projects">
							<Fade bottom duration={2000} distance="40px">
								<div className="projects-heading-div">
									<div className="projects-heading-img-div">
										{ <img
											src={require(`../../assests/images/soundcloud.png`)}
											alt=""
										/> }

									</div>
									<div className="projects-heading-text-div">
										<h1 className="projects-heading-text" style={{ color: theme.text }}>
											{projectsHeader.title}
										</h1>
										<p className="projects-header-detail-text subTitle" style={{ color: theme.secondaryText }}>
											{projectsHeader["description"]}
										</p>
                                        <Button
                                            text={"Ouça"}
                                            className="project-button"
                                            href="https://soundcloud.com/daniel-marostica/sets/daniel-marostica"
                                            newTab={true}
                                            theme={theme}
                                        />
									</div>
								</div>

							</Fade>
						</div>
						<div className="repo-cards-div-main">
							{ProjectsData.data.map((repo) => {
								return <GithubRepoCard repo={repo} theme={theme} />;
							})}
						</div>

						<Footer theme={this.props.theme} onToggle={this.props.onToggle} />
					</div>
				);
    }
}

export default Projects;
