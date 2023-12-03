type CardPropsType = {
  name: string;
  image: string;
  ability1: string;
  ability2: string;
};

const Card: React.FC<CardPropsType> = ({
  name,
  image,
  ability2,
  ability1,
}: CardPropsType): JSX.Element => {
  return (
    <div className="w-[250px] bg-white h-[300px] rounded-2xl class flex flex-col m-10">
      <img src={image} className="h-1/2 w-full" />
      <div className="flex flex-col justify-between h-full p-8">
        <p className="text-black title-general">{name}</p>
        <div className="flex space-x-5">
          <p className="text-black">#{ability1}</p>
          <p className="text-black">#{ability2}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
