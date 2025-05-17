import React from 'react'
import './ProfileModal.css'

interface ProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content profile-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close-button" onClick={onClose}>&times;</span>
                <div className="profile-details">
                    <h1>Aiya Aiyara</h1>
                    <p className="birth-info">
                        Born : 1980
                    </p>
                    <span className="thai-text">คนไทยครับ ไม่ต้องใช้ Work Permit</span>
                    <h2>Full Stack Developer</h2>
                    <p className="contact-info">
                        Nonthaburi Province, Sai-Ma MRT<br />
                        090-920-2999<br />
                        mr.aiya.aiyara@gmail.com
                    </p>
                    <div className="objective">
                        <h2>Objective</h2>
                        <span className="thai-text">จงให้ความเคารพตัวเอง ด้วยการมีระเบียบวินัย</span><br />
                        <span className="thai-text">จงให้ความเคารพผู้อื่น ด้วยความตรงต่อเวลา</span>
                    </div>
                    <div className="education">
                        <h2>Education</h2>
                        <p>ABAC: Master Degree - IT Management<br /> (2003 - 2004)</p>
                        <p>Vajiravudh College: Grade 12<br /> (1989 - 1999)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileModal;