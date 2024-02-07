import CardMars from "../components/CardMars";
import { useHook } from "../hooks/useHook";

const CardsPage = () => {
  const { data } = useHook();

  return (
    <div>
      {data?.map((foto) => (
        //<div>{JSON.stringify(foto)}</div>
        <CardMars
          key={foto.id}
          name={foto.name}
          total={foto.description}
          camera={foto.color.name}
          image={foto.color.hex}
        />
      ))}
    </div>
  );
};

export default CardsPage;
