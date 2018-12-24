import React from 'react';

const location = () => {
    return (
        <div className="location_wrapper">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7411040657867!2d106.66593921476948!3d-6.297712795442023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb2eee75d933%3A0x991468450ab9d5e7!2sGraha+Telkomsigma!5e0!3m2!1sid!2sid!4v1545429159108" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen></iframe>

            <div className="location_tag">
                <div>location</div>
            </div>
        </div>
    );
};

export default location;