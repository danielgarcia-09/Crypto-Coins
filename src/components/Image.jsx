const Image = ({logo, alt}) => {
    return ( 
        <div className="mb-2 w-full h-90 lg:w-2/5">
            <img src={logo} alt={alt} />
        </div>
    );
}
 
export default Image;