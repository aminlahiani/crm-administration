import React from "react";

import { useDispatch, useSelector } from "react-redux";
import AbonnementTable from "../components/abonnement";
import { listAbonnements } from "../redux/actions/AbonnementAction";

import { logout } from "../redux/actions/userAction";

function Abonnement({ location, history }) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const Role = userInfo.user.role;
  const redirect = location.search ? location.search.split("=")[1] : "/";
  React.useEffect(() => {
    dispatch(listAbonnements());
  }, [dispatch]);
  const abonnementList = useSelector((state) => state.abonnementList);
  const { loading, error, abonnements } = abonnementList;
  console.log(abonnements)
  
  React.useEffect(() => {
    if (Role !== "ADMIN") {
      dispatch(logout());
      history.push(redirect);
    }
  }, [dispatch, history, Role, redirect]);

  return (
    <AbonnementTable abonnements={abonnements}/>
  )
}

export default Abonnement;
