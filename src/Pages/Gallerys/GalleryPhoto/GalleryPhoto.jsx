// import React from 'react';
import img1 from '../../../assets/images/galleryImgs/gallary1.jpg'
import img2 from '../../../assets/images/galleryImgs/gallary2.jpg'
import img3 from '../../../assets/images/galleryImgs/gallary3.jpg'
import img4 from '../../../assets/images/galleryImgs/gallary4.jpg'
import img7 from '../../../assets/images/galleryImgs/gallary7.jpg'
import img9 from '../../../assets/images/galleryImgs/gallary9.jpg'
import img10 from '../../../assets/images/galleryImgs/gallary10.jpg'

const GalleryPhoto = () => {
    return (
        <section className='container mx-auto '>
        <div className='lg:m-20 md:m-14 sm:8 m-10'>
            <div className='grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 sm:gap-1 lg:gap-8  '>

                <img src={img1} alt="" className=' h-auto max-w-full  px-1 ml-[-6px] rounded-tl-[95px] rounded-br-[90px] ' />
                <img src={img2} alt="" className=' h-full w-3/4 rounded-full ring-2 ring-white mx-auto ' />
                <img src={img3} alt="working" className='h-full w-3/4 rounded-full ring-2 ring-white mx-auto ' />

                <img src={img4} alt="working" className='w-full px-1 rounded-tr-[90px] rounded-bl-[95px]' />

            </div>

            <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 lg:my-8 sm:my-4 my-3 sm:gap-3 md:gap-5 lg:gap-6 gap-2'>
                <img src="https://img.freepik.com/free-photo/beautiful-green-park_1417-1448.jpg?size=626&ext=jpg&ga=GA1.1.69771372.1684763394&semt=ais" alt="" className='w-full' />
                <img src="https://img.freepik.com/premium-photo/man-worker-cutting-bushes-with-electric-saw-yard_732190-2487.jpg?size=626&ext=jpg&ga=GA1.1.69771372.1684763394&semt=ais" alt="" className='w-full' />
            </div>

            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:gap-3 lg:gap-6 gap-2 w-full'>
                <img src="https://img.freepik.com/premium-photo/japanese-garden-park-clingendael-hague-netherlands_163782-1556.jpg?size=626&ext=jpg&ga=GA1.1.69771372.1684763394&semt=ais" alt="" className='' />
                <img src={img7} alt="" className='w-full' />
                <img src={img9} alt="" className='w-full' />
            </div>

            <div className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 sm:gap-3 lg:gap-6 gap-2 w-full lg:my-8 my-3 sm:my-4'>
                <img src={img10} alt="" className='w-full px-1 rounded-tr-[90px] rounded-bl-[90px]' />
                <img src="https://img.freepik.com/free-photo/man-florist-working-green-house_1303-30271.jpg?size=626&ext=jpg&ga=GA1.1.69771372.1684763394&semt=ais" alt="" className='rounded-full max-h-full h-full w-3/4 sm:h-full w-3/4 mx-auto' />
                <img src="https://img.freepik.com/free-photo/park-with-wooden-pathway-benches_1137-254.jpg?size=626&ext=jpg&ga=GA1.1.69771372.1684763394&semt=sph" alt="" className='w-full px-1 ml-[-2px] rounded-tl-[90px] rounded-br-[90px]' />
            </div>
        </div>


    </section>
    );
};

export default GalleryPhoto;