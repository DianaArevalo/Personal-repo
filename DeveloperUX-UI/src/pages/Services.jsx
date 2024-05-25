import { ArquiCard } from "../cards/ArquiCard"
import servicesHagwon from "../assets/images/services-hagwon.png"
import servicesSosmotos from "../assets/images/services-sosmotos.png"

export const Services = () => {
    return (
        <section className='max-container'>
            <h1 className='head-text'>
                My <span className='rose-gradient_text font-semibold drop-shadow'
                >
                    Projects
                </span>
            </h1>
            <div className='mt-5 flex flex-col gap-3'>
                <p>
                    I've embarked on numerous projects troughout this years, but these are ones I hold closets to my heart.So if you come across something that piques your interest, feel free to explore.
                </p>
            </div>
            <div className='md:mt-10 justify-center items-center p-3 lg:p-20'>
                < ArquiCard />

            </div>
            <hr />

            <h1 className="head-text">Coming <span className="rose-gradient_text font-semibold drop-shadow ">soon...</span></h1>

            <div className="lg:w-[900px] min-h-[200px] rounded-[30px] border-white border-[5px] justify-center items-center bg-white flex-row lg:flex mt-16 ">
                <div className="p-10 w-4/5">
                    <h3 className="text-black text-xl font-poppins font-semibold">Api Rest FullStack MERN</h3>
                    <p className="text-black font-medium font-base">Hagwon School</p>
                    <p>This is an educational project developed with MongoDb, Node.js, Express, json webtoken and finally socket.io. <br />
                        In the front I used modern technologies such as React, Tailwind CSS and JavaScript. React allowed me to create a dynamic and responsive user interface, while Tailwind CSS facilitated the styling of the site with its class-based approach and flexibility.  </p>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                        <li className="text-black font-bold pl-1 text-sm underline">
                            <a href="https://github.com/DianaArevalo/HagwonS" className=""> Show progress in github</a>

                        </li>
                    </ul>

                </div>
                <div className="p-10 ">
                    <img src={servicesHagwon} alt="" />

                </div>

            </div>

            <div className="lg:w-[900px] min-h-[200px] rounded-[30px] border-white border-[5px] justify-center items-center bg-white flex-row lg:flex mt-16 ">
                <div className="p-10 w-4/5">
                    <h3 className="text-black text-xl font-poppins font-semibold">Api Rest FullStack with Strapi</h3>
                    <p className="text-black font-medium font-base">SOS MOTOS</p>
                    <p>Eccomerce develop with react, JavaScript, with  dynamic and fluid user interface that ensures smooth navigation.  <br />
                        In the back I've been worked with Strapi CMS provides a solid foundation for efficient and flexible content management and I can demonstrate my ability to learn and inovate with the last tecnologies.  </p>
                    <ul className="my-5 list-disc ml-5 space-y-2">
                        <li className="text-black font-bold pl-1 text-sm underline">
                            <a href="https://github.com/DianaArevalo/SOSMotos" className=""> Show progress in github</a>

                        </li>
                    </ul>

                </div>
                <div className="p-10 ">
                    <img src={servicesSosmotos} alt="" />

                </div>

            </div>



        </section>
    )
}
