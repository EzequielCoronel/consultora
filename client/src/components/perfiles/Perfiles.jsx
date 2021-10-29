import { useEffect } from "react";
import CardAbogado from "../cardAbogado/CardAbogado";
import { getAbogados } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";

export default function Perfiles() {
  const dispatch = useDispatch();
  const { abogados } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getAbogados());
  }, [dispatch]);

  return (
    <>
      <div className="container mt-5">
        <div className="row row-cols-2 row-cols-lg-4 row-cols-xl-5 row-cols-md-2 g-5 animate__animated animate__fadeIn animate__faster">
          {abogados?.map((a, i) => {
            return <CardAbogado key={i} abogado={a}></CardAbogado>;
          })}
        </div>
      </div>
    </>
  );
}
