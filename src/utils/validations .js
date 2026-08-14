const updateProfileValidations = async function (req) {
  const allowedFields = [
    "firstName",
    "LastName",
    "age",
    "photoUrl",
    "about",
    "skills",
  ];

  const isValid=Object.keys(req.body).every((feild) =>allowedFields.includes(feild))
  return isValid;
};

module.exports=updateProfileValidations