import React from "react";
import banner from "../../assets/banner.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.jpg";
import d1 from "../../assets/donation/d1.png";
import d2 from "../../assets/donation/d2.png";
import d3 from "../../assets/donation/d3.png";
import d4 from "../../assets/donation/d4.png";

const Home = () => {
    const bloodDonationType = [
        { blood: "A+", donate: "A+, AB+", receive: "A+, A-, O+, O-" },
        { blood: "O+", donate: "O+, A+, B+, AB+", receive: "O+, O-" },
        { blood: "B+", donate: "B+, AB+", receive: "B+, B-, O+, O-" },
        { blood: "AB+", donate: "AB+", receive: "Everyone" },
        { blood: "A-", donate: "A+, A-, AB+, AB-", receive: "A-, O-" },
        { blood: "O-", donate: "Everyone", receive: "O-" },
        { blood: "B-", donate: "B+, B-, AB+, AB-", receive: "B-, O-" },
        { blood: "AB-", donate: "AB+, AB-", receive: "AB-, A-, B-, O-" },
    ];
    const bloodDonationProcess = [
        {
            title: "Registration",
            img: d1,
            description:
                "During the registration process, donors provide essential personal information such as their name, contact details, and medical history. Additionally, they may be required to fill out forms or answer questions related to their eligibility to donate blood, ensuring the safety and suitability of their donation.",
        },
        {
            title: "Health Screening",
            img: d2,
            description:
                "Before donation, donors undergo health screening, including checks of blood pressure, temperature, and hemoglobin levels. They're also asked about recent travel, medications, and bloodborne disease risks.",
        },
        {
            title: "Donation",
            img: d3,
            description:
                "Donors, cleared for donation, give blood in a 10-15 minute process. Around one pint of blood is collected using sterile equipment. The process is supervised by trained medical staff to ensure donor safety.",
        },
        {
            title: "Impact",
            img: d4,
            description:
                "Donated blood is rigorously tested to ensure its safety. It's then stored and distributed to hospitals, where it's used in emergencies, surgeries, and medical treatments. Every donation can save up to three lives, making a significant impact on the community.",
        },
    ];

    return (
        <div className="dark:text-white-900">
            <img src={banner} alt="" />
            <div className="grid grid-cols-2 place-items-center mt-6 px-52">
                <div>
                    <img draggable={false} src={banner2} width="100%" alt="" />
                </div>
                <div>
                    <p className="text-center font-bold text-4xl text-gray-dark dark:text-white-900">
                        "To give blood, you need neither extra strength nor extra food, and you will save a life."
                    </p>
                </div>
            </div>
            <h1 className="font-bold text-center text-blood my-4 text-lg underline">
                Explore Blood Donation
            </h1>
            <div className="flex px-20">
                <div>
                    <img src={banner3} width="100%" alt="" />
                    <p className="text-center">
                        <code>
                            After giving blood, your body begins the remarkable process of
                            replenishing its supply. This renewal stimulates the production of
                            fresh blood cells, promoting overall well-being and vitality.
                        </code>
                    </p>
                </div>
                <div>
                    <table className="w-max" cellPadding={5}>
                        <tr>
                            <td
                                colSpan={3}
                                className="border bg-blood text-white-900 text-center font-bold"
                            >
                                Blood Type Compatibility Matrix
                            </td>
                        </tr>
                        <tr>
                            <th className="border w-max text-lg text-center">Blood Type</th>
                            <th className="border w-max text-lg text-center">
                                Compatible Donors
                            </th>
                            <th className="border w-max text-lg text-center">
                                Compatible Recipients
                            </th>
                        </tr>
                        {bloodDonationType.map((e) => {
                            return (
                                <tr>
                                    <td className="border w-max text-lg text-center">
                                        {e.blood}
                                    </td>
                                    <td className="border w-max text-lg text-center">
                                        {e.donate}
                                    </td>
                                    <td className="border w-max text-lg text-center">
                                        {e.receive}
                                    </td>
                                </tr>
                            );
                        })}
                    </table>
                </div>
            </div>
            <p className="text-xl underline font-bold text-blood text-center mt-5 mb-5">
                Blood Donation Process
            </p>
            <div className="grid grid-cols-2 place-items-center">
                {bloodDonationProcess.map((e, i) => (
                    <div className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2">
                        <div>
                            <img src={e.img} draggable={false} width="100%" alt="" />
                        </div>
                        <div className="m-4">
                            <h1 className="font-bold text-lg text-midnight dark:text-white-900">
                                {i + 1} - {e.title}
                            </h1>
                            <p className="text-justify">{e.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <br />
            <div className="w-full bg-blood text-white-900 h-max text-sm text-center font-bold">
                <code>
                    🩸 PulseConnect @ {new Date().getFullYear()} 🩸 || Made with ❤️ by
                    Rishikesh Darekar, Akshay Gadade, Abhay Deokar
                </code>
            </div>
        </div>
    );
};

export default Home;
