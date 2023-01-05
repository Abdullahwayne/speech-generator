import * as yup from 'yup';

export const questionSchema = yup.object().shape({
    selectedAtmosphere: yup.string().required("Kindly select Atmosphere"),
    selectedOccasion : yup.string().required(" Kindly select Occasion"),
    selectedRelation : yup.string().required("Kindly select Relation"),

    selectedRole : yup.string().required("Kindly select Role"),

        
  });   