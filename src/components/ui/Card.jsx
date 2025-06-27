import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ id, image, title, description, instructor, role, avatar, rating, price }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/course/${id}`);
  };
  return (
    <div 
      className="max-w-[384px] bg-white rounded-xl border border-border-default hover:shadow-lg transition p-5 flex flex-col gap-4 cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} alt={title} className="rounded-xl w-full h-[193px] object-cover" />
      <div className="flex flex-col gap-2">
        <h6 className="h-5 md:h-9 font-poppins text-base md:text-[18px] font-semibold text-text-dark-primary leading-[1.2]">{title}</h6>
        <p className="font-dm-sans font-medium text-base text-text-dark-secondary line-clamp-2 leading-myline-2 tracking-myletter-2">{description}</p>  
      </div>
        {/* Instructor */}
        <div className="flex items-center gap-[10px]">
          <img src={avatar} alt={instructor} className="w-10 h-10 rounded-xl object-cover" />
          <div>
            <p className="text-[14px] md:text-base font-medium text-text-dark-primary leading-myline-2 tracking-myletter-2">{instructor}</p>
            <p className="text-xs md:text-[14px] text-text-dark-secondary leading-myline-2 tracking-myletter-2">{role}</p>
          </div>
        </div>

        {/* Rating & Price */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-warning-default text-2xl">
            ★★★☆☆
            <span className="text-text-dark-secondary text-sm font-dm-sans font-medium">({rating})</span>
          </div>
          <h4 className="text-primary font-poppins font-semibold text-xl md:text-2xl">{price}</h4>
        </div>
    </div>
  );
};

export default Card;
