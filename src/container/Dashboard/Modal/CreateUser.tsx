import React, { useContext } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";

import Portal from "@/_shared/HOC/Portal";
import AppContext from "@/_lib/contextApi";

import { userValidationSchema } from "./validation";
import { useFormik } from "formik";
import FormError from "@/_shared/components/FormError";
import CustomModal from "@/_shared/components/CustomModal";
import { useAppDispatch } from "@/store";
import { createUser } from "@/store/slices/userSlice";


const CreateUser = () => {
    const dispatch = useAppDispatch();
    const { toggleCreateUser, setToggleCreateUser} =
        useContext(AppContext);

    const onSubmit = async (values: any) => {
        const payload = {
            ...values,
            discount: values?.user_type !== "business" ? "0.18" : "0.27"
        }

        dispatch(createUser({user_info: payload}))
        handleCancel();
    };

    const formik = useFormik({
        initialValues:{
            name: "",
            user_type: "",
        },
        validationSchema:userValidationSchema,
        onSubmit: onSubmit,
        
    })
    const {
        values,
        errors,
        setFieldValue,
        handleBlur,
        handleSubmit,
        touched,
        isSubmitting,
        isValid
    } = formik;

    const handleCancel = () => {
        setToggleCreateUser(false);
    };


  return (
    <Portal>
      <CustomModal
        open={toggleCreateUser}
        setClose={() => null}
        overFlowShouldNotCloseModal
      >
        <div className="w-[21rem] sm:w-[25rem]">
            <div className="p-4  sm:px-6">
                <h1 className="mb-1  text-lg font-semibold text-gray-900">
                    Create user
                </h1>
                <p className="text-sm ">
                    Please select fill the following fields below.
                </p>
            </div>

            <>
                <form className="px-4 pb-4 pt-0 sm:px-6 sm:pb-6 w-full space-y-5 h-auto  overflow-y-auto [&::-webkit-scrollbar]:appearance-none" onSubmit={handleSubmit}>
                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            User name
                        </label>
                        <TextField
                            onBlur={handleBlur}
                            onChange={(e) => setFieldValue("name", e.target.value)}
                            fullWidth
                            placeholder="Enter user name"
                        />
                        {touched.name && errors.name && <FormError message={errors.name} />}
                    </div>

                    <div className="w-full mt-5 text-gray-700">
                        <label className="mb-[0.36rem] block text-sm font-medium">
                            User type
                        </label>
                        <Select
                            fullWidth
                            value={values?.user_type}
                            onChange={(e) => setFieldValue("user_type", e.target.value)}
                            displayEmpty
                            inputProps={{ "aria-label": "Without label" }}
                            MenuProps={{
                            style: { zIndex: 35001 },
                            }}
                        >
                            <MenuItem value="">
                                <p className="text-base text-black-200">Select user type</p>
                            </MenuItem>

                            <MenuItem value={"business"}>Business</MenuItem>
                            <MenuItem value={"retail"}>Retail</MenuItem>
                        </Select>
                        {touched.user_type && errors.user_type && (
                            <FormError message={errors.user_type} />
                            )
                        }
                    </div>

                    <div className="mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <Button
                        component="label"
                        fullWidth
                        variant="outlined"
                        onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            fullWidth
                            type="submit"
                            disabled={!isValid || isSubmitting}
                            onClick={() => null}
                        >
                            Confirm
                        </Button>
                    </div>
                </form>
            </>
        </div>
      </CustomModal>
    </Portal>
  );
};

export default CreateUser;

