import './StayConnected.css';

const posts = [
    {image:'posters/gitworkshop.png',link:'https://www.instagram.com/p/ClhadQ9uDbI/?utm_source=ig_web_copy_link'},
    {image:'posters/careers_in_Tech_11_9_2022.png',link:'https://www.instagram.com/p/Ckgm158O7Db/?utm_source=ig_web_copy_link'},
    {image:'posters/Technical_Interview_Prep_11_2_2022.png',link:'https://www.instagram.com/p/CkTNxqdOwaO/?utm_source=ig_web_copy_link'},
    {image:'posters/Intro_to_web_dev_9_28_2022.png',link:'https://www.instagram.com/p/Ci77nVfu7am/?utm_source=ig_web_copy_link'},
    {image:'posters/Smores2_1_23.png',link:'https://www.instagram.com/p/CoFQL_sutxO/?utm_source=ig_web_copy_link'},
    {image:'posters/SBCS_Mentorship_Program_Flyer.png',link:'https://www.instagram.com/p/CisE83Su_Xw/?utm_source=ig_web_copy_link'},

]

function StayConnected(){
    return(

        <div>
            <h1 className="sec-title">Stay Connected</h1>
            <h4 className ="text-xl text-black">Follow us on Instagram and join our discord server to get updated on our events, programs, and resources</h4>
            <div className="post-box-bg">
                <div className="post-box">
                    {posts.map(i => (
                        <div className="each-post">
                            <a href={i.link}>
                                <img className="post-pic" src={i.image} alt='posts'/>
                            </a>
                        </div>
                    ))} 
                </div>
            </div> 
        </div>

    );
}

export default StayConnected;