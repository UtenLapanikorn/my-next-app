type ImageProfile = {
    src: string;
  };
  
  export default function ImageProfile(props: ImageProfile) {
    return (
      <div className="flex justify-center items-center h-72 bg-gray-200">
        <img
          src={props.src}
          alt="Poster"
          className="w-48 h-64 object-cover rounded-xl"
        />
      </div>
    );
  }
  