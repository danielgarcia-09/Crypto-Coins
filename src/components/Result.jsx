const Result = ({res}) => {
    
    if(Object.keys(res).length === 0 ) return null;

    console.log(res);
    return (
        <div className='rounded-md  text-xl text-white py-4 px-10 bg-black mt-8 lg:mt-0'>
            <p>Price is: <span className='text-yellow-500'>{res.PRICE}</span> </p>
            <p>Highest Price of the day: <span className='text-green-500'>{res.HIGHDAY}</span> </p>
            <p>Lowest Price of the day: <span className='text-red-500'>{res.LOWDAY}</span> </p>
            <p>Percentage change in 24h: <span className='text-indigo-500'>{res.CHANGEPCT24HOUR}</span> </p>
            <p>Last Update: <span className='text-pink-500'>{res.LASTUPDATE}</span></p>
            
        </div>
    );
}
 
export default Result;