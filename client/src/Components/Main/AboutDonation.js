import React from 'react'
import d1 from "../../assets/donation/d1.png"
import d2 from "../../assets/donation/d2.png"
import d3 from "../../assets/donation/d3.png"
import d4 from "../../assets/donation/d4.png"

const AboutDonation = () => {
    const data = [
        { title: "Registration", img: d1, description: "Initiate the donation process by providing essential personal details and medical history." },
        { title: "Health Screening", img: d2, description: "Undergo comprehensive health assessments to confirm eligibility and ensure safety during donation." },
        { title: "Donation Process", img: d3, description: "Contribute to saving lives by donating a pint of blood in a straightforward and efficient process." },
        { title: "Life-saving Impact", img: d4, description: "Your donation undergoes thorough testing and distribution, making a profound impact by saving lives." },
    ];

    return (
        <section className="grid place-items-center dark:text-white-900">
            <div className="container">
                <div className="text-center"><br />
                    <h2 className='text-3xl font-bold'>Donation Process</h2>
                    <code>The process from your arrival at the center until your departure</code><br /><br />
                </div>
                <div className='grid grid-cols-4 place-items-center'>
                    {data.map((e, i) =>
                        <div className='border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none'>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                            <div className='m-4'>
                                <h1 className='font-bold text-lg text-midnight'>{i + 1} - {e.title}</h1>
                                <p className='text-justify'>{e.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutDonation;