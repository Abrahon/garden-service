import { ImQuotesRight } from 'react-icons/im';
import client1 from '../../../assets/images/clients/client1.jpg';
import client2 from '../../../assets/images/clients/client2.jpg';
import client3 from '../../../assets/images/clients/client3.jpg';
import { AiFillStar } from 'react-icons/ai'

const ClientSay = () => {
    return (
        <div className="my-14">
        <div className="text-center mb-5">
            <h3 className="text-xl font-semibold">Natural Landscaping</h3>
            <h1 className="text-3xl font-bold">What Clients Say</h1>
        </div>
        <section className='grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-10 mx-4 md:mx-6 lg:mx-20 justify-center'>
            <div>
                <div className='shadow-2xl rounded-tl-[90px] rounded-br-[90px] p-2 text-center'>
                    <ImQuotesRight className='mx-auto my-4 text-4xl' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laboriosam eius et sed inventore veritatis vitae eaque voluptatem excepturi ut.</p>
                    <ul className='text-yellow-500 text-xl flex justify-center mt-5 mb-10'>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                    </ul>
                </div>
                <div className='-mt-8 text-center'>
                    <img className='w-16 rounded-full mx-auto justify-center' src={client1} alt="Happy Client" />
                    <h1 className="text-lg font-bold">Hazel</h1>
                    <p className="opacity-60">Client</p>
                </div>
            </div>
            <div>
                <div className='shadow-2xl rounded-tl-[90px] rounded-br-[90px] p-2 text-center'>
                    <ImQuotesRight className='mx-auto my-4 text-4xl' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laboriosam eius et sed inventore veritatis vitae eaque voluptatem excepturi ut.</p>
                    <ul className='text-yellow-500 text-xl flex justify-center mt-5 mb-10'>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                    </ul>
                </div>
                <div className='-mt-8 text-center'>
                    <img className='w-16 rounded-full mx-auto justify-center' src={client2} alt="Happy Client" />
                    <h1 className="text-lg font-bold">Victoria</h1>
                    <p className="opacity-60">Client</p>
                </div>
            </div>
            <div>
                <div className='shadow-2xl rounded-tl-[90px] rounded-br-[90px] p-2 text-center'>
                    <ImQuotesRight className='mx-auto my-4 text-4xl' />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id laboriosam eius et sed inventore veritatis vitae eaque voluptatem excepturi ut.</p>
                    <ul className='text-yellow-500 text-xl flex justify-center mt-5 mb-10'>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                        <li><AiFillStar /></li>
                    </ul>
                </div>
                <div className='-mt-8 text-center'>
                    <img className='w-16 rounded-full mx-auto justify-center' src={client3} alt="Happy Client" />
                    <h1 className="text-lg font-bold">Aurora</h1>
                    <p className="opacity-60">Client</p>
                </div>
            </div>
        </section>
    </div>
    );
};

export default ClientSay;