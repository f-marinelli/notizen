import Link from 'next/link';

const Logo = () => {
    return (
        <div className="container" style={{ width: '86%' }}>
            <div className='container-fluid d-flex justify-content-center'>
                <Link href="/">
                    <a className="navbar-brand" style={{ fontSize: '10rem', color: 'black' }}>Noti <color style={{ color: 'green' }}>Zen</color></a>
                </Link>
            </div>
        </div>


    );
};

export default Logo;