import React from 'react';
import ram_mandir from "../../assets/Ram_mandir.jpg";
import mahal from "../../assets/mahal.jpg";
import ram_ji from "../../assets/Ram_ji.jpg";
import hanuman_ji from "../../assets/hanuman_ji.webp";
import guptar_ghat from "../../assets/Guptar-Ghat-1.jpg";
import keleram from "../../assets/kaleram.jpeg";
import kanakbhawan from "../../assets/kanakbhawan1.jpeg";
import laxman_kila from "../../assets/laxman-Kila.jpeg";
import shringirishi from "../../assets/shringirishi.jpeg";
import surajkund from "../../assets/surajkund.jpeg";
import dashrathMahal from "../../assets/dashrathMahal1.jpeg";
import ghat from "../../assets/ghat.jpg";
import nageshwar_nath from "../../assets/Nageshwar-Nath.jpg";
import chhoti_devkali from "../../assets/Chhoti-Devkali.jpeg";
import mani_parvat from "../../assets/mani-parvat.jpg";
import makhau_dham from "../../assets/makhauda_Dham.jpeg";
import panchmukhi_mahadev from "../../assets/panchmukhimahadev.jpeg";

function DestinationPage() {
    const pic = [
        {
            id: 1,
            tittle: "Ram Mandir",
            img: ram_mandir
        },
        {
            id: 2,
            tittle: "Ram Ki Paidi",
            img: ghat
        },
        {
            id: 3,
            tittle: "Hanuman Gardi",
            img: hanuman_ji
        },
        {
            id: 4,
            tittle: "Kanak Bhawan",
            img: kanakbhawan
        },
        {
            id: 5,
            tittle: "Darshrath Mahal",
            img: dashrathMahal
        },
        {
            id: 6,
            tittle: "Kaleram Mandir",
            img: keleram
        },
        {
            id: 7,
            tittle: "Chhoti Devkali",
            img: chhoti_devkali
        },
        {
            id: 8,
            tittle: "Laxman Kila ",
            img: laxman_kila
        },
        {
            id: 9,
            tittle: "Mani Parvat",
            img: mani_parvat
        },
        {
            id: 10,
            tittle: "Guptar Ghat",
            img: guptar_ghat
        },
        {
            id: 11,
            tittle: "PanchmhukhiMahadev",
            img: panchmukhi_mahadev
        },
        {
            id: 12,
            tittle: "Makhauda Dham",
            img: makhau_dham
        },
    ];

    return (
        <div className='px-4 py-12 md:px-16'>
            <h1 className="pb-2 text-3xl font-bold text-center text-orange-600 font-ubuntu">Best Destination</h1>
            <h3 className="text-2xl font-bold text-center text-blue-950 font-poppins">Discover The Best Destination</h3>
            <p className='pt-4 pb-16 text-center text-slate-800'>We are here with most beautiful and eyecatching sites mentioned below with some names</p>
            <div className="flex flex-wrap">
                {pic.map((picture) => (
                    <div key={picture.id} className="flex flex-col items-center w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4 " data-aos="zoom-in">
                        <div className="relative overflow-hidden group rounded-xl">
                            <img 
                                className="object-cover w-full h-full transition-transform duration-300 transform group-hover:scale-105 aspect-square"
                                src={picture.img} 
                                alt={picture.tittle} 
                            />
                            <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-transparent transition duration-300 bg-transparent md:text-4xl font-ubuntu group-hover:text-white group-hover:bg-black group-hover:bg-opacity-50">
                                {picture.tittle}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DestinationPage;
