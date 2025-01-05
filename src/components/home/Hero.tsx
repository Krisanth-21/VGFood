import { useNavigate } from 'react-router-dom';
import background from '../../images/background.png';

const Button = () => {
  const navigate = useNavigate();

  return (
    <button
  onClick={() => navigate('/menu')}
  className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg text-gray-50 bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-orange-500 hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
>
  View Menu
  <svg
    className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-black ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
    viewBox="0 0 16 19"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
      className="fill-gray-800 group-hover:fill-gray-800"
    />
  </svg>
</button>

  );
};

const Hero = () => {

  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div>
        <img
          src={
            "C:\\Users\\krisa\\Downloads\\project-bolt-sb1-jhovxant (2)\\project\\src\\images\\home.png"
          }
          alt="Home"
        />
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">VG Foods</h1>
          <p className="text-xl md:text-2xl mb-8">Pure Home Cooked Foods</p>
          <div className="mb-8">
            <p className="text-lg">Open 10 AM to 5 PM</p>
            <p className="text-lg">Vegan, Veg and Non Veg</p>
            <p className="text-lg">07521 262119 | 07424 762470</p>
            <p className="text-lg">
              855 Bristol Rd South, Nortfield, Birmingham B31 2PA
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Hero;
