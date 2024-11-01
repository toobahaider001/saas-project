import { CgNotes } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { FaHandshakeSimple, FaUsersBetweenLines } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { PiPipeLight } from "react-icons/pi";

export const features = [
    {
        icon: <FaUsers size={50} color="#fff" />,
        title: 'User Information',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe totam reiciendis ipsa beatae quidem nulla dolores ratione labore fugit non?'
    },
    {
        icon: <FaHandshakeSimple size={50} color="#fff"/>,
        title: 'Deal Tracking',
        description: 'Efficiently track and manage all your deals in one place, ensuring you never miss out on any opportunities.'
    },
    {
        icon:  <PiPipeLight size={50} color="#fff"/>,
        title: 'Pipeline Management',
        description: 'Visualize and manage your sales pipeline with ease, keeping track of each stage in your sales process.'
    },
    {
        icon: <CgNotes size={50} color="#fff" />,
        title: 'Reporting Dashboard',
        description: 'Get insights into your performance with detailed reports and dashboards tailored to your needs.'
    },
    {
        icon: <FaUsersBetweenLines size={50} color="#fff"/>,
        title: 'Meeting Scheduling',
        description: 'Streamline your scheduling process by managing and booking meetings with ease.'
    },
    {
        icon: <MdAttachEmail size={50} color="#fff"/>,
        title: 'Email Tracking',
        description: 'Monitor email opens and engagement, ensuring your communications are being received and acted upon.'
    }
];

