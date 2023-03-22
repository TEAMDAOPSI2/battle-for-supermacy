const RactangleTeam = ({name, image= '', className=''}) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="w-8 h-8 bg-white rounded-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-white text-sm">{name}</p>
    </div>
  );
}

export default RactangleTeam