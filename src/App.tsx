import { useState } from 'react'
import './App.css'
import ProfileModal from './components/ProfileModal'
import ImageModal from './components/ImageModal'
import WorkExperienceModal from './components/WorkExperienceModal'

function App() {
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isWorkExperienceModalOpen, setIsWorkExperienceModalOpen] = useState(false);
    const appVersion = "v1.0.0";

    const openImageModal = () => {
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
    };

    const openProfileModal = () => {
        setIsProfileModalOpen(true);
    };

    const closeProfileModal = () => {
        setIsProfileModalOpen(false);
    };

    const openWorkExperienceModal = () => {
        setIsWorkExperienceModalOpen(true);
    };

    const closeWorkExperienceModal = () => {
        setIsWorkExperienceModalOpen(false);
    };

    return (
        <div className="container">
            <div className="profile-section">
                <div className="profile-image-container">
                    <img
                        src="./myself-reduce.jpg"
                        className="profile-photo"
                        alt="My Profile Photo"
                        onClick={openImageModal}
                    />
                    <div className="version-badge">{appVersion}</div>
                </div>
                <div>
                    <button className="profile-button" onClick={openProfileModal}>Profile</button>
                    <button className="profile-button" onClick={openWorkExperienceModal}>Work Experience</button>
                </div>
                <div className="aws-certification">
                    <img
                        src="/aws-certified-cloud-practitioner.png"
                        alt="AWS Certified Cloud Practitioner"
                        className="aws-certificate-img"
                        onClick={() => window.open("https://www.credly.com/badges/9450035f-adee-4913-8731-6c6701666789/public_url", "_blank")}
                        style={{ cursor: "pointer" }}
                    />
                </div>
                <div className="aws-certification">
                    <img
                        src="/aws-certified-solutions-architect.png"
                        alt="AWS Certified Solutions Architect"
                        className="aws-certificate-img"
                        onClick={() => window.open("https://www.credly.com/badges/ff683ccc-6d2f-495d-99a7-2abac1117269/public_url", "_blank")}
                        style={{ cursor: "pointer" }}
                    />
                </div>

            </div>

            {/* Use the component for Image Modal */}
            <ImageModal
                isOpen={isImageModalOpen}
                onClose={closeImageModal}
                imagePath="./myself.jpg"
                altText="Full-size Profile Photo"
            />

            {/* Use the component for Profile Modal */}
            <ProfileModal
                isOpen={isProfileModalOpen}
                onClose={closeProfileModal}
            />

            {/* Use the component for Work Experience Modal */}
            <WorkExperienceModal
                isOpen={isWorkExperienceModalOpen}
                onClose={closeWorkExperienceModal}
            />
        </div>
    )
}

export default App