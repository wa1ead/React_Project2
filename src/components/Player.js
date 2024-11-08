function Player({ player }) {
  return (
    <div key={player.name} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
        <img
          alt={player.name}
          src={player.image}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{player.name}</h3>
          <p className="mt-1 text-sm text-gray-500">{player.team}</p>
        </div>
        <div>
          <p>{player.nationality}</p>
          <p>{player.jerseyNumber}</p>
        </div>
      </div>
    </div>
  );
}

export default Player;
