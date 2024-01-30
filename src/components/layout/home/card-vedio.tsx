import { Icons } from "@/components/icon";

// Define the type for your component props
type CardVedioProps = {
  img: string;
  title: string;
  teacher: string;
  views: number | string;
  date: string; // You may need to change the type based on your actual data type
  description: string;
  avatar: string;
  tags?: string[]; // Make tags optional if it's not always present
};

const CardVedio: React.FC<CardVedioProps> = ({
  img,
  title,
  teacher,
  views,
  date,
  description,
  avatar,
  tags = [],
}) => {
  return (
    <div className="col-span-1 rounded-lg overflow-hidden bg-[#E1E1E1]">
      <div className="h-[250px] relative">
        <img
          src={img}
          alt=""
          className="w-full h-full object-cover rounded-lg aspect-[1.81]"
        />
        <div className="bg-black/20 w-full h-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Icons.play className=" w-[50px] h-[50px] cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
        </div>
        <span className="absolute bottom-2 right-2 text-white text-xs badge p-2">
          15:42
        </span>
        <div className="absolute top-2 right-2 flex gap-4">
          {tags.map((item, index) => (
            <span key={index} className="text-white text-xs badge p-3">
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between">
          <h1 className="font-normal">{title}</h1>
          <Icons.points className="w-[20px] h-[20px]" />
        </div>
        <div className="flex gap-2.5 items-start mt-5">
          <img
            loading="lazy"
            srcSet={avatar}
            className="aspect-square object-contain object-center w-14 overflow-hidden shrink-0 max-w-full rounded-[50%]"
          />
          <span className="items-stretch self-stretch flex grow basis-[0%] flex-col ">
            <span className="items-stretch flex w-full justify-between gap-5">
              <div className="text-black text-sm">{teacher}</div>
              <span className="items-center self-center flex gap-2.5 my-auto">
                <div className="text-black text-xs grow whitespace-nowrap my-auto">
                  {views} vues
                </div>
                <div className="text-black text-xs self-stretch grow whitespace-nowrap">
                  {date} ago
                </div>
              </span>
            </span>
            <div className="text-neutral-500 text-xs mt-2">{description}</div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardVedio;
