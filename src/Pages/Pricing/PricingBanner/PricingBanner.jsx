import AchivementImage from '../../../assets/images/homeImgs/AchivementImage.jpg';

const PricingBanner = () => {
    const achievementBg = {
        backgroundImage: `URL(${AchivementImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    }
    return (
        <div style={achievementBg} className=''>
            <div className='py-28 bg-gradient-to-r from-green-950/50 to-green-950/50'>
                <div className="text-center text-white">
                    <h1 className="title-font font-medium text-5xl">Pricing</h1>
                </div>
            </div>
        </div>
    );
};

export default PricingBanner;