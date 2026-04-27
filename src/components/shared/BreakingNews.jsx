import React from 'react';
import Marquee from 'react-fast-marquee';


const news = [
    { "id": "news_001", "title": "WhatsApp Introduces New 'Friendship Insights' Feature" },
    { "id": "news_002", "title": "Study: People With Strong Friendships Live 7 Years Longer" },
    { "id": "news_003", "title": "Top 5 Apps to Help You Stay Connected With Friends in 2026" },
    { "id": "news_004", "title": "Instagram Adds 'Close Friends' Activity Feed" },
    { "id": "news_005", "title": "Why Loneliness Is the Next Global Health Crisis" },
    { "id": "news_006", "title": "How Gen Z Is Redefining Friendship in the Digital Age" },
    { "id": "news_007", "title": "Google Calendar Now Suggests 'Friend Time' Based on Your Schedule" },
    { "id": "news_008", "title": "The Science Behind Why We Lose Touch With Old Friends" }
]



const BreakingNews = () => {
    return (
        <div className='flex justify-between gap-4 items-center bg-gray-200 py-4 px-2 container mx-auto'>
            <button className='btn bg-pink-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {
                    news.map(n=>{
                       return <span className='mx-6' key={n.id}>{n.title}</span>
                    } )
                }
            </Marquee>
        </div>
    );
};

export default BreakingNews;