import './Intro.css';

function Intro() {
    return(
        <div className="flex items-center py-12 px-20 bg-main-blue mt-3 border-7 border-black border-r-main-blue">
            <div className="flex flex-col justify-start p-10">
                <h1 className="text-left pb-5 text-7xl font-normal text-lighter-gray">We are the <span className="font-bold">Stony Brook Computing Society</span>_</h1>
                <h4 className="text-left pb-5 pr-20 text-2xl text-base font-normal text-lighter-gray">The Stony Brook Computing Society is a student organization at Stony Brook University created for all students who are interested in programming, computers, and related technology.</h4>
                <a className="py-3 px-7 mr-auto text-2xl font-bold border-3 bg-main-gray border-black inline-block leading-tight shadow-md hover:bg-hover-gray hover:shadow-lg focus:bg-hover-gray focus:shadow-lg focus:outline-none focus:ring-0 active:bg-hover-gray active:shadow-lg transition duration-150 ease-in-out" href="/#">Get Involved</a>
            </div>
            <img className="scale-130" src="logos/web-logo-b-PhotoRoom.png" alt="logo"></img>
        </div>
    )
}

export default Intro;