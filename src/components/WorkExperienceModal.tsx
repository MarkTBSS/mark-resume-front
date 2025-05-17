import React from 'react';
import './WorkExperienceModal.css';

interface WorkExperienceModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const WorkExperienceModal: React.FC<WorkExperienceModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="modal-body">
                    <h2>Work Experience</h2>

                    <div className="experience-item">
                        <h4>Full-Stack Developer</h4>
                        <p><strong>Company:</strong> Brave Group APAC (Thailand) Co., Ltd, Ekamai</p>
                        <p><strong>Period:</strong> JULY 2024 - PRESENT</p>
                        <div className="experience-text">
                            <p>Brave Engine [ReactJS, NodeJS]</p>
                            <p>https://mecampus.life</p>
                            <p>Ai Assistant [ReactJS, NextJS]</p>
                            <p>https://openai-assistants-quickstart-mauve.vercel.app</p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <h4>Full-Stack Developer</h4>
                        <p><strong>Company:</strong> A Star Technology Co., Ltd, Bangkok</p>
                        <p><strong>Period:</strong> DEC 2023 – JULY 2024</p>
                        <div className="experience-text">
                            <p>PEA Request Solar Cell Request Form Project Flow Design</p>
                            <p>EasyPDPA Thailand https://easypdpathailand.com</p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <h4>Back-End Developer</h4>
                        <p><strong>Company:</strong> Yggdrazil Group Public Co., Ltd, Bangkok</p>
                        <p><strong>Period:</strong> JULY 2023 – NOV 2023</p>
                        <div className="experience-text">
                            <p>Developing Back End Service Architecture</p>
                            <p>Working alongside Unity Developer for service features</p>
                        </div>
                    </div>

                    <div className="experience-item">
                        <h4>Franchisee</h4>
                        <p><strong>Company:</strong> Bake A Wish, Union Mall Branch</p>
                        <p><strong>Period:</strong> 2018 - PRESENT</p>
                        <div className="experience-text">
                            <p>Coordinating daily restaurant management operations</p>
                            <p>Maximizing customer satisfaction</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkExperienceModal;