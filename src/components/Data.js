import { FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa';
import { DiDjango, DiMysql, DiRedis } from 'react-icons/di'; 
import { SiFlutter } from 'react-icons/si';
import { BsServer } from 'react-icons/bs';

const Data = [
    {
        id: 1,
        name: 'React',
        icon: <FaReact size={56}/>,
        description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
        url: 'https://reactjs.org/',
        
    },
    {
        id: 2,
        name: 'Node.js',
        icon: <FaNodeJs size={56}/>,
        description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive applications that run across distributed devices.',
        url: 'https://nodejs.org/en/',
    },
    {
        id: 3,
        name: 'Python',
        icon: <FaPython size={56}/>,
        description: 'Python is a programming language that lets you work quickly with human-readable text. It is often used to create programs that run in a web browser.',
        url: 'https://www.python.org/',
    },
    {
        id: 4,
        name: 'Django',
        icon: <DiDjango size={56}/>,
        description: 'Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.',
        url: 'https://www.djangoproject.com/',
    },
    {
        id: 5,
        name: 'MySQL',
        icon: <DiMysql size={56}/>,
        description: 'MySQL is a relational database management system (RDBMS) that is used to store and manage data.',
        url: 'https://www.mysql.com/',
    },
    {
        id: 6,
        name: 'Redis',
        icon: <DiRedis size={56}/>,
        description: 'Redis is a key-value store that is designed to be very fast, scalable, and efficient.',
        url: 'https://redis.io/',
    },
    {
        id: 7,
        name: 'Flutter',
        icon: <SiFlutter size={56}/>,
        description: 'Flutter is a mobile application framework for building native apps on iOS and Android from a single codebase.',
        url: 'https://flutter.dev/',
    },
    {
        id: 8,
        name: 'Git',
        icon: <FaGit size={56}/>,
        description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency',
        url: 'https://git-scm.com/'
    },
    {
        id: 9,
        name: 'Server',
        icon: <BsServer size={56}/>,
        description: 'A server is a computer program or device that provides a service to another computer program and its user, also known as the client.',
        url: 'https://www.server.com/'
    }
]

export default Data;