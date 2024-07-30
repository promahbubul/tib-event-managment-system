import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const useAllUser = () => {
  const [users, setUsers] = useState(useLoaderData());
  const [deleteModal, setDeleModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteId, setDeleteId] = useState(null);


  
};
