type ImageProfile ={
    src?: string;
};

export default function ImageProfile(props: ImageProfile) {
    return (
        <div className="w-70">
            <img 
            src={"https://image.tmdb.org/t/p/w500" + props.src} 
            alt="ImageProfile"></img>
        </div>
    )
}