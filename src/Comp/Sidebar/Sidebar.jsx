

const Sidebar = ({gadget}) => {
    const {category}=gadget;
    const categoryX =[];
    

    return (
        <div>
            
            <p className="bg-gray-200 rounded-full w-40 text-sm py-3 pl-3">{category}</p>
        </div>
    );
};

export default Sidebar;