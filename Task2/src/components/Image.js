import React, {useState} from "react";
import { IoIosCloseCircle } from "react-icons/io";

const Image = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img
        className="card h-80 p-1 py-1 w-full object-cover cursor-pointer"
        src={data.urls.small}
        alt={data.alt_description}
        onClick={openModal}
      />
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
          <div className="p-4 rounded-lg w-5/6 h-full overflow-hidden flex items-center justify-center">
            <img
              className="max-w-full max-h-full relative"
              src={data.urls.full}
              alt={data.alt_description}
            />
            <button
              className="absolute top-[1vh] right-[16vh] p-2"
              onClick={closeModal}
            >
              <div
                className="text-[10vh] text-gray-300"
              >
                <IoIosCloseCircle />
              </div>
              
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Image;